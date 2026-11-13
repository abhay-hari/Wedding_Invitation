import { motion } from 'framer-motion';
import FloatingPetals from './FloatingPetals';
import FloralDivider from './ui/FloralDivider';
import { wedding } from '../config/weddingData';

// ============================================================
// FooterSection — Section 10
// Final invitation composition, blessing, animated floral
// ============================================================

// Large full-width floral SVG for footer
const FooterFloral = () => (
  <svg
    viewBox="0 0 800 200"
    style={{ width: '100%', maxWidth: 900, marginBottom: 24 }}
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Central mandala */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => (
      <ellipse
        key={i}
        cx={400 + Math.cos((a * Math.PI) / 180) * 50}
        cy={100 + Math.sin((a * Math.PI) / 180) * 50}
        rx="22"
        ry="10"
        transform={`rotate(${a + 90}, ${400 + Math.cos((a * Math.PI) / 180) * 50}, ${100 + Math.sin((a * Math.PI) / 180) * 50})`}
        fill={i % 3 === 0 ? '#D83F83' : i % 3 === 1 ? '#F5B7CB' : '#A92555'}
        fillOpacity="0.6"
      />
    ))}
    <circle cx="400" cy="100" r="20" fill="#C6A46A" fillOpacity="0.9" />
    <circle cx="400" cy="100" r="10" fill="#FFFDF9" />

    {/* Left botanical branch */}
    <path d="M 10 180 Q 100 120 200 100 Q 280 85 350 90" stroke="#89947A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {[
      { cx: 80, cy: 140, r: 18 }, { cx: 170, cy: 110, r: 14 }, { cx: 250, cy: 95, r: 16 }, { cx: 330, cy: 92, r: 12 },
    ].map((f, fi) => (
      <g key={fi}>
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <ellipse key={i}
            cx={f.cx + Math.cos(a*Math.PI/180)*f.r}
            cy={f.cy + Math.sin(a*Math.PI/180)*f.r}
            rx={f.r*0.65} ry={f.r*0.3}
            transform={`rotate(${a},${f.cx+Math.cos(a*Math.PI/180)*f.r},${f.cy+Math.sin(a*Math.PI/180)*f.r})`}
            fill="#D83F83" fillOpacity={fi % 2 === 0 ? 0.7 : 0.5}
          />
        ))}
        <circle cx={f.cx} cy={f.cy} r={f.r*0.38} fill="#C6A46A" fillOpacity="0.85" />
      </g>
    ))}
    {/* Left leaves */}
    <path d="M 100 150 Q 85 135 95 125 Q 108 132 100 150Z" fill="#89947A" fillOpacity="0.5" />
    <path d="M 185 120 Q 170 105 180 95 Q 193 102 185 120Z" fill="#89947A" fillOpacity="0.5" />
    <path d="M 265 102 Q 250 88 260 78 Q 272 85 265 102Z" fill="#89947A" fillOpacity="0.5" />

    {/* Right botanical branch (mirror) */}
    <path d="M 790 180 Q 700 120 600 100 Q 520 85 450 90" stroke="#89947A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {[
      { cx: 720, cy: 140, r: 18 }, { cx: 630, cy: 110, r: 14 }, { cx: 550, cy: 95, r: 16 }, { cx: 470, cy: 92, r: 12 },
    ].map((f, fi) => (
      <g key={fi}>
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <ellipse key={i}
            cx={f.cx + Math.cos(a*Math.PI/180)*f.r}
            cy={f.cy + Math.sin(a*Math.PI/180)*f.r}
            rx={f.r*0.65} ry={f.r*0.3}
            transform={`rotate(${a},${f.cx+Math.cos(a*Math.PI/180)*f.r},${f.cy+Math.sin(a*Math.PI/180)*f.r})`}
            fill="#D83F83" fillOpacity={fi % 2 === 0 ? 0.7 : 0.5}
          />
        ))}
        <circle cx={f.cx} cy={f.cy} r={f.r*0.38} fill="#C6A46A" fillOpacity="0.85" />
      </g>
    ))}
    <path d="M 700 150 Q 715 135 705 125 Q 692 132 700 150Z" fill="#89947A" fillOpacity="0.5" />
    <path d="M 615 120 Q 630 105 620 95 Q 607 102 615 120Z" fill="#89947A" fillOpacity="0.5" />
    <path d="M 535 102 Q 550 88 540 78 Q 528 85 535 102Z" fill="#89947A" fillOpacity="0.5" />
  </svg>
);

export default function FooterSection() {
  return (
    <footer
      style={{
        background: 'linear-gradient(170deg, #FFFDF9 0%, #FCE8EF 60%, #F5B7CB 100%)',
        padding: 'clamp(60px, 10vh, 100px) clamp(20px, 5vw, 60px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="footer"
    >
      <FloatingPetals count={16} />

      {/* Background blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80vmax', height: '60vmax', background: 'radial-gradient(ellipse, rgba(216,63,131,0.1) 0%, transparent 60%)', borderRadius: '50%' }} />
      </div>

      <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>

        {/* Om symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <svg viewBox="0 0 80 80" width="64" height="64" aria-label="Om symbol">
            <circle cx="40" cy="40" r="36" fill="none" stroke="#C6A46A" strokeWidth="1.2" strokeOpacity="0.5" />
            <circle cx="40" cy="40" r="30" fill="rgba(252,232,239,0.5)" />
            <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontFamily="serif" fontSize="38" fill="#C6A46A" fillOpacity="0.9">ॐ</text>
          </svg>
        </motion.div>

        {/* Animated floral composition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ width: '100%', animation: 'floatSlow 6s ease-in-out infinite' }}
        >
          <FooterFloral />
        </motion.div>

        {/* "With Best Compliments" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(13px, 3.5vw, 17px)', fontStyle: 'italic', color: '#6B4A57', letterSpacing: '0.08em', marginBottom: 8 }}>
            With Best Compliments
          </p>
          <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(32px, 8vw, 56px)', color: '#D83F83', margin: 0, lineHeight: 1.1 }}>
            {wedding.complimentsFrom}
          </h2>
        </motion.div>

        <FloralDivider size="md" />

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ textAlign: 'center', lineHeight: 1.3 }}
        >
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 7vw, 50px)', color: '#A92555', margin: 0 }}>
            {wedding.groomName}
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(14px, 3vw, 18px)', color: '#C6A46A', letterSpacing: '0.3em', margin: '8px 0' }}>
            &amp;
          </p>
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 7vw, 50px)', color: '#D83F83', margin: 0 }}>
            {wedding.brideName}
          </p>
        </motion.div>

        {/* Wedding date */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(14px, 3.5vw, 18px)',
            color: '#6B4A57',
            letterSpacing: '0.08em',
          }}
        >
          {wedding.weddingDateDisplay}
        </motion.p>

        <FloralDivider size="sm" />

        {/* Final blessing message */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(14px, 3.5vw, 20px)',
            fontStyle: 'italic',
            color: '#6B4A57',
            maxWidth: 480,
            lineHeight: 1.8,
          }}
        >
          Your presence and blessings will make our celebration truly special.
        </motion.p>

        {/* Bottom gold bar */}
        <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(198,164,106,0.5), transparent)', marginTop: 24 }} />

        {/* Copyright */}
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', color: '#89947A', letterSpacing: '0.15em', opacity: 0.7 }}>
          {wedding.groomName} &amp; {wedding.brideName} · {wedding.weddingYear}
        </p>
      </div>
    </footer>
  );
}
