'use client';

import { useState } from 'react';

const LOCATIONS = [
  {
    id: 'boulder',
    city: 'Boulder',
    cityEm: 'Colorado',
    role: 'Headquarters',
    addr: '1942 Broadway St., STE 314C\nBoulder, CO 80302, USA',
    meta: 'GMT−7 · +1 (719) 301-0359',
    x: 21, y: 38,
  },
  {
    id: 'manchester',
    city: 'Manchester',
    cityEm: 'United Kingdom',
    role: 'European Practice',
    addr: 'Manchester, England\nUnited Kingdom',
    meta: 'GMT+1 · hello@e2w.company',
    x: 47, y: 31,
  },
  {
    id: 'islamabad',
    city: 'Islamabad',
    cityEm: 'Pakistan',
    role: 'Engineering Studio',
    addr: '4th Floor, Bunyad Plaza\n95 Bahria Paradise, Phase 4\nIslamabad, Pakistan',
    meta: 'GMT+5 · +92 347 6133664',
    x: 67, y: 41,
  },
];

export default function LocationsMap() {
  const [active, setActive] = useState('boulder');

  return (
    <div className="loc-grid" style={{ marginTop: '4rem' }}>
      {/* SVG world map */}
      <div className="map-frame">
        <svg viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="dots" width="1.2" height="1.2" patternUnits="userSpaceOnUse">
              <circle cx="0.6" cy="0.6" r="0.18" fill="rgba(217,211,197,0.35)" />
            </pattern>
            <pattern id="dots-light" width="1.2" height="1.2" patternUnits="userSpaceOnUse">
              <circle cx="0.6" cy="0.6" r="0.18" fill="rgba(60,72,100,0.25)" />
            </pattern>
          </defs>
          {/* Continent shapes */}
          {[
            'M 8 22 Q 14 18 22 20 Q 28 24 30 32 Q 26 38 20 40 Q 12 38 8 30 Z',
            'M 24 42 Q 28 44 28 50 Q 26 56 22 56 Q 20 50 22 44 Z',
            'M 44 24 Q 50 22 54 26 Q 52 32 46 32 Q 42 30 44 24 Z',
            'M 47 34 Q 54 34 56 42 Q 54 52 48 52 Q 44 44 47 34 Z',
            'M 56 24 Q 70 22 80 28 Q 84 34 78 38 Q 70 40 60 38 Q 56 32 56 24 Z',
            'M 78 46 Q 84 46 86 50 Q 82 54 78 52 Q 76 50 78 46 Z',
          ].map((d, i) => (
            <path key={i} d={d} fill="url(#dots)" stroke="rgba(217,211,197,0.18)" strokeWidth="0.2" />
          ))}
          {/* Arc connections between studios */}
          {LOCATIONS.map((l, i) => {
            const next = LOCATIONS[(i + 1) % LOCATIONS.length];
            const mx = (l.x + next.x) / 2;
            const my = Math.min(l.y, next.y) - 8;
            return (
              <path
                key={'arc' + i}
                d={`M ${l.x} ${l.y} Q ${mx} ${my} ${next.x} ${next.y}`}
                fill="none"
                stroke="rgba(143,182,255,0.35)"
                strokeWidth="0.25"
                strokeDasharray="0.6 0.6"
              />
            );
          })}
          {/* Location pins */}
          {LOCATIONS.map(l => (
            <g
              key={l.id}
              className="map-pin"
              onClick={() => setActive(l.id)}
              transform={`translate(${l.x} ${l.y})`}
              style={{ cursor: 'pointer' }}
            >
              <circle className="ring" r="2.5" fill="none" stroke="rgba(143,182,255,0.8)" strokeWidth="0.3" />
              <circle className="ring ring-2" r="2.5" fill="none" stroke="rgba(143,182,255,0.5)" strokeWidth="0.3" />
              <circle
                r={active === l.id ? 1.3 : 0.9}
                fill={active === l.id ? '#8eb6ff' : '#d9d3c5'}
                style={{ transition: 'all 0.4s' }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Location list */}
      <div className="loc-list">
        {LOCATIONS.map(l => (
          <div
            key={l.id}
            className={'loc-item' + (active === l.id ? ' active' : '')}
            onMouseEnter={() => setActive(l.id)}
            onClick={() => setActive(l.id)}
          >
            <div className="dot" />
            <div className="body">
              <div className="city">{l.city}, <em>{l.cityEm}</em></div>
              <div className="role">{l.role}</div>
              <div className="addr" style={{ whiteSpace: 'pre-line' }}>{l.addr}</div>
              <div className="meta">{l.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
