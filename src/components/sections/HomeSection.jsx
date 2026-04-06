import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Shield, Users, MessageCircle, Star, Eye } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

function useCounter(target, duration = 1000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!target || started.current) return;
    started.current = true;
    const steps = 40;
    const step = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

export default function HomeSection() {
  const { t, navigateTo, isDark, lang, playClickSound, visitCount } = useApp();
  const animatedCount = useCounter(visitCount);

  const handleNavigate = (sectionId) => {
    playClickSound();
    navigateTo(sectionId);
  };

  const buttons = [
    { id: 'trust', label: t.buttons.trust, icon: Shield },
    { id: 'channels', label: t.buttons.channels, icon: MessageCircle },
    { id: 'brokers', label: t.buttons.brokers, icon: Users },
    { id: 'owners', label: t.buttons.owners, icon: Star }
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        width: 'min(92%, 820px)',
        textAlign: 'center',
        padding: '12px 10px 86px',
        marginInline: 'auto'
      }}
    >
      {/* Logo */}
      <motion.div
        variants={itemVariants}
        style={{
          width: '128px',
          height: '128px',
          margin: '10px auto 20px',
          position: 'relative',
          borderRadius: '50%',
          background: 'radial-gradient(120% 120% at 30% 20%, rgba(0,180,255,.92), rgba(0,110,220,.96))',
          boxShadow: '0 10px 30px rgba(0,0,0,.35), inset 0 4px 12px rgba(255,255,255,.25)',
          display: 'grid',
          placeItems: 'center',
          overflow: 'hidden'
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.img
          src="/superton-logo.png"
          alt="Super Ton Logo"
          style={{
            width: '66%',
            height: '66%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,.35))'
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={itemVariants}
        style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          margin: '10px 0',
          textShadow: '0 2px 8px rgba(0,0,0,.6)',
          lineHeight: 1.4,
          fontWeight: 700
        }}
      >
        {t.title}
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        variants={itemVariants}
        style={{
          fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
          margin: '8px 0 30px',
          color: isDark ? '#a8d8ff' : '#d9ecff',
          fontWeight: 500,
          textShadow: '0 2px 8px rgba(0,0,0,.55)',
          lineHeight: 1.4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap'
        }}
      >
        {t.subtitle}
        <img 
          src="/shield.png" 
          alt="Verified" 
          style={{ width: '28px', height: '28px' }}
        />
      </motion.h2>

      {/* Visitor Counter Badge - Fixed Corner */}
      {visitCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          style={{
            position: 'fixed',
            top: '15px',
            [lang === 'ar' ? 'left' : 'right']: '15px',
            zIndex: 1000,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            padding: '7px 13px 7px 9px',
            borderRadius: '14px',
            background: isDark
              ? 'linear-gradient(135deg, rgba(0,120,255,.22), rgba(0,60,180,.18))'
              : 'linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,.08))',
            border: isDark
              ? '1px solid rgba(0,180,255,.4)'
              : '1px solid rgba(255,255,255,.32)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            fontSize: 'clamp(0.72rem, 1vw, 0.85rem)',
            color: 'rgba(255,255,255,.9)',
            boxShadow: isDark
              ? '0 4px 18px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.12), 0 0 10px rgba(0,150,255,.12)'
              : '0 4px 18px rgba(0,0,0,.2), inset 0 1px 0 rgba(255,255,255,.28)',
          }}
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: 'rgba(0,180,255,.22)',
            border: '1px solid rgba(0,180,255,.38)',
            backdropFilter: 'blur(8px)',
            flexShrink: 0
          }}>
            <Eye size={12} color="#7dd8ff" />
          </span>
          <span>
            {lang === 'ar'
              ? `${animatedCount.toLocaleString('ar-EG')} زيارة`
              : `${animatedCount.toLocaleString()} visits`}
          </span>
        </motion.div>
      )}

      {/* Buttons */}
      {buttons.map((button, index) => (
        <motion.button
          key={button.id}
          variants={itemVariants}
          onClick={() => handleNavigate(button.id)}
          whileHover={{ 
            scale: 1.02, 
            y: -2,
            boxShadow: isDark 
              ? '0 0 25px rgba(0,180,255,.5)' 
              : '0 14px 30px rgba(0,0,0,.3), 0 0 18px rgba(0,180,255,.25)'
          }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: 'flex',
            width: 'min(360px, 90%)',
            margin: '12px auto',
            padding: 'clamp(12px, 1.5vw, 18px) clamp(20px, 2vw, 28px)',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: '#fff',
            cursor: 'pointer',
            borderRadius: '12px',
            border: `1px solid ${isDark ? 'rgba(0,180,255,.3)' : 'rgba(255,255,255,.28)'}`,
            background: isDark ? 'rgba(0,150,255,.15)' : 'rgba(255,255,255,.12)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 10px 26px rgba(0,0,0,.25)',
            transition: 'all 0.25s ease',
            fontFamily: 'inherit',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}
        >
          <button.icon size={22} />
          {button.label}
        </motion.button>
      ))}
    </motion.section>
  );
}
