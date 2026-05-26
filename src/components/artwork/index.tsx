import { type ArtworkName } from '@/lib/types';

function Mountains() {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mtnFog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.16)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </linearGradient>
      </defs>
      <path className="art-mountain art-mountain-far"
            d="M 0 380 L 120 280 L 220 340 L 340 220 L 460 320 L 580 240 L 700 300 L 800 260 L 800 600 L 0 600 Z"
            fill="rgba(0,0,0,0.18)" />
      <path className="art-mountain art-mountain-mid"
            d="M 0 460 L 100 380 L 220 430 L 360 320 L 480 410 L 620 340 L 800 400 L 800 600 L 0 600 Z"
            fill="rgba(0,0,0,0.32)" />
      <path className="art-mountain art-mountain-near"
            d="M 0 520 L 180 470 L 360 500 L 540 450 L 720 490 L 800 470 L 800 600 L 0 600 Z"
            fill="rgba(0,0,0,0.5)" />
      <g className="art-house" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" fill="none">
        <path d="M 380 470 L 380 500 L 470 500 L 470 470 Z" />
        <path d="M 380 470 L 425 445 L 470 470" />
        <line x1="410" y1="500" x2="410" y2="475" />
        <line x1="440" y1="500" x2="440" y2="475" />
      </g>
      <rect className="art-fog" width="800" height="600" fill="url(#mtnFog)"/>
      <text className="art-coord" x="40" y="560" fontFamily="monospace" fontSize="11" fill="rgba(255,255,255,0.55)" letterSpacing="2">40.0150° N · 105.2705° W</text>
    </svg>
  );
}

function Arches() {
  const archItems = Array.from({ length: 7 }, (_, i) => {
    const x = 80 + i * 110;
    const w = 90 - i * 4;
    const h = 280 - i * 10;
    const y = 200 + i * 6;
    const o = 0.85 - i * 0.08;
    return { x, w, h, y, o, i };
  });

  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <line className="art-ground" x1="0" y1="490" x2="800" y2="490" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <line className="art-horizon" x1="0" y1="200" x2="800" y2="200" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" strokeDasharray="4 4"/>
      {archItems.map(({ x, w, h, y, o, i }) => (
        <path key={i}
          className={`art-arch art-arch-${i}`}
          d={`M ${x} ${y + h} L ${x} ${y + 60} A ${w/2} 60 0 0 1 ${x + w} ${y + 60} L ${x + w} ${y + h} Z`}
          fill="none" stroke={`rgba(255,255,255,${o})`} strokeWidth="1.4"/>
      ))}
      <text className="art-coord" x="40" y="560" fontFamily="monospace" fontSize="11" fill="rgba(255,255,255,0.55)" letterSpacing="2">53.4808° N · 2.2426° W</text>
    </svg>
  );
}

function Curves() {
  const ys = [380, 340, 310];
  const gridLines: React.ReactNode[] = [];
  for (let x = 0; x <= 800; x += 80) {
    gridLines.push(<line key={`v${x}`} x1={x} y1="0" x2={x} y2="600" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>);
  }
  for (let y = 100; y <= 500; y += 80) {
    gridLines.push(<line key={`h${y}`} x1="0" y1={y} x2="800" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>);
  }

  const paths = ys.map((baseY, i) => {
    let d = `M 0 ${baseY}`;
    for (let x = 0; x <= 800; x += 40) {
      const wave = Math.sin((x / 800) * Math.PI * 3 + i * 0.7) * (40 + i * 15);
      const drift = (x / 800) * (60 - i * 20);
      d += ` L ${x} ${baseY + wave - drift}`;
    }
    d += ` L 800 600 L 0 600 Z`;
    return { d, fill: `rgba(255,255,255,${0.06 + i * 0.04})`, stroke: `rgba(255,255,255,${0.4 + i * 0.15})`, i };
  });

  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <g className="art-curve-grid">{gridLines}</g>
      {paths.map(({ d, fill, stroke, i }) => (
        <path key={i} className={`art-curve art-curve-${i}`} d={d} fill={fill} stroke={stroke} strokeWidth="1.2"/>
      ))}
      <text className="art-coord" x="40" y="560" fontFamily="monospace" fontSize="11" fill="rgba(255,255,255,0.55)" letterSpacing="2">240 SITES · 14.2 MW PORTFOLIO</text>
    </svg>
  );
}

