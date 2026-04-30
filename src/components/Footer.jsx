import { memo, useRef } from 'react';
import { useApp } from '../contexts/AppContext';

function Footer() {
  const { t, isDark, navigateTo } = useApp();
  const tapCount = useRef(0);
  const lastTap = useRef(0);

  const handleTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 500) {
      tapCount.current += 1;
    } else {
      tapCount.current = 1;
    }
    lastTap.current = now;

    if (tapCount.current === 3) {
      navigateTo('admin');
      tapCount.current = 0;
    }
  };

  return (
    <footer
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 3,
        textAlign: 'center',
        color: isDark ? 'rgba(180,210,255,.8)' : 'rgba(255,255,255,.8)',
        fontSize: '0.85rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 20px',
        background: isDark 
          ? 'linear-gradient(to top, rgba(0,10,30,.9), transparent)' 
          : 'linear-gradient(to top, rgba(0,20,60,.5), transparent)',
        backdropFilter: 'blur(4px)'
      }}
    >
      <span
        onClick={handleTap}
        style={{
          fontWeight: 500,
          letterSpacing: '0.5px',
          cursor: 'default',
          userSelect: 'none',
          WebkitUserSelect: 'none'
        }}
      >
        {t.footer}
      </span>
    </footer>
  );
}

export default memo(Footer);
