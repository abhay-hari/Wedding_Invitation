import { motion } from 'framer-motion';
import FloralDivider from './ui/FloralDivider';
import FloatingPetals from './FloatingPetals';
import { wedding } from '../config/weddingData';

// ============================================================
// CeremonyDetails — Section 05
// Three elegant information blocks with custom floral icons
// ============================================================

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

// Custom icons
const CalendarIcon = () => (
  <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
    <rect x="4" y="8" width="40" height="36" rx="4" fill="none" stroke="#D83F83" strokeWidth="1.5" />
    <rect x="4" y="8" width="40" height="12" rx="4" fill="rgba(216,63,131,0.1)" />
    <line x1="16" y1="4" x2="16" y2="14" stroke="#D83F83" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="4" x2="32" y2="14" stroke="#D83F83" strokeWidth="2" strokeLinecap="round" />
    <text x="24" y="36" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" fontWeight="700" fill="#A92555">15</text>
    <circle cx="38" cy="38" r="6" fill="#FCE8EF" stroke="#C6A46A" strokeWidth="1" />
    {[0,120,240].map((a,i)=>(
      <ellipse key={i} cx={38+Math.cos(a*Math.PI/180)*4} cy={38+Math.sin(a*Math.PI/180)*4} rx="2.5" ry="1.2"
        transform={`rotate(${a},${38+Math.cos(a*Math.PI/180)*4},${38+Math.sin(a*Math.PI/180)*4})`}
        fill="#D83F83" fillOpacity="0.6" />
    ))}
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
    <circle cx="24" cy="24" r="20" fill="none" stroke="#D83F83" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="18" fill="rgba(216,63,131,0.05)" />
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>(
      <line key={i}
        x1={24+Math.cos((a-90)*Math.PI/180)*15} y1={24+Math.sin((a-90)*Math.PI/180)*15}
        x2={24+Math.cos((a-90)*Math.PI/180)*(i%3===0?13:15.5)} y2={24+Math.sin((a-90)*Math.PI/180)*(i%3===0?13:15.5)}
        stroke="#C6A46A" strokeWidth={i%3===0?1.5:0.8} strokeOpacity="0.7"
      />
    ))}
    {/* Hour hand ~11 */}
    <line x1="24" y1="24" x2="20" y2="14" stroke="#A92555" strokeWidth="2" strokeLinecap="round" />
    {/* Minute hand ~20min */}
    <line x1="24" y1="24" x2="31" y2="16" stroke="#D83F83" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2.5" fill="#C6A46A" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
    <path d="M24 6 C15.2 6 8 13.2 8 22 C8 33 24 44 24 44 C24 44 40 33 40 22 C40 13.2 32.8 6 24 6Z" fill="rgba(216,63,131,0.1)" stroke="#D83F83" strokeWidth="1.5" />
    <circle cx="24" cy="22" r="6" fill="none" stroke="#D83F83" strokeWidth="1.5" />
    <circle cx="24" cy="22" r="2.5" fill="#D83F83" />
    {/* Floral overlay */}
    {[0,120,240].map((a,i)=>(
      <ellipse key={i} cx={24+Math.cos(a*Math.PI/180)*8} cy={22+Math.sin(a*Math.PI/180)*8} rx="3" ry="1.5"
        transform={`rotate(${a},${24+Math.cos(a*Math.PI/180)*8},${22+Math.sin(a*Math.PI/180)*8})`}
        fill="#C6A46A" fillOpacity="0.4" />
    ))}
  </svg>
);

function InfoBlock({ number, icon, title, lines, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: 'clamp(24px, 5vw, 36px) clamp(20px, 4vw, 32px)',
        background: 'rgba(255,253,249,0.85)',
        borderRadius: 16,
        border: '1px solid rgba(198,164,106,0.25)',
        boxShadow: '0 4px 32px rgba(216, 63, 131, 0.08)',
        backdropFilter: 'blur(8px)',
        flex: '1 1 240px',
        maxWidth: 300,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Number */}
      <span style={{
        position: 'absolute',
        top: 12, right: 16,
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '0.7rem',
        color: '#C6A46A',
        letterSpacing: '0.15em',
        opacity: 0.6,
      }}>
        {number}
      </span>

      {/* Top gold accent */}
      <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 2, background: 'linear-gradient(90deg, transparent, #C6A46A, transparent)' }} />

      {/* Icon */}
      <div style={{ marginBottom: 16, padding: 12, background: 'linear-gradient(135deg, #FCE8EF, #FFFDF9)', borderRadius: '50%', border: '1px solid rgba(216,63,131,0.2)' }}>
        {icon}
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(14px, 3vw, 17px)', letterSpacing: '0.2em', color: '#C6A46A', textTransform: 'uppercase', fontWeight: '600', marginBottom: 12 }}>
        {title}
      </h3>

      {/* Lines */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {lines.map((line, i) => (
          <p key={i} style={{
            fontFamily: i === 0 ? "'Cormorant Garamond', serif" : "'Poppins', sans-serif",
            fontSize: i === 0 ? 'clamp(16px, 4vw, 20px)' : 'clamp(12px, 2.5vw, 14px)',
            fontWeight: i === 0 ? '600' : '400',
            color: i === 0 ? '#35242C' : '#6B4A57',
            lineHeight: 1.5,
          }}>
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default function CeremonyDetails() {
  return (
    <section
      style={{
        background: '#FFFDF9',
        padding: 'clamp(60px, 10vh, 100px) clamp(20px, 5vw, 60px)',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="ceremony"
    >
      <FloatingPetals count={5} opacity={0.3} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 2 }}
      >
        {/* Section heading */}
        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(12px, 3vw, 15px)', letterSpacing: '0.4em', color: '#C6A46A', textTransform: 'uppercase', marginBottom: 8 }}>
            Wedding Ceremony
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 6vw, 40px)', color: '#35242C', fontWeight: '400', margin: 0 }}>
            Celebration Details
          </h2>
          <FloralDivider size="sm" />
        </motion.div>

        {/* Three blocks */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(16px, 3vw, 28px)',
          justifyContent: 'center',
        }}>
          <InfoBlock
            number="01"
            icon={<CalendarIcon />}
            title="Wedding Date"
            lines={[wedding.weddingDateDisplay]}
            delay={0}
          />
          <InfoBlock
            number="02"
            icon={<ClockIcon />}
            title="Muhurtham"
            lines={['Auspicious Time', wedding.muhurthamDisplay]}
            delay={0.1}
          />
          <InfoBlock
            number="03"
            icon={<LocationIcon />}
            title="Venue"
            lines={[wedding.venueWeddingName, wedding.venueWeddingLocation]}
            delay={0.2}
          />
        </div>
      </motion.div>
    </section>
  );
}
