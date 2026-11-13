import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import FloatingPetals from './FloatingPetals';
import FloralDivider from './ui/FloralDivider';
import { wedding } from '../config/weddingData';

// ============================================================
// HeroSection — Section 02
// Large portrait, couple names, wedding date, floral bg
// ============================================================

// Corner floral SVG decoration
const FloralCorner = ({ flip = false, style = {} }) => (
  <svg
    viewBox="0 0 160 160"
    style={{
      position: 'absolute',
      width: 'clamp(100px, 20vw, 180px)',
      transform: flip ? 'scaleX(-1)' : undefined,
      opacity: 0.75,
      pointerEvents: 'none',
      ...style,
    }}
    aria-hidden="true"
  >
    {/* Branch */}
    <path d="M10,150 Q40,100 80,70 Q120,40 150,10" stroke="#89947A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M80,70 Q60,50 50,30" stroke="#89947A" strokeWidth="1" fill="none" />
    <path d="M100,55 Q110,30 130,20" stroke="#89947A" strokeWidth="1" fill="none" />

    {/* Large flowers */}
    {[{ cx:50, cy:30, r:16 }, { cx:130, cy:20, r:12 }, { cx:30, cy:120, r:10 }].map((f,fi) => (
      <g key={fi}>
        {[0,45,90,135,180,225,270,315].map((a,i) => (
          <ellipse key={i}
            cx={f.cx + Math.cos(a*Math.PI/180)*f.r}
            cy={f.cy + Math.sin(a*Math.PI/180)*f.r}
            rx={f.r*0.65} ry={f.r*0.3}
            transform={`rotate(${a}, ${f.cx+Math.cos(a*Math.PI/180)*f.r}, ${f.cy+Math.sin(a*Math.PI/180)*f.r})`}
            fill="#D83F83" fillOpacity="0.65"
          />
        ))}
        <circle cx={f.cx} cy={f.cy} r={f.r*0.4} fill="#C6A46A" fillOpacity="0.9" />
        <circle cx={f.cx} cy={f.cy} r={f.r*0.2} fill="#FCE8EF" />
      </g>
    ))}

    {/* Leaves */}
    {[
      { d:"M60,70 Q50,55 40,65 Q48,75 60,70Z" },
      { d:"M100,55 Q95,42 85,48 Q90,60 100,55Z" },
      { d:"M140,30 Q135,18 125,24 Q130,36 140,30Z" },
      { d:"M25,130 Q15,118 10,128 Q16,138 25,130Z" },
    ].map((l,i) => (
      <path key={i} d={l.d} fill="#89947A" fillOpacity="0.55" />
    ))}

    {/* Small buds */}
    {[{ cx:75, cy:85 }, { cx:112, cy:40 }, { cx:40, cy:100 }].map((b,i)=>(
      <ellipse key={i} cx={b.cx} cy={b.cy} rx="5" ry="8" fill="#F5B7CB" fillOpacity="0.7" />
    ))}
  </svg>
);

// Photo frame with floral border
function CouplePhotoFrame({ src }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div style={{
      position: 'relative',
      width: 'clamp(240px, 50vw, 420px)',
      height: 'clamp(300px, 62vw, 520px)',
      margin: '0 auto',
    }}>
      {/* Outer glow ring */}
      <div style={{
        position: 'absolute',
        inset: '-12px',
        borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
        background: 'linear-gradient(145deg, rgba(216,63,131,0.15), rgba(198,164,106,0.2), rgba(216,63,131,0.1))',
        filter: 'blur(8px)',
      }} />

      {/* Gold ornamental ring */}
      <div style={{
        position: 'absolute',
        inset: '-6px',
        borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
        border: '2px solid',
        borderColor: 'transparent',
        background: 'linear-gradient(#FFFDF9, #FFFDF9) padding-box, linear-gradient(135deg, #C6A46A, #E8D5A3, #C6A46A, #A67840) border-box',
      }} />

      {/* Photo container */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(145deg, #FCE8EF, #F5B7CB)',
      }}>
        {!imgError && src ? (
          <img
            src={src}
            alt="Ameesh Babu & Sayanora B. S"
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        ) : (
          <div className="photo-placeholder">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path d="M32 32m-20 0a20 20 0 1 0 40 0 20 20 0 1 0-40 0" stroke="#D83F83" strokeWidth="1.5" strokeDasharray="4 2" />
              <path d="M22 32c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z" fill="#F5B7CB" fillOpacity="0.5" />
              <path d="M32 22v4M32 38v4M22 32h4M38 32h4" stroke="#D83F83" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#A92555' }}>
              Couple Portrait
            </span>
            <p>Add photo to<br/>public/assets/photos/couple-main.jpg</p>
          </div>
        )}
      </div>

      {/* Floral overlays on frame */}
      <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
        <svg viewBox="0 0 120 60" width="120" height="60" aria-hidden="true">
          {[0,60,120,180,240,300].map((a,i)=>(
            <ellipse key={i} cx={60+Math.cos(a*Math.PI/180)*14} cy={30+Math.sin(a*Math.PI/180)*14}
              rx="8" ry="4"
              transform={`rotate(${a}, ${60+Math.cos(a*Math.PI/180)*14}, ${30+Math.sin(a*Math.PI/180)*14})`}
              fill="#D83F83" fillOpacity="0.7" />
          ))}
          <circle cx="60" cy="30" r="6" fill="#C6A46A" fillOpacity="0.9" />
          <path d="M30,30 Q40,15 55,20" stroke="#89947A" strokeWidth="1.5" fill="none" />
          <path d="M90,30 Q80,15 65,20" stroke="#89947A" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
    </div>
  );
}

