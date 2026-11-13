import { motion } from 'framer-motion';
import FloralDivider from './ui/FloralDivider';
import FloatingPetals from './FloatingPetals';
import { wedding } from '../config/weddingData';

// ============================================================
// VenueSection — Section 06
// Wedding + Reception venue with directions buttons
// ============================================================

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

// Map pin illustration
const MapPin = ({ color = '#D83F83' }) => (
  <svg viewBox="0 0 64 80" width="48" height="60" aria-hidden="true">
    <defs>
      <radialGradient id="pinGrad" cx="40%" cy="30%">
        <stop offset="0%" stopColor={color} stopOpacity="0.9" />
        <stop offset="100%" stopColor="#A92555" />
      </radialGradient>
    </defs>
    <path d="M32 4 C18 4 8 14 8 28 C8 46 32 76 32 76 C32 76 56 46 56 28 C56 14 46 4 32 4Z" fill="url(#pinGrad)" />
    <circle cx="32" cy="28" r="12" fill="rgba(255,255,255,0.3)" />
    <circle cx="32" cy="28" r="8" fill="white" fillOpacity="0.9" />
    {/* Heart inside */}
    <path d="M32,32 C32,32 27,27.5 27,25 C27,23 29,22 32,24.5 C35,22 37,23 37,25 C37,27.5 32,32 32,32Z" fill={color} />
    {/* Top flower petals on pin */}
    <ellipse cx="22" cy="10" rx="6" ry="3" transform="rotate(-30,22,10)" fill="#F5B7CB" fillOpacity="0.7" />
    <ellipse cx="42" cy="10" rx="6" ry="3" transform="rotate(30,42,10)" fill="#F5B7CB" fillOpacity="0.7" />
    <circle cx="32" cy="6" r="4" fill="#C6A46A" fillOpacity="0.8" />
  </svg>
);

function VenueCard({ type, name, location, mapsUrl, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        flex: '1 1 300px',
        maxWidth: 400,
        background: 'rgba(255,253,249,0.9)',
        borderRadius: 20,
        border: '1px solid rgba(198,164,106,0.3)',
        overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(216, 63, 131, 0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top banner */}
      <div style={{
        background: 'linear-gradient(135deg, #D83F83 0%, #A92555 100%)',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}>
        <MapPin color="#FCE8EF" />
        <div>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase', marginBottom: 2 }}>
            {type}
          </p>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px, 4.5vw, 22px)', color: 'white', margin: 0, lineHeight: 1.2, fontWeight: '600' }}>
            {name}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Location display */}
        <div style={{
          background: 'linear-gradient(135deg, #FCE8EF, #F5B7CB20)',
          borderRadius: 12,
          padding: '14px 18px',
          border: '1px solid rgba(216,63,131,0.15)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7z" stroke="#D83F83" strokeWidth="1.5" fill="rgba(216,63,131,0.1)" />
              <circle cx="12" cy="9" r="2.5" stroke="#D83F83" strokeWidth="1.2" />
            </svg>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(14px, 3.5vw, 17px)', color: '#35242C', fontWeight: '500' }}>
              {location}
            </p>
          </div>
        </div>

        {/* Date reminder */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="3" stroke="#C6A46A" strokeWidth="1.5" />
            <line x1="3" y1="10" x2="21" y2="10" stroke="#C6A46A" strokeWidth="1.2" />
            <line x1="8" y1="2" x2="8" y2="6" stroke="#C6A46A" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16" y1="2" x2="16" y2="6" stroke="#C6A46A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.75rem', color: '#89947A' }}>
            {wedding.weddingDateDisplay}
          </p>
        </div>

        {/* Directions button */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            marginTop: 'auto',
            padding: '13px 24px',
            background: 'linear-gradient(135deg, #D83F83, #A92555)',
            color: 'white',
            borderRadius: 50,
            textDecoration: 'none',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.8rem',
            fontWeight: '500',
            letterSpacing: '0.08em',
            boxShadow: '0 4px 20px rgba(216, 63, 131, 0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(216,63,131,0.4)'; }}
          onMouseOut={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(216,63,131,0.3)'; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Get Directions
        </a>
      </div>
    </motion.div>
  );
}

export default function VenueSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(170deg, #FCE8EF 0%, #FFFDF9 100%)',
        padding: 'clamp(60px, 10vh, 100px) clamp(20px, 5vw, 60px)',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="venue"
    >
      <FloatingPetals count={6} opacity={0.35} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(12px, 3vw, 15px)', letterSpacing: '0.4em', color: '#C6A46A', textTransform: 'uppercase', marginBottom: 8 }}>
            You Are Welcome
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 6vw, 40px)', color: '#35242C', fontWeight: '400', margin: 0 }}>
            Venue &amp; Location
          </h2>
          <FloralDivider size="sm" />
        </motion.div>

        {/* Venue cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 32px)', justifyContent: 'center' }}>
          <VenueCard
            type="Wedding Ceremony"
            name={wedding.venueWeddingName}
            location={wedding.venueWeddingFull}
            mapsUrl={wedding.venueWeddingMapsUrl}
            delay={0}
          />
          <VenueCard
            type="Reception"
            name={wedding.venueReceptionName}
            location={wedding.venueReceptionFull}
            mapsUrl={wedding.venueReceptionMapsUrl}
            delay={0.15}
          />
        </div>
      </motion.div>
    </section>
  );
}
