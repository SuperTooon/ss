import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function AboutPopup() {
  const { t, isDark, isAboutOpen, setIsAboutOpen, lang } = useApp();

  return (
    <AnimatePresence>
      {isAboutOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsAboutOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: isDark ? '#0a0a15' : '#111',
              color: '#fff',
              padding: '30px',
              borderRadius: '16px',
              maxWidth: '450px',
              width: '100%',
              textAlign: 'center',
              boxShadow: isDark 
                ? '0 0 40px rgba(0,150,255,.3)' 
                : '0 0 25px rgba(0, 0, 0, 0.6)',
              border: `1px solid ${isDark ? 'rgba(0,150,255,.2)' : '#333'}`,
              position: 'relative'
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setIsAboutOpen(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                top: '15px',
                [lang === 'ar' ? 'left' : 'right']: '15px',
                background: 'transparent',
                border: 'none',
                color: isDark ? '#5cb8ff' : '#7cc9ff',
                cursor: 'pointer',
                padding: '5px'
              }}
            >
              <X size={24} />
            </motion.button>

            {/* Title */}
            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{
                color: isDark ? '#5cb8ff' : '#7cc9ff',
                textShadow: isDark 
                  ? '0 0 15px rgba(92,184,255,.5)' 
                  : '0 0 8px rgba(124, 201, 255, 0.5)',
                marginBottom: '20px',
                fontSize: '1.5rem'
              }}
            >
              {t.about.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                lineHeight: 1.7,
                marginBottom: '15px',
                fontSize: '1rem'
              }}
              dangerouslySetInnerHTML={{ __html: t.about.description }}
            />

            {/* Keywords */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                lineHeight: 1.6,
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,.7)',
                marginBottom: '25px'
              }}
            >
              {t.about.keywords}
            </motion.p>

            {/* Close Button */}
            <motion.button
              onClick={() => setIsAboutOpen(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: isDark ? 'rgba(0,150,255,.2)' : '#222',
                color: '#fff',
                border: `1px solid ${isDark ? 'rgba(0,150,255,.3)' : '#444'}`,
                padding: '10px 30px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s'
              }}
            >
              {t.about.close}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
