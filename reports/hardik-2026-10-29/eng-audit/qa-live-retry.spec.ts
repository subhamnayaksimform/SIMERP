// QA-only: drives the real ZohoHttpService + real axios against a local fake Zoho server.
import * as http from 'http';
import { AddressInfo } from 'net';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import { ZohoHttpService } from './zoho-http.service';

type Reply = { status: number; body?: unknown; headers?: Record<string, string> };

let server: http.Server;
let port = 0;
let tokenReplies: Reply[] = [];
let viewReplies: Reply[] = [];
let tokenHits = 0;
let viewHits = 0;
const hitTimes: number[] = [];

const ok = (body: unknown): Reply => ({ status: 200, body });
const TOKEN_OK = ok({ access_token: 'tok', expires_in: 3600 });

function makeService(baseUrl = `http://127.0.0.1:${port}`) {
    const cfg: Record<string, string> = {
        ZOHO_ACCOUNTS_URL: baseUrl,
        ZOHO_ANALYTICS_API_URL: baseUrl,
        ZOHO_WORKSPACE_ID: 'ws',
        ZOHO_CLIENT_ID: 'c',
        ZOHO_CLIENT_SECRET: 's',
        ZOHO_REFRESH_TOKEN: 'r',
    };
    const logs: string[] = [];
    const logger = {
        log: (m: string) => logs.push(m),
        warn: (m: string) => logs.push(`WARN ${m}`),
        error: (m: string) => logs.push(`ERROR ${m}`),
        debug: () => undefined,
        verbose: () => undefined,
    };
    const svc = new ZohoHttpService(logger as never, new HttpService(axios.create()), { get: (k: string) => cfg[k] } as never);
    return { svc, logs };
}

beforeAll(async () => {
    server = http.createServer((req, res) => {
        hitTimes.push(Date.now());
        const isToken = req.url?.startsWith('/oauth/v2/token');
        const queue = isToken ? tokenReplies : viewReplies;
        if (isToken) tokenHits++;
        else viewHits++;
        const r = queue.length > 1 ? queue.shift()! : queue[0];
        res.writeHead(r.status, { 'Content-Type': 'application/json', ...(r.headers ?? {}) });
        res.end(JSON.stringify(r.body ?? { message: `status ${r.status}` }));
    });
    await new Promise<void>((done) => server.listen(0, '127.0.0.1', () => done()));
    port = (server.address() as AddressInfo).port;
});
afterAll(() => new Promise<void>((done) => server.close(() => done())));
beforeEach(() => {
    tokenHits = 0;
    viewHits = 0;
    hitTimes.length = 0;
    tokenReplies = [TOKEN_OK];
    viewReplies = [ok({ data: [{ id: 1 }] })];
});

jest.setTimeout(60_000);

describe('QA live: ZohoHttpService retry against a fake Zoho server', () => {
    it('L01 token refresh: 503, 503, 200 -> succeeds on 3rd attempt', async () => {
        tokenReplies = [{ status: 503 }, { status: 503 }, TOKEN_OK];
        const { svc } = makeService();
        await expect(svc.getAccessToken()).resolves.toBe('tok');
        expect(tokenHits).toBe(3);
    });

    it('L02 token refresh: 5xx forever -> gives up after exactly 3 attempts', async () => {
        tokenReplies = [{ status: 502 }];
        const { svc } = makeService();
        await expect(svc.getAccessToken()).rejects.toThrow();
        expect(tokenHits).toBe(3);
    });

    it('L03 token refresh: 400 (bad refresh token) -> no retry', async () => {
        tokenReplies = [{ status: 400, body: { error: 'invalid_code' } }];
        const { svc } = makeService();
        await expect(svc.getAccessToken()).rejects.toThrow();
        expect(tokenHits).toBe(1);
    });

    it('L04 token refresh: 401 -> no retry', async () => {
        tokenReplies = [{ status: 401 }];
        const { svc } = makeService();
        await expect(svc.getAccessToken()).rejects.toThrow();
        expect(tokenHits).toBe(1);
    });

    it('L05 view data: 429 with Retry-After: 2 -> waits ~2s, then succeeds', async () => {
        viewReplies = [{ status: 429, headers: { 'Retry-After': '2' } }, ok({ data: [{ id: 7 }] })];
        const { svc } = makeService();
        const rows = await svc.fetchViewData<{ id: number }>('X' as never);
        expect(rows).toEqual([{ id: 7 }]);
        expect(viewHits).toBe(2);
        const gap = hitTimes[hitTimes.length - 1] - hitTimes[hitTimes.length - 2];
        expect(gap).toBeGreaterThanOrEqual(1900);
        expect(gap).toBeLessThan(4000);
    });

    it('L06 view data: 429 with HTTP-date Retry-After (~2s ahead) -> honoured', async () => {
        const when = new Date(Date.now() + 3000).toUTCString();
        viewReplies = [{ status: 429, headers: { 'Retry-After': when } }, ok({ data: [] })];
        const { svc } = makeService();
        await expect(svc.fetchViewData('X' as never)).resolves.toEqual([]);
        expect(viewHits).toBe(2);
        const gap = hitTimes[hitTimes.length - 1] - hitTimes[hitTimes.length - 2];
        expect(gap).toBeGreaterThanOrEqual(1000);
    });

    it('L07 view data: 404 invalid view -> no retry, error carries Zoho message', async () => {
        viewReplies = [{ status: 404, body: { message: 'View not found' } }];
        const { svc } = makeService();
        await expect(svc.fetchViewData('X' as never)).rejects.toThrow(/HTTP 404: View not found/);
        expect(viewHits).toBe(1);
    });

    it('L08 view data: 500 forever -> 3 attempts, then error', async () => {
        viewReplies = [{ status: 500 }];
        const { svc } = makeService();
        await expect(svc.fetchViewData('X' as never)).rejects.toThrow(/HTTP 500/);
        expect(viewHits).toBe(3);
    });

    it('L09 connection refused (Zoho unreachable) -> retried, then fails', async () => {
        const { svc, logs } = makeService('http://127.0.0.1:1');
        const t0 = Date.now();
        await expect(svc.getAccessToken()).rejects.toThrow();
        const retryLogs = logs.filter((l) => /retry|attempt/i.test(l));
        // eslint-disable-next-line no-console
        console.log('L09 elapsed', Date.now() - t0, 'ms; retry log lines:', retryLogs.length, retryLogs.slice(0, 3));
        expect(retryLogs.length).toBeGreaterThanOrEqual(2);
    });

    it('L10 five concurrent callers -> one token refresh', async () => {
        tokenReplies = [{ status: 503 }, TOKEN_OK];
        const { svc } = makeService();
        const all = await Promise.all([1, 2, 3, 4, 5].map(() => svc.getAccessToken()));
        expect(all.every((t) => t === 'tok')).toBe(true);
        expect(tokenHits).toBe(2);
    });

    it('L11 cached token reused, view call made once', async () => {
        const { svc } = makeService();
        await svc.fetchViewData('X' as never);
        await svc.fetchViewData('X' as never);
        expect(tokenHits).toBe(1);
        expect(viewHits).toBe(2);
    });
});
