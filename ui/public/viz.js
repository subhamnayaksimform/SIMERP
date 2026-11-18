// SimERP QA Workspace — small inline-SVG charts + hover tooltip (no libraries).
// Status is never colour-alone: every status mark has an icon + label nearby, failed marks are
// hatched, and adjacent segments are separated by a 2px surface gap.

const STATUS = {
  passed: { label: 'Passed', icon: '✓', cls: 'passed' },
  failed: { label: 'Failed', icon: '✕', cls: 'failed' },
  flaky: { label: 'Flaky', icon: '~', cls: 'flaky' },
  skipped: { label: 'Skipped', icon: '–', cls: 'skipped' },
};
const STATUS_KEYS = ['passed', 'failed', 'flaky', 'skipped'];
const vesc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pct = (n, d) => (d ? Math.round((n / d) * 100) : 0);

/** Shared <defs>: the hatch texture used for failed marks. Inserted once per page. */
function ensureSvgDefs() {
  if (document.getElementById('viz-defs')) return;
  const d = document.createElement('div');
  d.innerHTML = `<svg id="viz-defs" width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <pattern id="hatch-failed" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="6" height="6" class="hatch-bg"/><line x1="0" y1="0" x2="0" y2="6" class="hatch-line" stroke-width="2.4"/>
    </pattern></defs></svg>`;
  document.body.appendChild(d.firstChild);
}

/** Donut of a run summary. Center shows pass rate; each arc has a data-tip. */
function donut(s, { size = 168, stroke = 18, center } = {}) {
  ensureSvgDefs();
  const r = (size - stroke) / 2, C = 2 * Math.PI * r, total = STATUS_KEYS.reduce((n, k) => n + (s[k] || 0), 0);
  const ran = total - (s.skipped || 0);
  if (!total) return `<svg class="donut" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="donut-track" stroke-width="${stroke}"/><text x="50%" y="50%" class="donut-big" dominant-baseline="middle" text-anchor="middle">—</text></svg>`;
  const gap = 2;
  const parts = STATUS_KEYS.filter(k => s[k]);
  let offset = 0;
  const arcs = parts.map(k => {
    const len = (s[k] / total) * C;
    const dash = Math.max(len - (parts.length > 1 ? gap : 0), 0.5);
    const el = `<circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" class="arc arc-${k}" stroke-width="${stroke}"
      stroke-dasharray="${dash} ${C - dash}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${size / 2} ${size / 2})"
      data-tip="${STATUS[k].icon} ${STATUS[k].label}: ${s[k]} (${pct(s[k], total)}%)"/>`;
    offset += len;
    return el;
  }).join('');
  const big = center ?? `${pct(s.passed || 0, ran)}%`;
  return `<svg class="donut" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${STATUS_KEYS.map(k => `${s[k] || 0} ${k}`).join(', ')}">
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="donut-track" stroke-width="${stroke}" fill="none"/>${arcs}
    <text x="50%" y="47%" class="donut-big" text-anchor="middle" dominant-baseline="middle">${big}</text>
    <text x="50%" y="62%" class="donut-small" text-anchor="middle" dominant-baseline="middle">pass rate</text></svg>`;
}

/** Legend for status marks — icon + label + count, text in text tokens. */
function statusLegend(s, { clickable } = {}) {
  return `<ul class="legend">${STATUS_KEYS.map(k => `<li${clickable ? ` data-legend="${k}" tabindex="0"` : ''}><span class="sw sw-${k}"></span><span class="lg-icon">${STATUS[k].icon}</span>${STATUS[k].label}<b>${(s[k] || 0).toLocaleString()}</b></li>`).join('')}</ul>`;
}

/** Thin horizontal stacked bar (with gaps + per-segment tooltips). */
function stackBar(s, { height = 8 } = {}) {
  const total = STATUS_KEYS.reduce((n, k) => n + (s?.[k] || 0), 0);
  if (!total) return `<div class="sbar empty" style="height:${height}px" data-tip="Not run yet"></div>`;
  return `<div class="sbar" style="height:${height}px">${STATUS_KEYS.filter(k => s[k]).map(k =>
    `<span class="seg ${k}" style="flex:${s[k]}" data-tip="${STATUS[k].icon} ${STATUS[k].label}: ${s[k]} of ${total}"></span>`).join('')}</div>`;
}

