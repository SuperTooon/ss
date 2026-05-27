import { AnimatePresence, motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import TonSnow from './components/TonSnow';
import WaveBackground from './components/WaveBackground';
import Menu from './components/Menu';
import AboutPopup from './components/AboutPopup';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Sections
import HomeSection from './components/sections/HomeSection';
import TrustSection from './components/sections/TrustSection';
import ChannelsSection from './components/sections/ChannelsSection';
import SuperTonSection from './components/sections/SuperTonSection';
import AuctionSection from './components/sections/AuctionSection';
import GiftsSection from './components/sections/GiftsSection';
import BrokersSection from './components/sections/BrokersSection';
import OwnersSection from './components/sections/OwnersSection';
import AdminSection from './components/sections/AdminSection';
import AuctionBrokersSection from './components/sections/AuctionBrokersSection';

import './App.css';

// Memoized background components to prevent unnecessary re-renders
const MemoizedTonSnow = memo(TonSnow);
const MemoizedWaveBackground = memo(WaveBackground);
const MemoizedMenu = memo(Menu);
const MemoizedFooter = memo(Footer);

// Section components map
const sections = {
  main: HomeSection,
  trust: TrustSection,
  channels: ChannelsSection,
  superton: SuperTonSection,
  auction: AuctionSection,
  gifts: GiftsSection,
  brokers: BrokersSection,
  auctionBrokers: AuctionBrokersSection,
  owners: OwnersSection,
  admin: AdminSection
};

function AppContent() {
  const { currentSection, isDark } = useApp();

  // Memoize the current section component
  const CurrentSection = useMemo(() => {
    return sections[currentSection] || HomeSection;
  }, [currentSection]);

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      {/* Background Effects - Only render once */}
      <MemoizedTonSnow />
      <MemoizedWaveBackground />
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <MemoizedMenu />
      
      {/* About Popup */}
      <AboutPopup />
      
      {/* Main Content */}
      <motion.main
        initial={false}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          placeItems: 'center',
          minHeight: '100svh',
          padding: 'clamp(10px, 2vh, 24px)',
          overflowY: 'auto'
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: '100%', display: 'contents' }}
          >
            <CurrentSection />
          </motion.div>
        </AnimatePresence>
      </motion.main>
      
      {/* Footer */}
      <MemoizedFooter />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
