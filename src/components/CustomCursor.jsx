import { useEffect, useRef, useState, memo } from 'react';

function CustomCursor() {
  const [isTouch] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  );

  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const glow = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (isTouch) return;

    document.body.style.cursor = 'none';

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      glow.current.x += (pos.current.x - glow.current.x) * 0.12;
      glow.current.y += (pos.current.y - glow.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 5}px, ${pos.current.y - 5}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glow.current.x - 18}px, ${glow.current.y - 18}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = '';
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 36, height: 36,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,180,255,.25) 0%, transparent 70%)',
          border: '1px solid rgba(0,180,255,.35)',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 10, height: 10,
          borderRadius: '50%',
          background: 'rgba(0,180,255,.9)',
          boxShadow: '0 0 8px rgba(0,180,255,1), 0 0 18px rgba(0,180,255,.5)',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
        }}
      />
    </>
  );
}

export default memo(CustomCursor);