/** Pass-rate trend across runs: 2px line, markers, big hit targets, one axis (0–100%). */
function trendLine(points, { width = 320, height = 90 } = {}) {
  if (points.length < 2) return '';
  const pad = { l: 30, r: 10, t: 10, b: 18 };
  const W = width - pad.l - pad.r, H = height - pad.t - pad.b;
  const x = i => pad.l + (points.length === 1 ? W / 2 : (i / (points.length - 1)) * W);
  const y = v => pad.t + H - (v / 100) * H;
  const path = points.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.rate).toFixed(1)}`).join(' ');
  const grid = [0, 50, 100].map(v => `<line x1="${pad.l}" x2="${width - pad.r}" y1="${y(v)}" y2="${y(v)}" class="grid-line"/><text x="${pad.l - 6}" y="${y(v)}" class="axis-text" text-anchor="end" dominant-baseline="middle">${v}%</text>`).join('');
  const marks = points.map((p, i) => `<g class="pt" data-tip="${vesc(p.label)} — ${p.rate}% passed (${p.passed} passed, ${p.failed} failed)"><circle cx="${x(i)}" cy="${y(p.rate)}" r="12" class="hit"/><circle cx="${x(i)}" cy="${y(p.rate)}" r="4" class="dot${p.failed ? ' bad' : ''}"/></g>`).join('');
  return `<svg class="trend" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" role="img" aria-label="Pass rate over ${points.length} runs">${grid}<path d="${path}" class="trend-line"/>${marks}</svg>`;
}

/** Small ring for a pass rate: green = passed share, hatched red = failed share of tests that ran. */
function ring(rate, { size = 64, stroke = 7, failedRate = 0 } = {}) {
  ensureSvgDefs();
  const r = (size - stroke) / 2, C = 2 * Math.PI * r, c = size / 2;
  const gap = failedRate && rate ? 2 : 0;
  const pLen = Math.max((rate / 100) * C - gap, 0), fLen = Math.max((failedRate / 100) * C - gap, failedRate ? 1.5 : 0);
  return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${rate}% passed${failedRate ? `, ${failedRate}% failed` : ''}">
    <circle cx="${c}" cy="${c}" r="${r}" class="donut-track" stroke-width="${stroke}" fill="none"/>
    <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke-width="${stroke}" class="ring-val" stroke-dasharray="${pLen} ${C}" transform="rotate(-90 ${c} ${c})"/>
    ${failedRate ? `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke-width="${stroke}" class="ring-fail" stroke-dasharray="${fLen} ${C}" stroke-dashoffset="${-(rate / 100) * C}" transform="rotate(-90 ${c} ${c})"/>` : ''}
    <text x="50%" y="52%" text-anchor="middle" dominant-baseline="middle" class="ring-text">${rate}%</text></svg>`;
}

/** Count a number up from 0 (respects reduced motion). */
function countUp(el, to, { suffix = '' } = {}) {
  if (!el) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !Number.isFinite(to) || to < 2) { el.textContent = to.toLocaleString() + suffix; return; }
  const start = performance.now(), dur = 700;
  const step = t => {
    const k = Math.min((t - start) / dur, 1), e = 1 - Math.pow(1 - k, 3);
    el.textContent = Math.round(to * e).toLocaleString() + suffix;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ─── one tooltip for every [data-tip] ───
(() => {
  const tip = () => document.getElementById('tip');
  let cur = null;
  document.addEventListener('pointerover', e => {
    const t = e.target.closest?.('[data-tip]');
    if (!t || !tip()) return;
    cur = t;
    tip().textContent = t.getAttribute('data-tip');
    tip().classList.remove('hidden');
  });
  document.addEventListener('pointermove', e => {
    if (!cur || !tip()) return;
    const el = tip(), w = el.offsetWidth, h = el.offsetHeight;
    let x = e.clientX + 14, y = e.clientY - h - 10;
    if (x + w > innerWidth - 8) x = e.clientX - w - 14;
    if (y < 8) y = e.clientY + 18;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
  document.addEventListener('pointerout', e => {
    if (cur && !cur.contains(e.relatedTarget)) { cur = null; tip()?.classList.add('hidden'); }
  });
})();
