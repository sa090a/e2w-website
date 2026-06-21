// Procedural generator for the E2W pinwheel logo mark.
// Six spiral spokes radiating from a central hub, each ending in a small
// cluster of open-circle nodes, all enclosed in a thin ring.
// Emits two SVGs: a monochrome currentColor mark (for <LogoMark>) and a
// dark-background favicon.
import { writeFileSync, mkdirSync } from 'node:fs';

const C = 250; // centre
const TAU = Math.PI * 2;
const rad = (d) => (d * Math.PI) / 180;
const P = (r, deg) => [
  +(C + r * Math.cos(rad(deg))).toFixed(2),
  +(C + r * Math.sin(rad(deg))).toFixed(2),
];

const ARMS = 6;
const STEP = 360 / ARMS;

// Per-arm jitter so clusters feel organic (deterministic).
const jit = [
  { a: 0, b: 2, c: -1.5 },
  { a: 1.5, b: -1, c: 2 },
  { a: -1, b: 1.5, c: -0.5 },
  { a: 0.5, b: -2, c: 1 },
  { a: -1.5, b: 1, c: -2 },
  { a: 1, b: -0.5, c: 1.5 },
];

let spines = '';
let highlights = '';
let branches = '';
let nodes = '';

for (let i = 0; i < ARMS; i++) {
  const base = -90 + i * STEP;
  const j = jit[i];

  // Spiral spine: from near the hub, sweeping outward and around.
  const p0 = P(48, base);
  const c1 = P(108, base + 6 + j.a);
  const c2 = P(176, base + 32 + j.b);
  const p3 = P(206, base + 50 + j.c);
  spines += `  <path d="M ${p0[0]} ${p0[1]} C ${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${p3[0]} ${p3[1]}" />\n`;

  // Pale-blue accent — a short segment over the mid of each spine.
  const h0 = P(118, base + 9 + j.a);
  const h1 = P(150, base + 19 + j.b);
  const h2 = P(178, base + 31 + j.b);
  highlights += `  <path d="M ${h0[0]} ${h0[1]} Q ${h1[0]} ${h1[1]} ${h2[0]} ${h2[1]}" />\n`;

  // Outer node cluster near the rim.
  const a = P(168, base + 38 + j.a);
  const n1 = P(224, base + 39 + j.b);
  const n2 = P(232, base + 52 + j.c);
  const n3 = P(208, base + 58 + j.a);
  // Mid node cluster.
  const m = P(118, base + 12 + j.c);
  const m1 = P(150, base + 2 + j.a);
  const m2 = P(160, base + 22 + j.b);

  branches +=
    `  <path d="M ${a[0]} ${a[1]} L ${n1[0]} ${n1[1]} M ${a[0]} ${a[1]} L ${n2[0]} ${n2[1]} ` +
    `M ${n2[0]} ${n2[1]} L ${n3[0]} ${n3[1]} M ${m[0]} ${m[1]} L ${m1[0]} ${m1[1]} ` +
    `M ${m[0]} ${m[1]} L ${m2[0]} ${m2[1]}" />\n`;

  for (const [x, y] of [n1, n2, n3, m1, m2]) {
    nodes += `  <circle cx="${x}" cy="${y}" r="7.5" />\n`;
  }
}

const ring = `  <circle cx="${C}" cy="${C}" r="238" fill="none" />\n`;
const hub = `  <circle cx="${C}" cy="${C}" r="9" />\n`;

// --- Monochrome mark (currentColor) for the React component ---------------
const mark =
  `<g fill="none" stroke="currentColor" stroke-width="2.4">\n${ring}</g>\n` +
  `<g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round">\n${spines}</g>\n` +
  `<g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" opacity="0.45">\n${highlights}</g>\n` +
  `<g fill="none" stroke="currentColor" stroke-width="2">\n${branches}</g>\n` +
  `<g fill="none" stroke="currentColor" stroke-width="2.4">\n${nodes}</g>\n` +
  `<g fill="currentColor">\n${hub}</g>`;

writeFileSync(new URL('./logo-mark.svgfrag', import.meta.url), mark);

// --- Favicon: dark rounded square, light strokes, blue accents ------------
const NAVY = '#0b1220';
const LIGHT = '#e8edf7';
const BLUE = '#8eb6ff';
const favicon =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="64" height="64">\n` +
  `  <rect width="500" height="500" rx="92" fill="${NAVY}"/>\n` +
  `  <g fill="none" stroke="${LIGHT}" stroke-width="2.6" opacity="0.5">\n${ring}  </g>\n` +
  `  <g fill="none" stroke="${LIGHT}" stroke-width="7" stroke-linecap="round">\n${spines}  </g>\n` +
  `  <g fill="none" stroke="${BLUE}" stroke-width="3.4" stroke-linecap="round">\n${highlights}  </g>\n` +
  `  <g fill="none" stroke="${LIGHT}" stroke-width="2.2" opacity="0.85">\n${branches}  </g>\n` +
  `  <g fill="${NAVY}" stroke="${LIGHT}" stroke-width="2.6">\n${nodes}  </g>\n` +
  `  <g fill="${BLUE}">\n${hub}  </g>\n` +
  `</svg>\n`;

mkdirSync(new URL('../public/', import.meta.url), { recursive: true });
writeFileSync(new URL('../public/favicon.svg', import.meta.url), favicon);

console.log('Generated public/favicon.svg and scripts/logo-mark.svgfrag');