function Grid() {
  const positions: [number, number, number, number][] = [
    [120, 140, 200, 240], [380, 100, 220, 260], [620, 160, 200, 240],
    [80, 380, 180, 200], [320, 360, 220, 220], [580, 380, 200, 200],
  ];

  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {positions.map(([x, y, w, h], i) => (
        <g key={i} className={`art-frame art-frame-${i}`}>
          <rect x={x} y={y} width={w} height={h}
            fill="none" stroke={`rgba(255,255,255,${0.4 - (i % 3) * 0.08})`} strokeWidth="1.2"/>
          <line x1={x + 16} y1={y + h - 28} x2={x + w - 16} y2={y + h - 28} stroke="rgba(255,255,255,0.22)" strokeWidth="1"/>
          <line x1={x + 16} y1={y + h - 18} x2={x + 80} y2={y + h - 18} stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        </g>
      ))}
      <text className="art-coord" x="40" y="560" fontFamily="monospace" fontSize="11" fill="rgba(255,255,255,0.55)" letterSpacing="2">HEADLESS COMMERCE · NEXT.JS · SHOPIFY</text>
    </svg>
  );
}

function Organic() {
  const points: [number, number, number, number][] = [
    [180, 200, 60, 0.7], [360, 280, 90, -0.3],
    [560, 180, 70, 0.4], [620, 380, 80, -0.6], [240, 420, 70, 0.2],
  ];

  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <path className="art-flow art-flow-back"
            d="M 0 460 Q 200 390 400 440 T 800 420 L 800 600 L 0 600 Z"
            fill="rgba(255,255,255,0.06)"/>
      <path className="art-flow art-flow-line"
            d="M 0 480 Q 200 420 400 460 T 800 440"
            fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      {points.map(([cx, cy, r, rot], i) => (
        <g key={i} transform={`translate(${cx} ${cy}) rotate(${rot * 60})`}>
          <g className={`art-leaf art-leaf-${i}`}>
            <path d={`M 0 0 Q ${r * 0.6} ${-r * 0.7} ${r} 0 Q ${r * 0.6} ${r * 0.7} 0 0 Z`}
                  fill="none" stroke={`rgba(255,255,255,${0.4 + i * 0.05})`} strokeWidth="1.2"/>
            <line x1="0" y1="0" x2={r * 0.95} y2="0" stroke={`rgba(255,255,255,${0.3 + i * 0.05})`} strokeWidth="1"/>
          </g>
        </g>
      ))}
      <text className="art-coord" x="40" y="560" fontFamily="monospace" fontSize="11" fill="rgba(255,255,255,0.55)" letterSpacing="2">CLIMATE TECH · IDENTITY · LAUNCH</text>
    </svg>
  );
}

function Orbits() {
  const orbits = Array.from({ length: 5 }, (_, i) => ({
    r: 120 + i * 50,
    tilt: i * 12,
    i,
  }));

  const dots: [number, number][] = [[180, 300], [510, 240], [620, 360], [310, 410], [460, 260], [240, 380]];

  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {orbits.map(({ r, tilt, i }) => (
        <g key={i} className={`art-orbit art-orbit-${i}`}>
          <ellipse cx="400" cy="320" rx={r} ry={r * 0.4}
            transform={`rotate(${tilt} 400 320)`}
            fill="none" stroke={`rgba(255,255,255,${0.6 - i * 0.1})`} strokeWidth="0.8"/>
        </g>
      ))}
      {dots.map(([x, y], i) => (
        <g key={i} className={`art-dot-grp art-dot-grp-${i}`}>
          <circle cx={x} cy={y} r={3 + (i % 3)} fill={`rgba(255,255,255,${0.7 - i * 0.05})`}/>
          <circle cx={x} cy={y} r={10 + i * 2} fill="none" stroke={`rgba(255,255,255,${0.3 - i * 0.03})`} strokeWidth="0.6"/>
        </g>
      ))}
      <circle className="art-orbit-core" cx="400" cy="320" r="6" fill="rgba(255,255,255,0.95)"/>
      <text className="art-coord" x="40" y="560" fontFamily="monospace" fontSize="11" fill="rgba(255,255,255,0.55)" letterSpacing="2">25M IMPRESSIONS · 8-WEEK SPRINT</text>
    </svg>
  );
}

const ART_MAP: Record<ArtworkName, React.FC> = {
  mountains: Mountains,
  arches: Arches,
  curves: Curves,
  grid: Grid,
  organic: Organic,
  orbits: Orbits,
};

export default function Artwork({ name }: { name: ArtworkName }) {
  const Component = ART_MAP[name] ?? Mountains;
  return <Component />;
}
