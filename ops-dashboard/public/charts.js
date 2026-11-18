'use strict';
/* Small hand-rolled SVG charts — no libraries, works offline. Colors come from CSS custom
   properties (--s1…--s6 categorical, --good/--bad/--warn/--skip status) so light/dark swap in CSS. */

const Charts = (() => {
  const NS = 'http://www.w3.org/2000/svg';
  const escT = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let uid = 0;

  // ─── tooltip ───
  const tip = () => document.getElementById('tip');
  function showTip(x, y, html) {
    const t = tip();
    t.innerHTML = html;
    t.classList.remove('hidden');
    const w = t.offsetWidth, h = t.offsetHeight;
    const left = Math.min(window.innerWidth - w - 12, x + 14);
    const top = y - h - 12 < 8 ? y + 16 : y - h - 12;
    t.style.left = `${Math.max(8, left)}px`;
    t.style.top = `${top}px`;
  }
  const hideTip = () => tip().classList.add('hidden');
  const tipRow = (color, label, value) => `<div class="r"><i style="background:${color}"></i>${escT(label)}<b>${escT(value)}</b></div>`;

  // ─── scales ───
  /** Axis top that splits into 3 round steps (the chart draws 4 reference lines: 0 and three steps). */
  function niceMax(v) {
    const raw = Math.max(1, v / 3);
    const pow = 10 ** Math.floor(Math.log10(raw));
    for (const m of [1, 2, 2.5, 5, 10]) if (m * pow >= raw) return 3 * m * pow;
    return 30 * pow;
  }

  /** Monotone cubic (Fritsch–Carlson) path through points — smooth without overshooting. */
  function monotone(pts) {
    const n = pts.length;
    if (n < 2) return n ? `M${pts[0][0]},${pts[0][1]}` : '';
    const dx = [], dy = [], m = [];
    for (let i = 0; i < n - 1; i++) { dx[i] = pts[i + 1][0] - pts[i][0]; dy[i] = pts[i + 1][1] - pts[i][1]; m[i] = dy[i] / dx[i]; }
    const t = [m[0]];
    for (let i = 1; i < n - 1; i++) t[i] = m[i - 1] * m[i] <= 0 ? 0 : 3 * (dx[i - 1] + dx[i]) / ((2 * dx[i] + dx[i - 1]) / m[i - 1] + (dx[i] + 2 * dx[i - 1]) / m[i]);
    t[n - 1] = m[n - 2];
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 0; i < n - 1; i++) {
      const h = dx[i] / 3;
      d += `C${pts[i][0] + h},${pts[i][1] + h * t[i]} ${pts[i + 1][0] - h},${pts[i + 1][1] - h * t[i + 1]} ${pts[i + 1][0]},${pts[i + 1][1]}`;
    }
    return d;
  }

  /**
   * Area/line chart, one shared y-axis. series: [{ name, color: 'var(--s1)', values: number[] }], labels: string[]
   * Crosshair + tooltip on hover, gradient fill under each line, endpoint direct labels.
   */
  function area(el, { labels, series, height = 250, fmtLabel = l => l, onClick, maxY }) {
    const W = Math.max(320, el.clientWidth), H = height;
    const M = { l: 34, r: 44, t: 12, b: 26 };
    const iw = W - M.l - M.r, ih = H - M.t - M.b;
    const max = maxY ?? niceMax(Math.max(1, ...series.flatMap(s => s.values)));
    const n = labels.length;
    const x = i => M.l + (n === 1 ? iw / 2 : (i * iw) / (n - 1));
    const y = v => M.t + ih - (v / max) * ih;
    const id = `g${++uid}`;
    const ticks = [0, max / 3, (2 * max) / 3, max].map(v => Math.round(v));
    const xTicks = Math.min(6, n);
    const xIdx = [...new Set(Array.from({ length: xTicks }, (_, k) => Math.round((k * (n - 1)) / Math.max(1, xTicks - 1))))];

    let svg = `<svg viewBox="0 0 ${W} ${H}" height="${H}" role="img" aria-label="${escT(series.map(s => s.name).join(' and '))} over time"><defs>`;
    series.forEach((s, k) => {
      svg += `<linearGradient id="${id}-${k}" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" style="stop-color:${s.color};stop-opacity:.22"/><stop offset="100%" style="stop-color:${s.color};stop-opacity:0"/></linearGradient>`;
    });
    svg += '</defs><g class="axis">';
    for (const v of ticks) svg += `<line class="gridline" x1="${M.l}" x2="${W - M.r}" y1="${y(v)}" y2="${y(v)}"/><text x="${M.l - 8}" y="${y(v) + 4}" text-anchor="end">${v}</text>`;
    for (const i of xIdx) svg += `<text x="${x(i)}" y="${H - 6}" text-anchor="${i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle'}">${escT(fmtLabel(labels[i]))}</text>`;
    svg += '</g>';
    series.forEach((s, k) => {
      const pts = s.values.map((v, i) => [x(i), y(v)]);
      const line = monotone(pts);
      svg += `<path class="fill" d="${line} L${x(n - 1)},${y(0)} L${x(0)},${y(0)} Z" style="fill:url(#${id}-${k})"/>`;
      svg += `<path class="line" pathLength="1" d="${line}" fill="none" style="stroke:${s.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    });
    // Direct labels at the line ends (nudged apart when close).
    const ends = series.map(s => ({ s, yy: y(s.values[n - 1] ?? 0) })).sort((a, b) => a.yy - b.yy);
    for (let k = 1; k < ends.length; k++) if (ends[k].yy - ends[k - 1].yy < 14) ends[k].yy = ends[k - 1].yy + 14;
    for (const e of ends) svg += `<text class="endlabel" x="${W - M.r + 8}" y="${e.yy + 4}">${e.s.values[n - 1] ?? 0}</text>`;
    // Heartbeat-style pulse on the newest point of every series.
    series.forEach(sr => { const cy = y(sr.values[n - 1] ?? 0); svg += `<circle class="beat-ring" cx="${x(n - 1)}" cy="${cy}" r="4" style="stroke:${sr.color}"/><circle cx="${x(n - 1)}" cy="${cy}" r="3.5" style="fill:${sr.color};stroke:var(--panel)" stroke-width="1.5"/>`; });
    svg += `<g class="hover" style="display:none"><line class="cross" y1="${M.t}" y2="${M.t + ih}" style="stroke:var(--muted)" stroke-width="1"/>`;
    series.forEach(s => { svg += `<circle r="4.5" style="fill:${s.color};stroke:var(--panel)" stroke-width="2"/>`; });
    svg += `</g><rect class="hit" x="${M.l}" y="${M.t}" width="${iw}" height="${ih}" fill="transparent"/></svg>`;
    el.innerHTML = svg;

    const root = el.querySelector('svg'), hover = root.querySelector('.hover'), hit = root.querySelector('.hit');
    hit.addEventListener('mousemove', ev => {
      const r = root.getBoundingClientRect();
      const px = ((ev.clientX - r.left) / r.width) * W;
      const i = Math.max(0, Math.min(n - 1, Math.round(((px - M.l) / iw) * (n - 1))));
      hover.style.display = '';
      hover.querySelector('.cross').setAttribute('x1', x(i));
      hover.querySelector('.cross').setAttribute('x2', x(i));
      hover.querySelectorAll('circle').forEach((c, k) => { c.setAttribute('cx', x(i)); c.setAttribute('cy', y(series[k].values[i])); });
      showTip(ev.clientX, ev.clientY, `<div class="t">${escT(fmtLabel(labels[i], true))}</div>${series.map(s => tipRow(s.color, s.name, s.values[i])).join('')}`);
    });
    hit.addEventListener('mouseleave', () => { hover.style.display = 'none'; hideTip(); });
    if (onClick) {
      hit.style.cursor = 'pointer';
      hit.addEventListener('click', ev => {
        const r = root.getBoundingClientRect();
        const i = Math.max(0, Math.min(n - 1, Math.round(((((ev.clientX - r.left) / r.width) * W - M.l) / iw) * (n - 1))));
        hideTip(); onClick(i, labels[i]);
      });
    }
  }

  /**
   * ECG-style heartbeat line. state: 'ok' (beats), 'bad' (fast, red), 'down' (flat line), 'busy'
   * (progress — accent colour). A bright pulse travels along a faint trace; CSS does the motion.
   */
  function heartbeat(state = 'ok', { width = 120, height = 28, beats = 3 } = {}) {
    const mid = height / 2, seg = width / beats;
    let d = `M0,${mid}`;
    if (state === 'down' || state === 'idle') d += ` L${width},${mid}`;
    else for (let i = 0; i < beats; i++) {
      const x = i * seg;
      d += ` L${x + seg * 0.30},${mid} L${x + seg * 0.36},${mid - height * 0.12} L${x + seg * 0.42},${mid}`
        + ` L${x + seg * 0.48},${mid + height * 0.10} L${x + seg * 0.54},${height * 0.06} L${x + seg * 0.60},${height * 0.94}`
        + ` L${x + seg * 0.66},${mid} L${x + seg * 0.78},${mid - height * 0.16} L${x + seg * 0.88},${mid} L${x + seg},${mid}`;
    }
    return `<svg class="hb hb-${state}" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" aria-hidden="true" preserveAspectRatio="none">
      <path class="hb-trace" d="${d}" pathLength="1"/><path class="hb-pulse" d="${d}" pathLength="1"/></svg>`;
  }

  /** Little beetle — legs and antennae animate in CSS (.bug-ico). */
  function bug(size = 16, cls = '') {
    const legs = [[7, 9, 2, 7], [7, 12, 1.5, 12.5], [7, 15, 2.5, 18], [17, 9, 22, 7], [17, 12, 22.5, 12.5], [17, 15, 21.5, 18]]
      .map(([x1, y1, x2, y2], i) => `<line class="leg leg${i % 3} ${i < 3 ? 'l' : 'r'}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`).join('');
    return `<svg class="bug-ico ${cls}" viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">
      <g class="ant"><path class="ant-l" d="M10 5 Q8.5 2.5 7 2"/><path class="ant-r" d="M14 5 Q15.5 2.5 17 2"/></g>
      ${legs}<ellipse class="head" cx="12" cy="6.5" rx="3" ry="2.4"/><ellipse class="body" cx="12" cy="13.5" rx="5" ry="6.5"/><line class="seam" x1="12" y1="8" x2="12" y2="19.5"/></svg>`;
  }

  /** Animate numbers in `.n` elements from 0 to their value (keeps any non-numeric suffix). */
  function countUp(root) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    root.querySelectorAll('.n').forEach(el => {
      const m = /^(\D*)([\d,]+)(.*)$/.exec(el.textContent.trim());
      if (!m) return;
      const target = Number(m[2].replace(/,/g, '')), t0 = performance.now(), dur = 700;
      if (!target) return;
      const step = now => {
        const k = Math.min(1, (now - t0) / dur), v = Math.round(target * (1 - (1 - k) ** 3));
        el.textContent = `${m[1]}${v.toLocaleString()}${m[3]}`;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  function arc(cx, cy, r, a0, a1) {
    const p = a => [cx + r * Math.sin(a), cy - r * Math.cos(a)];
    const [x0, y0] = p(a0), [x1, y1] = p(a1);
    return `M${x0},${y0} A${r},${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1},${y1}`;
  }

  /** Donut with a 2px gap between segments, center total, and a legend that doubles as the table view. */
  function donut(el, { segments, centerLabel, onClick }) {
    const total = segments.reduce((a, s) => a + s.value, 0);
    const S = 168, c = S / 2, r = 64, w = 18, gap = segments.length > 1 ? 2 / r : 0;
    let a = 0, paths = '';
    segments.forEach((s, i) => {
      const span = (s.value / total) * Math.PI * 2;
      const a0 = a + gap / 2, a1 = Math.max(a0 + 0.001, a + span - gap / 2);
      paths += `<path data-i="${i}" pathLength="1" d="${arc(c, c, r, a0, a1)}" fill="none" style="stroke:${s.color};cursor:pointer;animation-delay:${i * 0.08}s" stroke-width="${w}" stroke-linecap="butt"/>`;
      a += span;
    });
    el.innerHTML = `<div class="donut-wrap">
      <svg viewBox="0 0 ${S} ${S}" role="img" aria-label="${escT(centerLabel)}">${paths}
        <g class="donut-center"><text class="big" x="${c}" y="${c + 4}" text-anchor="middle">${total}</text><text class="lab" x="${c}" y="${c + 22}" text-anchor="middle">${escT(centerLabel)}</text></g>
      </svg>
      <div class="dlegend">${segments.map((s, i) => `<div data-i="${i}"><i style="background:${s.color}"></i><span>${escT(s.name)}</span><span class="v">${s.value}</span><span class="p">${Math.round((s.value / total) * 100)}%</span></div>`).join('')}</div>
    </div>`;
    const hl = (i, on) => { el.querySelectorAll(`[data-i="${i}"]`).forEach(n => n.classList.toggle('hl', on)); el.querySelectorAll('path').forEach(p => (p.style.opacity = on && p.dataset.i !== String(i) ? '.35' : '1')); };
    el.querySelectorAll('[data-i]').forEach(n => {
      n.addEventListener('mousemove', ev => { const s = segments[n.dataset.i]; hl(n.dataset.i, true); showTip(ev.clientX, ev.clientY, `${tipRow(s.color, s.name, s.value)}<div class="t" style="margin:4px 0 0">${Math.round((s.value / total) * 100)}% of ${total}</div>`); });
      n.addEventListener('mouseleave', () => { hl(n.dataset.i, false); hideTip(); });
      if (onClick) { n.style.cursor = 'pointer'; n.addEventListener('click', () => { hideTip(); onClick(segments[n.dataset.i]); }); }
    });
  }

  /** Horizontal bars, one series → one color. */
  function bars(el, { rows, color = 'var(--s1)', unit = '' }) {
    const max = Math.max(1, ...rows.map(r => r.value));
    el.innerHTML = `<div class="barlist">${rows.map((r, i) => `<div class="barrow${r.onClick ? ' clickable-row' : ''}" data-i="${i}"><span class="name" title="${escT(r.name)}">${escT(r.name)}</span><div class="track"><div class="fill" style="width:${(r.value / max) * 100}%;background:${color};animation-delay:${i * 0.05}s"></div></div><span class="v">${r.value}</span></div>`).join('')}</div>`;
    el.querySelectorAll('.barrow').forEach(n => {
      n.addEventListener('mousemove', ev => { const r = rows[n.dataset.i]; showTip(ev.clientX, ev.clientY, tipRow(color, r.name, `${r.value}${unit}`) + (r.note ? `<div class="t" style="margin:4px 0 0">${escT(r.note)}</div>` : '')); });
      n.addEventListener('mouseleave', hideTip);
      if (rows[n.dataset.i].onClick) n.addEventListener('click', () => { hideTip(); rows[n.dataset.i].onClick(); });
    });
  }

  /** Segmented progress ring (status colors). parts: [{ value, color }], center text. Returns SVG markup. */
  function ring(parts, center, size = 58, stroke = 6) {
    const c = size / 2, r = c - stroke / 2 - 1, total = parts.reduce((a, p) => a + p.value, 0);
    let svg = `<svg viewBox="0 0 ${size} ${size}"><circle cx="${c}" cy="${c}" r="${r}" fill="none" style="stroke:var(--grid)" stroke-width="${stroke}"/>`;
    if (total > 0) {
      let a = 0;
      const gap = parts.filter(p => p.value > 0).length > 1 ? 2.5 / r : 0;
      for (const p of parts) {
        if (!p.value) continue;
        const span = (p.value / total) * Math.PI * 2;
        if (span >= Math.PI * 2 - 0.0001) svg += `<circle cx="${c}" cy="${c}" r="${r}" fill="none" style="stroke:${p.color}" stroke-width="${stroke}"/>`;
        else svg += `<path pathLength="1" d="${arc(c, c, r, a + gap / 2, Math.max(a + gap / 2 + 0.001, a + span - gap / 2))}" fill="none" style="stroke:${p.color}" stroke-width="${stroke}" stroke-linecap="round"/>`;
        a += span;
      }
    }
    return `${svg}<text class="pct" x="${c}" y="${c + 4}" text-anchor="middle">${escT(center)}</text></svg>`;
  }

  /** Tiny trend line for stat tiles. Returns SVG markup (empty when there are <2 points). */
  function spark(values, color = 'var(--accent)') {
    if (values.length < 2) return '';
    const W = 160, H = 30, max = Math.max(...values), min = Math.min(...values), span = max - min || 1;
    const pts = values.map((v, i) => [(i * W) / (values.length - 1), H - 3 - ((v - min) / span) * (H - 6)]);
    const id = `sp${++uid}`;
    const line = monotone(pts);
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" style="stop-color:${color};stop-opacity:.25"/><stop offset="100%" style="stop-color:${color};stop-opacity:0"/></linearGradient></defs>
      <path d="${line} L${W},${H} L0,${H} Z" style="fill:url(#${id})"/><path d="${line}" fill="none" style="stroke:${color}" stroke-width="1.6" vector-effect="non-scaling-stroke"/></svg>`;
  }

  return { area, donut, bars, ring, spark, showTip, hideTip, countUp, heartbeat, bug };
})();
