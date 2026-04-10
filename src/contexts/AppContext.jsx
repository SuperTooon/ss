import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { translations } from '../data/translations';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Language State
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'ar';
  });

  // Dark Mode State
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Current Section State (persisted)
  const [currentSection, setCurrentSection] = useState(() => {
    return localStorage.getItem('section') || 'main';
  });

  // Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // About Popup State
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Visitor Counter
  const [visitCount, setVisitCount] = useState(0);

  // Sound Ref
  const clickSoundRef = useRef(null);

  // Initialize sound
  useEffect(() => {
    clickSoundRef.current = new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg');
    clickSoundRef.current.volume = 0.4;
  }, []);

  // Play click sound
  const playClickSound = useCallback(() => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(() => {
        // Ignore autoplay errors
      });
    }
  }, []);

  // Get translations
  const t = translations[lang];

  // Toggle Language
  const toggleLang = useCallback((newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = translations[newLang].dir;
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = useCallback(() => {
    setIsDark(prev => {
      const newValue = !prev;
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      return newValue;
    });
  }, []);

  // Navigate to Section
  const navigateTo = useCallback((sectionId) => {
    playClickSound();
    setCurrentSection(sectionId);
    localStorage.setItem('section', sectionId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [playClickSound]);

  // Increment global visitor count via secure server-side API
  useEffect(() => {
    fetch('/api/visits')
      .then(r => r.json())
      .then(data => {
        if (data?.count) setVisitCount(data.count);
      })
      .catch(() => {
        const local = parseInt(localStorage.getItem('visitCount') || '0', 10) + 1;
        localStorage.setItem('visitCount', local);
        setVisitCount(local);
      });
  }, []);

  // Initialize on mount
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;
    document.title = t.title;
  }, [lang, t.title]);

  // Apply dark mode class
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const value = {
    lang,
    dir: t.dir,
    t,
    isDark,
    currentSection,
    isMenuOpen,
    isAboutOpen,
    setIsMenuOpen,
    setIsAboutOpen,
    toggleLang,
    toggleDarkMode,
    navigateTo,
    playClickSound,
    visitCount
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
