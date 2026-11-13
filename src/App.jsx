import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import EnvelopeOpening from './components/EnvelopeOpening';
import HeroSection from './components/HeroSection';
import InvitationMessage from './components/InvitationMessage';
import CountdownSection from './components/CountdownSection';
import CeremonyDetails from './components/CeremonyDetails';
import VenueSection from './components/VenueSection';
import YathraSection from './components/YathraSection';
import CelebrationSection from './components/CelebrationSection';
import FamilyBlessings from './components/FamilyBlessings';
import FooterSection from './components/FooterSection';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  // Called when envelope animation completes — start music automatically
  const handleEnvelopeOpen = useCallback(() => {
    setEnvelopeOpened(true);
    // Autostart music after user interaction (the button click)
    setMusicPlaying(true);
  }, []);

  const handleMusicToggle = useCallback(() => {
    setMusicPlaying(prev => !prev);
  }, []);

  return (
    <>
      {/* Envelope opening screen */}
      <EnvelopeOpening onOpen={handleEnvelopeOpen} />

      {/* Main invitation — revealed after envelope opens */}
      <AnimatePresence>
        {envelopeOpened && (
          <motion.main
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeIn' }}
            style={{ minHeight: '100vh' }}
          >
            {/* Section 02 — Hero */}
            <HeroSection />

            {/* Section 03 — Invitation Message */}
            <InvitationMessage />

            {/* Section 04 — Countdown */}
            <CountdownSection />

            {/* Section 07 — Yathra (before ceremony details for flow) */}
            <YathraSection />

            {/* Section 05 — Ceremony Details */}
            <CeremonyDetails />

            {/* Section 06 — Venue */}
            <VenueSection />

            {/* Section 08 — Couple Celebration + Gallery */}
            <CelebrationSection />

            {/* Section 09 — Family Blessings + Contact */}
            <FamilyBlessings />

            {/* Section 10 — Footer */}
            <FooterSection />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Floating music player — always present once envelope opened */}
      {envelopeOpened && (
        <MusicPlayer isPlaying={musicPlaying} onToggle={handleMusicToggle} />
      )}
    </>
  );
}
