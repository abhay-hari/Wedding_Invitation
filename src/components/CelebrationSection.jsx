import { motion } from 'framer-motion';
import { useState } from 'react';
import FloatingPetals from './FloatingPetals';
import FloralDivider from './ui/FloralDivider';
import { wedding } from '../config/weddingData';

// ============================================================
// CelebrationSection — Section 08
// Two couple portraits + 4-photo gallery
// (No individual groom/bride shots — using couple photos only)
// ============================================================

function CouplePhoto({ src, alt, style = {}, overlay }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div style={{
      borderRadius: 20,
      overflow: 'hidden',
      border: '2px solid rgba(198,164,106,0.35)',
      boxShadow: '0 12px 48px rgba(216,63,131,0.18)',
      position: 'relative',
      ...style,
    }}>
      {!imgError && src ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />
      ) : (
        <div style={{
          minHeight: style.height || 300,
          background: 'linear-gradient(135deg, #FCE8EF, #F5B7CB)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
        }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect x="4" y="4" width="40" height="40" rx="8" stroke="#D83F83" strokeWidth="1.5" strokeDasharray="4 2" />
            <circle cx="16" cy="18" r="4" fill="#F5B7CB" />
            <path d="M4 32l10-8 8 6 8-10 14 12" stroke="#D83F83" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem', color: '#A92555' }}>{alt}</span>
        </div>
      )}

      {overlay && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(to top, rgba(35,24,28,0.72), transparent)',
          padding: '36px 20px 20px', borderRadius: '0 0 20px 20px',
        }}>
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(20px, 4.5vw, 30px)', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)', margin: 0 }}>
            {overlay}
          </p>
        </div>
      )}
    </div>
  );
}

// Masonry layout for 4 photos
function PhotoGallery({ photos }) {
  return (
    <div style={{ width: '100%', maxWidth: 860, margin: '0 auto' }}>
      {/* Top 3 — left tall, right stacked */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '220px 220px',
        gap: 14,
        marginBottom: 14,
      }}>
        {photos.slice(0, 3).map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.02, zIndex: 10 }}
            style={{
              gridArea: i === 0 ? '1 / 1 / 3 / 2' : i === 1 ? '1 / 2 / 2 / 3' : '2 / 2 / 3 / 3',
              position: 'relative',
            }}
          >
            <CouplePhoto src={src} alt={`Wedding photo ${i + 1}`} style={{ height: '100%', width: '100%' }} />
          </motion.div>
        ))}
      </div>

      {/* Bottom full-width */}
      {photos[3] && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
        >
          <CouplePhoto src={photos[3]} alt="Wedding photo 4" style={{ height: 'clamp(220px, 35vw, 320px)', width: '100%' }} />
        </motion.div>
      )}
    </div>
  );
}

export default function CelebrationSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(170deg, #FFFDF9 0%, #FCE8EF 50%, #FFFDF9 100%)',
        padding: 'clamp(60px, 10vh, 100px) clamp(20px, 5vw, 60px)',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}
      id="celebration"
    >
      <FloatingPetals count={10} />

      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '50vmax', height: '50vmax', background: 'radial-gradient(circle, rgba(216,63,131,0.1) 0%, transparent 60%)', borderRadius: '50%', transform: 'translate(-30%, -30%)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40vmax', height: '40vmax', background: 'radial-gradient(circle, rgba(245,183,203,0.15) 0%, transparent 60%)', borderRadius: '50%', transform: 'translate(30%, 30%)' }} />
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 48 }}
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(12px, 3vw, 15px)', letterSpacing: '0.4em', color: '#C6A46A', textTransform: 'uppercase', marginBottom: 12 }}>
            Our Journey
          </p>
          <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 7vw, 52px)', color: '#D83F83', margin: 0, lineHeight: 1.2 }}>
            Two hearts, one beautiful journey.
          </p>
          <FloralDivider size="sm" />
        </motion.div>

        {/* ── Dual couple photo layout ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(16px, 3vw, 24px)',
            justifyContent: 'center',
            alignItems: 'stretch',
            marginBottom: 48,
          }}
        >
          {/* Primary photo — taller */}
          <div style={{ flex: '1 1 280px', maxWidth: 420, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -16, background: 'radial-gradient(ellipse, rgba(216,63,131,0.15) 0%, transparent 65%)', borderRadius: '50%', filter: 'blur(16px)', zIndex: 0 }} />
            <CouplePhoto
              src={wedding.couplePhotoMain}
              alt={`${wedding.groomName} & ${wedding.brideName}`}
              style={{ height: 'clamp(340px, 60vw, 480px)', width: '100%', position: 'relative', zIndex: 1 }}
              overlay={`${wedding.groomName} & ${wedding.brideName}`}
            />
          </div>

          {/* Secondary photo — shorter, offset bottom */}
          <div style={{ flex: '1 1 240px', maxWidth: 360, position: 'relative', alignSelf: 'flex-end', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'absolute', inset: -12, background: 'radial-gradient(ellipse, rgba(198,164,106,0.12) 0%, transparent 65%)', borderRadius: '50%', filter: 'blur(12px)', zIndex: 0 }} />
            <CouplePhoto
              src={wedding.couplePhotoSecondary}
              alt={`${wedding.groomName} & ${wedding.brideName}`}
              style={{ height: 'clamp(280px, 50vw, 400px)', width: '100%', position: 'relative', zIndex: 1 }}
            />
            <div style={{
              marginTop: 16, padding: '10px 24px',
              background: 'linear-gradient(135deg, #FCE8EF, rgba(255,253,249,0.9))',
              border: '1px solid rgba(198,164,106,0.3)', borderRadius: 50,
              display: 'inline-block', position: 'relative', zIndex: 1,
            }}>
              <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(18px, 4vw, 26px)', color: '#D83F83', margin: 0 }}>
                {wedding.groomName} &amp; {wedding.brideName}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(15px, 3.5vw, 20px)', fontStyle: 'italic',
            color: '#6B4A57', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.8,
          }}
        >
          We look forward to your esteemed presence and blessings on this joyous occasion.
        </motion.p>

        <FloralDivider size="lg" />

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ marginTop: 48 }}
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(12px, 3vw, 15px)', letterSpacing: '0.4em', color: '#C6A46A', textTransform: 'uppercase', marginBottom: 32 }}>
            Gallery
          </p>
          <PhotoGallery photos={wedding.galleryPhotos} />
        </motion.div>
      </div>
    </section>
  );
}
