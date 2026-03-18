import { motion } from 'framer-motion';
import { memo } from 'react';

// Static wave using CSS animation for better performance
const WaveSVG = memo(({ d, opacity, duration, direction }) => (
  <svg
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '200%',
      height: '100%',
      opacity,
      animation: `waveMove${direction} ${duration}s linear infinite`
    }}
  >
    <path fill={d.fill} d={d.path} />
  </svg>
));

function WaveBackground() {
  return (
    <>
      {/* Wave 1 - Using CSS animation instead of Framer Motion */}
      <div
        className="wave-bg"
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        <WaveSVG
          d={{
            fill: 'rgba(0, 140, 255, 0.18)',
            path: 'M0,96L60,117.3C120,139,240,181,360,170.7C480,160,600,96,720,101.3C840,107,960,181,1080,208C1200,235,1320,213,1380,202.7L1440,192L1440,320L0,320Z'
          }}
          opacity={1}
          duration={20}
          direction="Right"
        />
      </div>

      {/* Wave 2 - Slower */}
      <div
        className="wave-bg"
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        <WaveSVG
          d={{
            fill: 'rgba(0, 180, 255, 0.12)',
            path: 'M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L0,320Z'
          }}
          opacity={0.5}
          duration={25}
          direction="Left"
        />
      </div>

      {/* Overlay */}
      <div 
        className="overlay"
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(130deg, rgba(0,40,120,.35), rgba(0,15,50,.55))',
          backdropFilter: 'blur(3px)'
        }}
      />
    </>
  );
}

export default memo(WaveBackground);
