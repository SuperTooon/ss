import { motion } from 'framer-motion';
import { Radio, Users, MessageCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { telegramLinks } from '../../data/translations';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.25, ease: 'easeOut' }
  }
};

export default function SuperTonSection() {
  const { t, navigateTo, isDark, lang, playClickSound } = useApp();
  const Arrow = lang === 'ar' ? ArrowRight : ArrowLeft;

  const links = [
    { label: t.links.superChannel, url: telegramLinks.superChannel, icon: Radio },
    { label: t.links.superGroup, url: telegramLinks.superGroup, icon: Users },
    { label: t.links.superChat, url: telegramLinks.superChat, icon: MessageCircle }
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        width: 'min(92%, 820px)',
        textAlign: 'center',
        padding: '12px 10px 86px',
        marginInline: 'auto'
      }}
    >
      {/* Title */}
      <motion.h1
        variants={itemVariants}
        style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          margin: '20px 0',
          textShadow: '0 2px 8px rgba(0,0,0,.6)',
          lineHeight: 1.4,
          fontWeight: 700
        }}
      >
        {t.sections.superton}
      </motion.h1>

      {/* Links */}
      {links.map((link, index) => (
        <motion.a
          key={index}
          variants={itemVariants}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClickSound}
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
            textDecoration: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}
        >
          <link.icon size={22} />
          {link.label}
        </motion.a>
      ))}

      {/* Back Button */}
      <motion.button
        variants={itemVariants}
        onClick={() => navigateTo('channels')}
        whileHover={{ 
          scale: 1.02, 
          y: -2,
          boxShadow: '0 14px 30px rgba(0,0,0,.3)'
        }}
        whileTap={{ scale: 0.98 }}
        style={{
          display: 'flex',
          width: 'min(360px, 90%)',
          margin: '20px auto 12px',
          padding: 'clamp(12px, 1.5vw, 18px) clamp(20px, 2vw, 28px)',
          fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
          color: 'rgba(255,255,255,.8)',
          cursor: 'pointer',
          borderRadius: '12px',
          border: `1px solid ${isDark ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.2)'}`,
          background: isDark ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,.08)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 10px 26px rgba(0,0,0,.25)',
          transition: 'all 0.25s ease',
          fontFamily: 'inherit',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}
      >
        <Arrow size={20} />
        {t.buttons.back}
      </motion.button>
    </motion.section>
  );
}
