import { memo } from 'react';

const PARTICLES = [
  { left: '5%',  delay: '0s',    dur: '11s', size: 15, opacity: 0.35 },
  { left: '16%', delay: '-4s',   dur: '9s',  size: 12, opacity: 0.25 },
  { left: '27%', delay: '-8s',   dur: '13s', size: 18, opacity: 0.3  },
  { left: '39%', delay: '-2s',   dur: '10s', size: 13, opacity: 0.28 },
  { left: '51%', delay: '-6s',   dur: '12s', size: 16, opacity: 0.22 },
  { left: '63%', delay: '-1s',   dur: '9s',  size: 11, opacity: 0.3  },
  { left: '75%', delay: '-7s',   dur: '14s', size: 19, opacity: 0.2  },
  { left: '88%', delay: '-3s',   dur: '11s', size: 14, opacity: 0.28 },
];

function TonSnow() {
  return (
    <div
      className="ton-snow"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: p.left,
            top: '-30px',
            fontSize: p.size,
            opacity: p.opacity,
            color: 'var(--color-primary-light)',
            textShadow: '0 0 8px rgba(0,180,255,0.7)',
            userSelect: 'none',
            animation: `tonFall ${p.dur} linear ${p.delay} infinite`,
          }}
        >
          💎
        </span>
      ))}
    </div>
  );
}

export default memo(TonSnow);