// Scroll indicator
function ScrollIndicator() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.7 }}>
      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: '#89947A', textTransform: 'uppercase' }}>Scroll</span>
      <div style={{
        width: 24, height: 40,
        border: '1.5px solid rgba(198,164,106,0.5)',
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 6,
      }}>
        <div style={{
          width: 4, height: 8,
          background: '#C6A46A',
          borderRadius: 2,
          animation: 'scrollBounce 1.5s ease-in-out infinite',
        }} />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(170deg, #FFFDF9 0%, #FCE8EF 40%, #F5B7CB 70%, #FCE8EF 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
        paddingBottom: 60,
        paddingLeft: 20,
        paddingRight: 20,
        position: 'relative',
        overflow: 'hidden',
      }}
      id="hero"
    >
      <FloatingPetals count={12} />

      {/* Background radial glows */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'10%', left:'50%', transform:'translateX(-50%)', width:'80vmax', height:'80vmax', background:'radial-gradient(ellipse, rgba(245,183,203,0.3) 0%, transparent 65%)', borderRadius:'50%' }} />
      </div>

      {/* Corner florals */}
      <FloralCorner style={{ top: 0, left: 0 }} />
      <FloralCorner flip style={{ top: 0, right: 0 }} />

      <motion.div style={{ y, width: '100%', maxWidth: 680, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, position: 'relative', zIndex: 2 }}>

        {/* "Wedding Invitation" header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(12px, 3vw, 16px)',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#C6A46A',
            marginBottom: 4,
          }}>
            Wedding Invitation
          </p>
          <div style={{ width: 80, height: '1px', background: 'linear-gradient(90deg, transparent, #C6A46A, transparent)', margin: '0 auto' }} />
        </motion.div>

        {/* Blessing text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(14px, 3vw, 18px)',
            fontStyle: 'italic',
            color: '#6B4A57',
            letterSpacing: '0.05em',
          }}
        >
          With the blessings of the Almighty
        </motion.p>

        {/* Couple Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <CouplePhotoFrame src={wedding.couplePhotoMain} />
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          style={{ textAlign: 'center', lineHeight: 1.2 }}
        >
          <h1 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(42px, 11vw, 80px)',
            color: '#D83F83',
            lineHeight: 1.1,
            margin: 0,
          }}>
            {wedding.groomName}
          </h1>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(15px, 3.5vw, 22px)',
            fontStyle: 'italic',
            color: '#C6A46A',
            letterSpacing: '0.15em',
            margin: '6px 0',
          }}>
            with
          </p>
          <h1 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(42px, 11vw, 80px)',
            color: '#A92555',
            lineHeight: 1.1,
            margin: 0,
          }}>
            {wedding.brideName}
          </h1>
        </motion.div>

        <FloralDivider size="md" />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(14px, 3.2vw, 18px)',
            color: '#6B4A57',
            fontStyle: 'italic',
            textAlign: 'center',
            maxWidth: 440,
            lineHeight: 1.7,
          }}
        >
          Together with our families, we invite you to celebrate our wedding.
        </motion.p>

        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, rgba(216,63,131,0.08), rgba(198,164,106,0.12))',
            border: '1.5px solid rgba(198,164,106,0.5)',
            borderRadius: 16,
            padding: '16px 36px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#89947A', textTransform: 'uppercase', marginBottom: 4 }}>
            Save the Date
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(20px, 5vw, 28px)',
            fontWeight: '600',
            color: '#A92555',
            letterSpacing: '0.05em',
          }}>
            {wedding.weddingDateShort}
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <ScrollIndicator />
        </motion.div>
      </motion.div>

      {/* Bottom corner florals */}
      <FloralCorner style={{ bottom: 0, left: 0, transform: 'scaleY(-1)' }} />
      <FloralCorner flip style={{ bottom: 0, right: 0, transform: 'scaleY(-1)' }} />
    </section>
  );
}
