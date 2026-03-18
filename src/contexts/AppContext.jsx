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

  // Current Section State
  const [currentSection, setCurrentSection] = useState('main');

  // Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // About Popup State
  const [isAboutOpen, setIsAboutOpen] = useState(false);

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
    setCurrentSection(sectionId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    playClickSound
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
