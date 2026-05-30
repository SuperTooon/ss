import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Handshake, Radio, Gavel } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import TiltCard from '../TiltCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 }
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

export default function BrokersChoiceSection() {
  const { t, navigateTo, isDark, lang, playClickSound } = useApp();
  const Arrow = lang === 'ar' ? ArrowRight : ArrowLeft;

  const choices = [
    {
      id: 'superBrokers',
      labelAr: 'وسطاء سوبر تون',
      labelEn: 'Super Ton Brokers',
      icon: Radio,
      color: '#00b4ff',
      bg: isDark ? 'rgba(0,150,255,.18)' : 'rgba(0,150,255,.14)',
      border: isDark ? 'rgba(0,180,255,.4)' : 'rgba(0,180,255,.45)',
      glow: 'rgba(0,180,255,.5)'
    },
    {
      id: 'auctionBrokers',
      labelAr: 'وسطاء مزاد تون',
      labelEn: 'Auction Ton Brokers',
      icon: Gavel,
      color: '#ff8c00',
      bg: isDark ? 'rgba(255,120,0,.18)' : 'rgba(255,120,0,.14)',
      border: isDark ? 'rgba(255,140,0,.4)' : 'rgba(255,140,0,.45)',
      glow: 'rgba(255,140,0,.5)'
    }
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
      {/* Icon */}
      <motion.div
        variants={itemVariants}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(0,180,255,.25), rgba(0,60,180,.15))'
            : 'radial-gradient(circle, rgba(255,255,255,.25), rgba(255,255,255,.1))',
          border: `1px solid ${isDark ? 'rgba(0,180,255,.3)' : 'rgba(255,255,255,.35)'}`,
          backdropFilter: 'blur(12px)',
          marginBottom: 4,
          boxShadow: isDark
            ? '0 0 24px rgba(0,180,255,.2)'
            : '0 8px 24px rgba(0,0,0,.2)'
        }}
      >
        <Handshake size={34} color="#fff" />
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={itemVariants}
        style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          margin: '16px 0 8px',
          textShadow: '0 2px 8px rgba(0,0,0,.6)',
          lineHeight: 1.4,
          fontWeight: 700
        }}
      >
        {lang === 'ar' ? 'الوسطاء المعتمدون' : 'Certified Brokers'}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={itemVariants}
        style={{
          fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
          color: 'rgba(255,255,255,.65)',
          margin: '0 0 28px',
          lineHeight: 1.6
        }}
      >
        {lang === 'ar'
          ? 'اختر نوع الوسطاء الذي تريده'
          : 'Choose the broker type you need'}
      </motion.p>

      {/* Choice Buttons */}
      {choices.map((choice) => (
        <TiltCard
          key={choice.id}
          variants={itemVariants}
          onClick={() => { playClickSound(); navigateTo(choice.id); }}
          whileHover={{
            scale: 1.03,
            y: -3,
            boxShadow: `0 0 28px ${choice.glow}, 0 14px 32px rgba(0,0,0,.35)`
          }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'flex',
            width: 'min(380px, 90%)',
            margin: '12px auto',
            padding: 'clamp(16px, 2vw, 22px) clamp(24px, 2.5vw, 32px)',
            fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
            fontWeight: 600,
            color: '#fff',
            cursor: 'pointer',
            borderRadius: '16px',
            border: `1px solid ${choice.border}`,
            background: choice.bg,
            backdropFilter: 'blur(12px)',
            boxShadow: `0 10px 28px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.12)`,
            fontFamily: 'inherit',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Glow accent */}
          <span style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '16px',
            background: `radial-gradient(ellipse at 50% 0%, ${choice.color}18, transparent 70%)`,
            pointerEvents: 'none'
          }} />
          <choice.icon size={24} color={choice.color} />
          {lang === 'ar' ? choice.labelAr : choice.labelEn}
        </TiltCard>
      ))}

      {/* Back Button */}
      <motion.button
        variants={itemVariants}
        onClick={() => navigateTo('main')}
        whileHover={{
          scale: 1.02,
          y: -2,
          boxShadow: '0 14px 30px rgba(0,0,0,.3)'
        }}
        whileTap={{ scale: 0.98 }}
        style={{
          display: 'flex',
          width: 'min(380px, 90%)',
          margin: '24px auto 12px',
          padding: 'clamp(12px, 1.5vw, 18px) clamp(20px, 2vw, 28px)',
          fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
          color: 'rgba(255,255,255,.75)',
          cursor: 'pointer',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,.18)',
          background: 'rgba(255,255,255,.07)',
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
