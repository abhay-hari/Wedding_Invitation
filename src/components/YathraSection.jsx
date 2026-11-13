import { motion } from 'framer-motion';
import FloralDivider from './ui/FloralDivider';
import { wedding } from '../config/weddingData';

// ============================================================
// YathraSection — Section 07
// Yathra Samayam with animated clock and floral decoration
// ============================================================

// Animated clock illustration
const DecorativeClock = () => (
  <div style={{ position: 'relative', width: 180, height: 180, margin: '0 auto' }}>
    <svg viewBox="0 0 180 180" style={{ width: '100%', height: '100%' }} aria-label="Clock showing 9:00 AM">
      {/* Outer floral ring */}
      {Array.from({ length: 16 }, (_, i) => {
        const a = (i / 16) * 360;
        return (
          <ellipse
            key={i}
            cx={90 + Math.cos((a * Math.PI) / 180) * 82}
            cy={90 + Math.sin((a * Math.PI) / 180) * 82}
            rx={8} ry={4}
            transform={`rotate(${a + 90}, ${90 + Math.cos((a * Math.PI) / 180) * 82}, ${90 + Math.sin((a * Math.PI) / 180) * 82})`}
            fill={i % 2 === 0 ? '#D83F83' : '#F5B7CB'}
            fillOpacity="0.65"
          />
        );
      })}

      {/* Clock face */}
      <circle cx="90" cy="90" r="68" fill="#FFFDF9" stroke="#C6A46A" strokeWidth="1.5" />
      <circle cx="90" cy="90" r="64" fill="none" stroke="#C6A46A" strokeWidth="0.6" strokeOpacity="0.4" />

      {/* Hour marks */}
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * 360 - 90;
        const isMajor = i % 3 === 0;
        const r1 = isMajor ? 54 : 56;
        const r2 = 60;
        return (
          <line
            key={i}
            x1={90 + Math.cos((a * Math.PI) / 180) * r1}
            y1={90 + Math.sin((a * Math.PI) / 180) * r1}
            x2={90 + Math.cos((a * Math.PI) / 180) * r2}
            y2={90 + Math.sin((a * Math.PI) / 180) * r2}
            stroke={isMajor ? '#C6A46A' : '#D83F8360'}
            strokeWidth={isMajor ? 2 : 1}
            strokeLinecap="round"
          />
        );
      })}

      {/* Number markers */}
      {[12, 3, 6, 9].map((n, i) => {
        const a = (i / 4) * 360 - 90;
        return (
          <text
            key={n}
            x={90 + Math.cos((a * Math.PI) / 180) * 46}
            y={90 + Math.sin((a * Math.PI) / 180) * 46 + 4}
            textAnchor="middle"
            fontFamily="Cormorant Garamond, serif"
            fontSize="12"
            fill="#A92555"
            fontWeight="600"
          >
            {n}
          </text>
        );
      })}

      {/* Hour hand — pointing to 9 (270 degrees - 90 = 180 from top) */}
      <line
        x1="90" y1="90"
        x2={90 + Math.cos((180 * Math.PI) / 180) * 36}
        y2={90 + Math.sin((180 * Math.PI) / 180) * 36}
        stroke="#A92555"
        strokeWidth="3"
        strokeLinecap="round"
        style={{ animation: 'none' }}
      />

      {/* Minute hand — pointing to 12 (270 degrees offset: -90) */}
      <line
        x1="90" y1="90"
        x2={90 + Math.cos((-90 * Math.PI) / 180) * 50}
        y2={90 + Math.sin((-90 * Math.PI) / 180) * 50}
        stroke="#D83F83"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Second hand */}
      <line
        x1="90" y1="90"
        x2={90 + Math.cos((-90 * Math.PI) / 180) * 55}
        y2={90 + Math.sin((-90 * Math.PI) / 180) * 55}
        stroke="#C6A46A"
        strokeWidth="1"
        strokeLinecap="round"
        style={{ transformOrigin: '90px 90px', animation: 'spin 60s steps(60) infinite' }}
      />

      {/* Center jewel */}
      <circle cx="90" cy="90" r="5" fill="#C6A46A" />
      <circle cx="90" cy="90" r="2.5" fill="#FFFDF9" />

      {/* Decorative flowers at 3,6,9,12 positions */}
      {[0, 90, 180, 270].map((angle, i) => {
        const cx = 90 + Math.cos(((angle - 90) * Math.PI) / 180) * 55;
        const cy = 90 + Math.sin(((angle - 90) * Math.PI) / 180) * 55;
        return (
          <g key={i}>
            {[0, 72, 144, 216, 288].map((a2, j) => (
              <ellipse key={j}
                cx={cx + Math.cos((a2 * Math.PI) / 180) * 5}
                cy={cy + Math.sin((a2 * Math.PI) / 180) * 5}
                rx="3" ry="1.5"
                transform={`rotate(${a2},${cx+Math.cos(a2*Math.PI/180)*5},${cy+Math.sin(a2*Math.PI/180)*5})`}
                fill="#D83F83" fillOpacity="0.3"
              />
            ))}
          </g>
        );
      })}
    </svg>
  </div>
);

export default function YathraSection() {
  return (
    <section
      style={{
        background: '#FFFDF9',
        padding: 'clamp(60px, 10vh, 100px) clamp(20px, 5vw, 60px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="yathra"
    >
      {/* Soft bg glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '60vmax', height: '60vmax', background: 'radial-gradient(ellipse, rgba(198,164,106,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 500, margin: '0 auto', position: 'relative', zIndex: 2 }}
      >
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(12px, 3vw, 15px)', letterSpacing: '0.4em', color: '#C6A46A', textTransform: 'uppercase', marginBottom: 32 }}>
          Wedding Procession
        </p>

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ animation: 'floatBob 6s ease-in-out infinite' }}
        >
          <DecorativeClock />
        </motion.div>

        <FloralDivider size="sm" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(12px, 3vw, 15px)', letterSpacing: '0.4em', color: '#89947A', textTransform: 'uppercase', marginBottom: 8 }}>
            Yathra Samayam
          </p>
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(36px, 9vw, 60px)', color: '#D83F83', margin: 0, lineHeight: 1.1 }}>
            {wedding.yathraTime}
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(11px, 2.5vw, 13px)', color: '#89947A', marginTop: 8, letterSpacing: '0.1em' }}>
            Muhurtham: {wedding.muhurthamDisplay}
          </p>
        </motion.div>
      </motion.div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
