import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { User, ArrowLeft, ArrowRight, BadgeCheck } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

// Default auction brokers fallback
const defaultBrokers = {
  ar: [
    { name: 'كاسبر', link: 'https://t.me/t_e_r' },
    { name: 'ليو', link: 'https://t.me/ccmca' },
    { name: 'حازم', link: 'https://t.me/H_A_Z_M' },
    { name: 'ستيفن', link: 'https://t.me/c_o_a' },
    { name: 'محمود', link: 'https://t.me/Mahmuod' },
    { name: 'عمر', link: 'https://t.me/FAZ3a' }
  ],
  en: [
    { name: 'Kasper', link: 'https://t.me/t_e_r' },
    { name: 'Leo', link: 'https://t.me/ccmca' },
    { name: 'Hazem', link: 'https://t.me/H_A_Z_M' },
    { name: 'Steven', link: 'https://t.me/c_o_a' },
    { name: 'Mahmoud', link: 'https://t.me/Mahmuod' },
    { name: 'Omar', link: 'https://t.me/FAZ3a' }
  ]
};

function useCounter(target, duration = 800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const steps = 30;
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

function VerifiedBadge({ isDark }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: isDark ? '#ffb84d' : '#fff',
      flexShrink: 0,
      filter: isDark
        ? 'drop-shadow(0 0 5px rgba(255,140,0,.9))'
        : 'drop-shadow(0 1px 3px rgba(0,0,0,.5))'
    }}>
      <BadgeCheck size={18} fill={isDark ? 'rgba(255,120,0,0.35)' : 'rgba(255,255,255,0.35)'} />
    </span>
  );
}

function BrokerAvatar({ link }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const username = link?.split('/').pop();

  if (failed || !username) {
    return (
      <span style={{
        width: 38, height: 38, borderRadius: '50%',
        background: 'rgba(255,140,0,.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, border: '2px solid rgba(255,140,0,.4)'
      }}>
        <User size={18} />
      </span>
    );
  }

  return (
    <span style={{ position: 'relative', flexShrink: 0, width: 38, height: 38 }}>
      {!loaded && (
        <span className="skeleton-avatar" style={{
          position: 'absolute', inset: 0,
          borderRadius: '50%', border: '2px solid rgba(255,140,0,.4)'
        }} />
      )}
      <img
        src={`https://t.me/i/userpic/320/${username}.jpg`}
        alt={username}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        style={{
          width: 38, height: 38, borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid rgba(255,140,0,.4)',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
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
    transition: { duration: 0.2, ease: 'easeOut' }
  }
};

export default function AuctionBrokersSection() {
  const { t, navigateTo, isDark, lang, playClickSound } = useApp();
  const Arrow = lang === 'ar' ? ArrowRight : ArrowLeft;
  const [brokers, setBrokers] = useState(defaultBrokers[lang] || defaultBrokers.en);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/auction-brokers')
      .then(r => r.json())
      .then(data => {
        if (data?.brokers) {
          const list = lang === 'ar' ? data.brokers.ar : data.brokers.en;
          if (list?.length > 0) setBrokers(list);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [lang]);

  const useCounterValue = useCounter(brokers.length);

  const sectionTitle = lang === 'ar' ? 'وسطاء المزاد' : 'Auction Brokers';

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
        {sectionTitle}
        <span style={{
          fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
          marginInlineStart: '10px',
          background: 'rgba(255,140,0,.2)',
          border: '1px solid rgba(255,140,0,.4)',
          borderRadius: '20px',
          padding: '2px 10px',
          verticalAlign: 'middle',
          fontWeight: 500
        }}>
          {useCounterValue}
        </span>
      </motion.h1>

      {/* Brokers List */}
      {loading ? (
        <p style={{ opacity: 0.6 }}>Loading...</p>
      ) : brokers.map((broker, index) => (
        <motion.a
          key={index}
          variants={itemVariants}
          href={broker.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClickSound}
          className="broker-card"
          whileHover={{
            scale: 1.02,
            y: -2,
            boxShadow: isDark
              ? '0 0 30px rgba(255,140,0,.5), 0 8px 32px rgba(0,0,0,.4)'
              : '0 14px 30px rgba(0,0,0,.3), 0 0 18px rgba(255,140,0,.25)'
          }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: 'flex',
            width: 'min(360px, 90%)',
            margin: '8px auto',
            padding: 'clamp(10px, 1.5vw, 14px) clamp(16px, 2vw, 22px)',
            fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
            color: '#fff',
            cursor: 'pointer',
            borderRadius: '12px',
            background: isDark
              ? 'linear-gradient(135deg, rgba(255,120,0,.18), rgba(180,60,0,.12))'
              : 'linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,.08))',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 10px 26px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.1)',
            transition: 'all 0.25s ease',
            fontFamily: 'inherit',
            textDecoration: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            border: `1px solid ${isDark ? 'rgba(255,140,0,.3)' : 'rgba(255,255,255,.2)'}`
          }}
        >
          <BrokerAvatar link={broker.link} />
          {broker.name}
          <VerifiedBadge isDark={isDark} />
        </motion.a>
      ))}

      {/* Back Button */}
      <motion.button
        variants={itemVariants}
        onClick={() => navigateTo('brokers')}
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
