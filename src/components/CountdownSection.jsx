import { motion } from 'framer-motion';
import { CountdownUnit, useCountdown } from './ui/CountdownUnit';
import FloralDivider from './ui/FloralDivider';
import FloatingPetals from './FloatingPetals';
import { wedding } from '../config/weddingData';

// ============================================================
// CountdownSection — Section 04
// Circular floral date badge + live IST countdown
// ============================================================

// Circular floral date badge — inspired by the reference invitation
const FloralDateBadge = () => (
  <div style={{ position: 'relative', width: 'clamp(200px, 50vw, 280px)', height: 'clamp(200px, 50vw, 280px)', margin: '0 auto' }}>
    <svg viewBox="0 0 280 280" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {/* Outer glow ring */}
      <circle cx="140" cy="140" r="135" fill="rgba(252,232,239,0.4)" />

      {/* Decorative petal ring (outer) */}
      {Array.from({ length: 24 }, (_, i) => {
        const a = (i / 24) * 360;
        const r1 = 118, r2 = 130;
        return (
          <ellipse
            key={i}
            cx={140 + Math.cos((a * Math.PI) / 180) * ((r1 + r2) / 2)}
            cy={140 + Math.sin((a * Math.PI) / 180) * ((r1 + r2) / 2)}
            rx={8} ry={4}
            transform={`rotate(${a + 90}, ${140 + Math.cos((a * Math.PI) / 180) * ((r1 + r2) / 2)}, ${140 + Math.sin((a * Math.PI) / 180) * ((r1 + r2) / 2)})`}
            fill={i % 2 === 0 ? '#D83F83' : '#F5B7CB'}
            fillOpacity="0.65"
          />
        );
      })}

      {/* Gold rings */}
      <circle cx="140" cy="140" r="108" fill="none" stroke="#C6A46A" strokeWidth="1.2" strokeOpacity="0.6" />
      <circle cx="140" cy="140" r="100" fill="rgba(255,253,249,0.9)" />
      <circle cx="140" cy="140" r="98" fill="none" stroke="#C6A46A" strokeWidth="0.6" strokeOpacity="0.4" />

      {/* Inner floral corners at 4 compass points */}
      {[0, 90, 180, 270].map((angle, i) => {
        const cx = 140 + Math.cos((angle * Math.PI) / 180) * 80;
        const cy = 140 + Math.sin((angle * Math.PI) / 180) * 80;
        return (
          <g key={i}>
            {[0, 60, 120, 180, 240, 300].map((a2, j) => (
              <ellipse
                key={j}
                cx={cx + Math.cos((a2 * Math.PI) / 180) * 8}
                cy={cy + Math.sin((a2 * Math.PI) / 180) * 8}
                rx="5" ry="2.5"
                transform={`rotate(${a2}, ${cx + Math.cos((a2 * Math.PI) / 180) * 8}, ${cy + Math.sin((a2 * Math.PI) / 180) * 8})`}
                fill="#D83F83"
                fillOpacity="0.55"
              />
            ))}
            <circle cx={cx} cy={cy} r="4" fill="#C6A46A" fillOpacity="0.8" />
          </g>
        );
      })}
    </svg>

    {/* Date text overlay */}
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '30px',
    }}>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.3em', color: '#89947A', textTransform: 'uppercase', marginBottom: 2 }}>
        {wedding.weddingDay}
      </p>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 8vw, 52px)', fontWeight: '700', color: '#A92555', lineHeight: 1, margin: '4px 0' }}>
        15
      </p>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(10px, 2.5vw, 13px)', letterSpacing: '0.2em', color: '#D83F83', textTransform: 'uppercase' }}>
        {wedding.weddingMonth}
      </p>
      <div style={{ width: 40, height: 1, background: '#C6A46A', margin: '6px auto' }} />
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(14px, 3.5vw, 18px)', color: '#6B4A57', letterSpacing: '0.1em' }}>
        {wedding.weddingYear}
      </p>
    </div>
  </div>
);

export default function CountdownSection() {
  const timeLeft = useCountdown(wedding.weddingDate);

  return (
    <section
      style={{
        background: 'linear-gradient(170deg, #FFFDF9 0%, #FCE8EF 60%, #FFFDF9 100%)',
        padding: 'clamp(60px, 10vh, 100px) clamp(20px, 5vw, 60px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="countdown"
    >
      <FloatingPetals count={8} opacity={0.4} />

      {/* Background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70vmax', height: '70vmax', background: 'radial-gradient(ellipse, rgba(216,63,131,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 2, maxWidth: 600, margin: '0 auto' }}
      >
        {/* Title */}
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(12px, 3vw, 15px)', letterSpacing: '0.4em', color: '#C6A46A', textTransform: 'uppercase', marginBottom: 32 }}>
          Save the Date
        </p>

        <FloralDateBadge />

        <FloralDivider size="md" />

        {/* Countdown or celebration message */}
        {timeLeft.done ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ marginTop: 24 }}
          >
            <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 7vw, 48px)', color: '#D83F83' }}>
              Today we celebrate a beautiful beginning.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(10px, 2.5vw, 12px)', letterSpacing: '0.3em', color: '#89947A', textTransform: 'uppercase', marginBottom: 24 }}>
              Counting down to the celebration
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(12px, 3vw, 24px)',
              flexWrap: 'wrap',
            }}>
              <CountdownUnit value={timeLeft.days} label="Days" />
              <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 28 }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: '#D83F83', fontWeight: 300 }}>:</span>
              </div>
              <CountdownUnit value={timeLeft.hours} label="Hours" />
              <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 28 }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: '#D83F83', fontWeight: 300 }}>:</span>
              </div>
              <CountdownUnit value={timeLeft.minutes} label="Minutes" />
              <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 28 }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: '#D83F83', fontWeight: 300 }}>:</span>
              </div>
              <CountdownUnit value={timeLeft.seconds} label="Seconds" />
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', color: '#89947A', marginTop: 12, letterSpacing: '0.1em' }}>
              Indian Standard Time (IST)
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
