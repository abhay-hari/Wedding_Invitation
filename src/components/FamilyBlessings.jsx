import { motion } from 'framer-motion';
import FloralDivider from './ui/FloralDivider';
import FloatingPetals from './FloatingPetals';
import { wedding } from '../config/weddingData';

// ============================================================
// FamilyBlessings — Section 09
// Contact info, WhatsApp button, love message
// ============================================================

// WhatsApp icon
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Phone icon
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.18 2 2 0 012 .02h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
);

// Heart floral pattern  
const HeartFloral = () => (
  <svg viewBox="0 0 120 110" width="120" height="110" aria-hidden="true">
    {/* Large heart */}
    <path d="M60,90 C60,90 10,55 10,30 C10,15 22,5 36,10 C45,13 55,22 60,30 C65,22 75,13 84,10 C98,5 110,15 110,30 C110,55 60,90 60,90Z"
      fill="none" stroke="#D83F83" strokeWidth="1.5" strokeOpacity="0.4" />

    {/* Flowers along heart path */}
    {[
      { cx: 60, cy: 30 }, { cx: 25, cy: 40 }, { cx: 95, cy: 40 },
      { cx: 20, cy: 60 }, { cx: 100, cy: 60 }, { cx: 60, cy: 85 },
    ].map((f, i) => (
      <g key={i}>
        {[0, 60, 120, 180, 240, 300].map((a, j) => (
          <ellipse key={j}
            cx={f.cx + Math.cos(a*Math.PI/180)*7}
            cy={f.cy + Math.sin(a*Math.PI/180)*7}
            rx="4" ry="2"
            transform={`rotate(${a},${f.cx+Math.cos(a*Math.PI/180)*7},${f.cy+Math.sin(a*Math.PI/180)*7})`}
            fill="#D83F83" fillOpacity={i===0?0.7:0.5}
          />
        ))}
        <circle cx={f.cx} cy={f.cy} r="3" fill="#C6A46A" fillOpacity="0.8" />
      </g>
    ))}
  </svg>
);

export default function FamilyBlessings() {
  return (
    <section
      style={{
        background: '#FFFDF9',
        padding: 'clamp(60px, 10vh, 100px) clamp(20px, 5vw, 60px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="contact"
    >
      <FloatingPetals count={6} opacity={0.4} />

      {/* Subtle bg pattern */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.06, pointerEvents: 'none' }}>
        <HeartFloral />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 540, margin: '0 auto', position: 'relative', zIndex: 2 }}
      >
        {/* Heart decoration */}
        <div style={{ marginBottom: 24, animation: 'floatSlow 4s ease-in-out infinite' }}>
          <HeartFloral />
        </div>

        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(14px, 3.5vw, 18px)', fontStyle: 'italic', color: '#6B4A57', marginBottom: 8 }}>
          With Love,
        </p>

        <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 7vw, 48px)', color: '#D83F83', margin: '0 0 4px' }}>
          {wedding.groomFather.replace('Sri. ', '')}
        </h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(14px, 3.5vw, 18px)', color: '#6B4A57' }}>
          &amp; {wedding.groomMother}
        </p>

        <FloralDivider size="sm" />

        {/* Contact */}
        <div style={{
          background: 'linear-gradient(135deg, #FCE8EF, rgba(255,253,249,0.9))',
          borderRadius: 20,
          border: '1px solid rgba(198,164,106,0.3)',
          padding: 'clamp(24px, 5vw, 36px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 4px 24px rgba(216,63,131,0.1)',
        }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#C6A46A', textTransform: 'uppercase' }}>
            Contact
          </p>

          {/* Phone */}
          <a
            href={wedding.contactPhoneLink}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 28px',
              background: 'white',
              borderRadius: 50,
              border: '1.5px solid rgba(216,63,131,0.3)',
              color: '#D83F83',
              textDecoration: 'none',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(18px, 4.5vw, 24px)',
              fontWeight: '600',
              letterSpacing: '0.08em',
              boxShadow: '0 2px 16px rgba(216,63,131,0.1)',
              transition: 'all 0.2s',
            }}
            aria-label={`Call ${wedding.contactPhone}`}
            onMouseOver={e => { e.currentTarget.style.background = '#FCE8EF'; }}
            onMouseOut={e => { e.currentTarget.style.background = 'white'; }}
          >
            <PhoneIcon />
            {wedding.contactPhone}
          </a>

          {/* WhatsApp */}
          <a
            href={wedding.contactWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 28px',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              borderRadius: 50,
              color: 'white',
              textDecoration: 'none',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.85rem',
              fontWeight: '500',
              letterSpacing: '0.05em',
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            aria-label="Contact on WhatsApp"
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = ''; }}
          >
            <WhatsAppIcon />
            Message on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
