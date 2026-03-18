import { motion } from 'framer-motion';
import { memo } from 'react';

function TonParticle({ delay }) {
  const left = Math.random() * 100;
  const duration = 6 + Math.random() * 6;
  const opacity = Math.random() * 0.6 + 0.3;
  const fontSize = Math.random() * 16 + 12;

  return (
    <motion.div
      initial={{ y: -50, x: `${left}vw`, opacity: 0 }}
      animate={{ 
        y: '110vh', 
        opacity: [0, opacity, opacity, 0],
        rotate: 360 
      }}
      transition={{ 
        duration, 
        delay, 
        ease: 'linear',
        repeat: Infinity 
      }}
      style={{
        position: 'absolute',
        fontSize: `${fontSize}px`,
        color: 'var(--color-primary-light)',
        textShadow: '0 0 10px rgba(0,180,255,0.8)',
        userSelect: 'none'
      }}
    >
      💎
    </motion.div>
  );
}

function TonSnow() {
  // Reduced from 15 to 5 particles for better performance
  const particles = Array.from({ length: 5 }, (_, i) => i);

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
      {particles.map((i) => (
        <TonParticle key={i} delay={i * 1.5} />
      ))}
    </div>
  );
}

export default memo(TonSnow);
