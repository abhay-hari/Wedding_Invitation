import { motion } from 'framer-motion';
import FloralDivider from './ui/FloralDivider';
import FloatingPetals from './FloatingPetals';
import { wedding } from '../config/weddingData';

// ============================================================
// InvitationMessage — Section 03
// Traditional formal invitation text, floral side compositions
// ============================================================

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Side floral decoration — large botanical composition
const SideFloral = ({ side = 'left' }) => (
  <svg
    viewBox="0 0 120 400"
    style={{
      position: 'absolute',
      [side]: 0,
      top: '50%',
      transform: `translateY(-50%) ${side === 'right' ? 'scaleX(-1)' : ''}`,
      height: 'min(400px, 60vh)',
      width: 'auto',
      opacity: 0.7,
      pointerEvents: 'none',
    }}
    aria-hidden="true"
  >
    {/* Main stem */}
    <path d="M60,400 Q50,300 55,200 Q60,100 65,30" stroke="#89947A" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* Branches */}
    <path d="M56,320 Q30,290 20,260" stroke="#89947A" strokeWidth="1.2" fill="none" />
    <path d="M57,250 Q30,230 15,200" stroke="#89947A" strokeWidth="1.2" fill="none" />
    <path d="M58,180 Q35,160 25,140" stroke="#89947A" strokeWidth="1.2" fill="none" />
    <path d="M60,110 Q40,90 35,70" stroke="#89947A" strokeWidth="1.2" fill="none" />
    <path d="M62,80 Q80,60 90,40" stroke="#89947A" strokeWidth="1.2" fill="none" />

    {/* Flowers at branch tips */}
    {[
      { cx: 20, cy: 260, r: 16 },
      { cx: 15, cy: 200, r: 13 },
      { cx: 25, cy: 140, r: 18 },
      { cx: 35, cy: 70, r: 14 },
      { cx: 90, cy: 40, r: 12 },
      { cx: 65, cy: 30, r: 20 },
    ].map((f, fi) => (
      <g key={fi}>
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <ellipse
            key={i}
            cx={f.cx + Math.cos((a * Math.PI) / 180) * f.r}
            cy={f.cy + Math.sin((a * Math.PI) / 180) * f.r}
            rx={f.r * 0.65}
            ry={f.r * 0.3}
            transform={`rotate(${a}, ${f.cx + Math.cos((a * Math.PI) / 180) * f.r}, ${f.cy + Math.sin((a * Math.PI) / 180) * f.r})`}
            fill={fi % 2 === 0 ? '#D83F83' : '#F5B7CB'}
            fillOpacity="0.75"
          />
        ))}
        <circle cx={f.cx} cy={f.cy} r={f.r * 0.38} fill="#C6A46A" fillOpacity="0.9" />
        <circle cx={f.cx} cy={f.cy} r={f.r * 0.18} fill="#FFFDF9" />
      </g>
    ))}

    {/* Leaves */}
    {[
      { d: 'M56,320 Q40,330 35,320 Q42,308 56,320Z' },
      { d: 'M57,250 Q38,258 35,246 Q44,236 57,250Z' },
      { d: 'M58,180 Q42,188 39,176 Q48,164 58,180Z' },
      { d: 'M60,110 Q46,118 43,106 Q52,96 60,110Z' },
    ].map((l, i) => (
      <path key={i} d={l.d} fill="#89947A" fillOpacity="0.55" />
    ))}
  </svg>
);

export default function InvitationMessage() {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #FFFDF9 0%, #FCE8EF 50%, #FFFDF9 100%)',
        padding: 'clamp(60px, 10vh, 100px) clamp(20px, 5vw, 60px)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      id="invitation"
    >
      <FloatingPetals count={6} opacity={0.5} />
      <SideFloral side="left" />
      <SideFloral side="right" />

      {/* Background floral glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,183,203,0.18) 0%, transparent 70%)',
      }} />

      {/* Gold border frame */}
      <div style={{
        position: 'absolute',
        top: 24, bottom: 24, left: 24, right: 24,
        border: '1px solid rgba(198,164,106,0.25)',
        borderRadius: 4,
        pointerEvents: 'none',
      }} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          maxWidth: 580,
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        {/* Om / Auspicious symbol */}
        <motion.div variants={fadeUp}>
          <svg viewBox="0 0 60 60" width="48" height="48" aria-label="Auspicious symbol">
            <circle cx="30" cy="30" r="28" fill="none" stroke="#C6A46A" strokeWidth="1" strokeOpacity="0.5" />
            <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle"
              fontFamily="serif" fontSize="28" fill="#C6A46A" fillOpacity="0.85">ॐ</text>
          </svg>
        </motion.div>

        <motion.p variants={fadeUp} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(14px, 3.5vw, 18px)', fontStyle: 'italic', color: '#6B4A57', letterSpacing: '0.05em' }}>
          With the blessings of the Almighty,
        </motion.p>

        <FloralDivider size="sm" />

        {/* Groom's Parents */}
        <motion.div variants={fadeUp}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(16px, 4vw, 22px)', fontWeight: '600', color: '#35242C', lineHeight: 1.5 }}>
            {wedding.groomFather} &amp; {wedding.groomMother}
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(11px, 2.5vw, 13px)', color: '#89947A', letterSpacing: '0.08em', marginTop: 4 }}>
            ({wedding.groomHouse})
          </p>
        </motion.div>

        <motion.p variants={fadeUp} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(13px, 3vw, 16px)', color: '#6B4A57', lineHeight: 1.7, maxWidth: 420 }}>
          Cordially invite you and your family to grace the auspicious occasion
          of the marriage of their beloved son
        </motion.p>

        <FloralDivider size="sm" />

        {/* Groom name */}
        <motion.div variants={fadeUp}>
          <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(40px, 10vw, 68px)', color: '#D83F83', margin: 0, lineHeight: 1.1 }}>
            {wedding.groomName}
          </h2>
        </motion.div>

        <motion.p variants={fadeUp} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(14px, 3.5vw, 20px)', color: '#C6A46A', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          with
        </motion.p>

        {/* Bride name */}
        <motion.div variants={fadeUp}>
          <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(40px, 10vw, 68px)', color: '#A92555', margin: 0, lineHeight: 1.1 }}>
            {wedding.brideName}
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(11px, 2.5vw, 13px)', color: '#89947A', letterSpacing: '0.05em', marginTop: 6, lineHeight: 1.6 }}>
            Daughter of {wedding.brideFather} &amp; {wedding.brideMother}
            <br />{wedding.brideHouse}
          </p>
        </motion.div>

        <FloralDivider size="md" />

        {/* Date callout */}
        <motion.div
          variants={fadeUp}
          style={{
            padding: '14px 32px',
            border: '1px solid rgba(198,164,106,0.4)',
            borderRadius: 8,
            background: 'rgba(255,253,249,0.8)',
          }}
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(15px, 4vw, 20px)', fontWeight: '600', color: '#A92555', letterSpacing: '0.05em' }}>
            {wedding.weddingDateDisplay}
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.7rem', color: '#89947A', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 2 }}>
            {wedding.venueWeddingFull}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
