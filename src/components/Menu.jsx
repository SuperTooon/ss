import { useState, useRef, useEffect, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Globe, Moon, Sun, Info, ChevronRight, ChevronLeft } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const menuVariants = {
  hidden: { 
    opacity: 0, 
    y: -10, 
    scale: 0.95,
    transition: { duration: 0.15 }
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scale: 0.95,
    transition: { duration: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.2 }
  })
};

function Menu() {
  const { 
    t, 
    lang, 
    isDark, 
    isMenuOpen, 
    setIsMenuOpen, 
    setIsAboutOpen,
    toggleLang, 
    toggleDarkMode 
  } = useApp();
  
  const [showLangOptions, setShowLangOptions] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setShowLangOptions(false);
      }
    }
    
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMenuOpen, setIsMenuOpen]);

  const handleLangChange = useCallback((newLang) => {
    toggleLang(newLang);
    setShowLangOptions(false);
    setIsMenuOpen(false);
  }, [toggleLang, setIsMenuOpen]);

  const handleAboutClick = useCallback(() => {
    setIsAboutOpen(true);
    setIsMenuOpen(false);
    setShowLangOptions(false);
  }, [setIsAboutOpen, setIsMenuOpen]);

  const handleDarkModeToggle = useCallback(() => {
    toggleDarkMode();
  }, [toggleDarkMode]);

  const Arrow = lang === 'ar' ? ChevronLeft : ChevronRight;

  // Menu position based on language
  const menuPosition = lang === 'ar' 
    ? { left: '15px', right: 'auto' }
    : { left: 'auto', right: '15px' };

  return (
    <nav 
      ref={menuRef}
      className="menu"
      style={{
        position: 'fixed',
        top: '15px',
        ...menuPosition,
        zIndex: 1000
      }}
    >
      {/* Menu Toggle Button */}
      <motion.button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          setShowLangOptions(false);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: isDark 
            ? 'linear-gradient(135deg, rgba(0,150,255,.3), rgba(0,100,200,.3))' 
            : 'linear-gradient(135deg, rgba(255,255,255,.25), rgba(255,255,255,.15))',
          color: '#fff',
          border: `1px solid ${isDark ? 'rgba(0,180,255,.4)' : 'rgba(255,255,255,.3)'}`,
          borderRadius: '12px',
          padding: '10px 14px',
          cursor: 'pointer',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,.2)',
          fontSize: '1.1rem'
        }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MenuIcon size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Menu Content */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'absolute',
              top: '55px',
              [lang === 'ar' ? 'left' : 'right']: 0,
              background: isDark 
                ? 'linear-gradient(135deg, rgba(10,15,40,.95), rgba(5,10,30,.95))' 
                : 'linear-gradient(135deg, rgba(20,25,60,.9), rgba(10,15,50,.9))',
              border: `1px solid ${isDark ? 'rgba(0,180,255,.3)' : 'rgba(255,255,255,.2)'}`,
              borderRadius: '16px',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              minWidth: '220px',
              maxWidth: 'calc(100vw - 30px)',
              boxShadow: isDark 
                ? '0 10px 40px rgba(0,0,0,.5), 0 0 30px rgba(0,150,255,.1)' 
                : '0 10px 40px rgba(0,0,0,.4)',
              overflow: 'hidden',
              padding: '8px'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '12px 16px',
              borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,.1)' : 'rgba(255,255,255,.15)'}`,
              marginBottom: '8px'
            }}>
              <span style={{ 
                fontSize: '0.85rem', 
                color: 'rgba(255,255,255,.6)',
                fontWeight: 500,
                letterSpacing: '0.5px'
              }}>
                {lang === 'ar' ? 'الإعدادات' : 'Settings'}
              </span>
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              custom={0}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              onClick={handleDarkModeToggle}
              whileHover={{ 
                backgroundColor: isDark ? 'rgba(0,150,255,.2)' : 'rgba(255,255,255,.15)',
                x: 3
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'transparent',
                color: '#fff',
                border: 'none',
                padding: '12px 16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.95rem',
                borderRadius: '10px',
                margin: '2px 0',
                fontFamily: 'inherit',
                textAlign: 'left',
                width: '100%'
              }}
            >
              <span style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: isDark ? 'rgba(255,200,0,.2)' : 'rgba(100,150,255,.2)'
              }}>
                {isDark ? <Sun size={18} color="#ffd700" /> : <Moon size={18} color="#a8c5ff" />}
              </span>
              <span>{isDark ? t.menu.lightMode : t.menu.darkMode}</span>
            </motion.button>

            {/* Language Selector */}
            {!showLangOptions ? (
              <motion.button
                custom={1}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                onClick={() => setShowLangOptions(true)}
                whileHover={{ 
                  backgroundColor: isDark ? 'rgba(0,150,255,.2)' : 'rgba(255,255,255,.15)',
                  x: 3
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.95rem',
                  borderRadius: '10px',
                  margin: '2px 0',
                  fontFamily: 'inherit',
                  textAlign: 'left',
                  width: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(0,200,150,.2)'
                  }}>
                    <Globe size={18} color="#4ade80" />
                  </span>
                  <span>{t.menu.language}</span>
                </div>
                <Arrow size={16} style={{ opacity: 0.6 }} />
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  background: isDark ? 'rgba(0,0,0,.3)' : 'rgba(0,0,0,.2)',
                  borderRadius: '10px',
                  margin: '4px 0',
                  padding: '4px'
                }}
              >
                <button
                  onClick={() => setShowLangOptions(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'rgba(255,255,255,.6)',
                    padding: '8px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'inherit'
                  }}
                >
                  <Arrow size={14} style={{ transform: 'rotate(180deg)' }} />
                  {lang === 'ar' ? 'رجوع' : 'Back'}
                </button>
                
                <motion.button
                  onClick={() => handleLangChange('ar')}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,.1)' }}
                  style={{
                    background: lang === 'ar' 
                      ? 'linear-gradient(135deg, rgba(0,150,255,.4), rgba(0,100,200,.4))' 
                      : 'transparent',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 14px',
                    cursor: 'pointer',
                    width: '100%',
                    borderRadius: '8px',
                    margin: '2px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'inherit',
                    fontSize: '0.9rem'
                  }}
                >
                  <span>🇪🇬</span>
                  <span>{t.menu.arabic}</span>
                  {lang === 'ar' && (
                    <span style={{ marginLeft: 'auto', color: '#4ade80' }}>✓</span>
                  )}
                </motion.button>
                
                <motion.button
                  onClick={() => handleLangChange('en')}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,.1)' }}
                  style={{
                    background: lang === 'en' 
                      ? 'linear-gradient(135deg, rgba(0,150,255,.4), rgba(0,100,200,.4))' 
                      : 'transparent',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 14px',
                    cursor: 'pointer',
                    width: '100%',
                    borderRadius: '8px',
                    margin: '2px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'inherit',
                    fontSize: '0.9rem'
                  }}
                >
                  <span>🇺🇸</span>
                  <span>{t.menu.english}</span>
                  {lang === 'en' && (
                    <span style={{ marginLeft: 'auto', color: '#4ade80' }}>✓</span>
                  )}
                </motion.button>
              </motion.div>
            )}

            <div style={{ 
              height: '1px', 
              background: isDark ? 'rgba(255,255,255,.1)' : 'rgba(255,255,255,.15)', 
              margin: '8px 0' 
            }} />

            {/* About Button */}
            <motion.button
              custom={2}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              onClick={handleAboutClick}
              whileHover={{ 
                backgroundColor: isDark ? 'rgba(0,150,255,.2)' : 'rgba(255,255,255,.15)',
                x: 3
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'transparent',
                color: '#fff',
                border: 'none',
                padding: '12px 16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.95rem',
                borderRadius: '10px',
                margin: '2px 0',
                fontFamily: 'inherit',
                textAlign: 'left',
                width: '100%'
              }}
            >
              <span style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(150,100,255,.2)'
              }}>
                <Info size={18} color="#c4b5fd" />
              </span>
              <span>{t.menu.about}</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default memo(Menu);
