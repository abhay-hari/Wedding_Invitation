import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingPetals from './FloatingPetals';

// ============================================================
// EnvelopeOpening — Section 01
// Animated envelope → card reveal → page transition
// ============================================================

// Pink floral SVG for envelope decoration
const FlowerCorner = ({ style }) => (
  <svg viewBox="0 0 80 80" style={{ position: 'absolute', ...style }} aria-hidden="true">
    <g opacity="0.85">
      {/* Petals */}
      {[0,45,90,135,180,225,270,315].map((a, i) => (
        <ellipse key={i}
          cx={40 + Math.cos(a*Math.PI/180)*15}
          cy={40 + Math.sin(a*Math.PI/180)*15}
          rx="10" ry="5"
          transform={`rotate(${a}, ${40 + Math.cos(a*Math.PI/180)*15}, ${40 + Math.sin(a*Math.PI/180)*15})`}
          fill="#D83F83" fillOpacity="0.6"
        />
      ))}
      <circle cx="40" cy="40" r="8" fill="#C6A46A" fillOpacity="0.9" />
      <circle cx="40" cy="40" r="4" fill="#FCE8EF" />
      {/* Leaves */}
      <path d="M 20 60 Q 15 45 30 40 Q 25 55 20 60Z" fill="#89947A" fillOpacity="0.5" />
      <path d="M 60 60 Q 65 45 50 40 Q 55 55 60 60Z" fill="#89947A" fillOpacity="0.5" />
    </g>
  </svg>
);

// Wax seal SVG
const WaxSeal = () => (
  <svg viewBox="0 0 60 60" style={{ width: 50, height: 50 }} aria-hidden="true">
    {/* Outer ring */}
    <circle cx="30" cy="30" r="28" fill="#C6A46A" />
    <circle cx="30" cy="30" r="24" fill="#A67840" />
    {/* Inner decoration */}
    {[0,60,120,180,240,300].map((a,i) => (
      <ellipse key={i}
        cx={30 + Math.cos(a*Math.PI/180)*14}
        cy={30 + Math.sin(a*Math.PI/180)*14}
        rx="5" ry="2.5"
        transform={`rotate(${a}, ${30 + Math.cos(a*Math.PI/180)*14}, ${30 + Math.sin(a*Math.PI/180)*14})`}
        fill="#C6A46A" fillOpacity="0.7"
      />
    ))}
    <circle cx="30" cy="30" r="8" fill="#C6A46A" />
    {/* Heart */}
    <path d="M30,34 C30,34 24,29 24,25 C24,22 27,20 30,23 C33,20 36,22 36,25 C36,29 30,34 30,34Z" fill="#fff" fillOpacity="0.9" />
  </svg>
);

// Petal burst on open
const PetalBurst = ({ active }) => {
  const bursts = Array.from({ length: 24 }, (_, i) => ({
    angle: (i / 24) * 360,
    dist: 80 + Math.random() * 120,
    size: 10 + Math.random() * 16,
    delay: Math.random() * 0.3,
    color: ['#D83F83','#F5B7CB','#A92555','#FCE8EF','#C6A46A'][i % 5],
  }));

  return (
    <AnimatePresence>
      {active && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 50, pointerEvents: 'none' }}>
          {bursts.map((b, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
              animate={{
                x: Math.cos(b.angle * Math.PI / 180) * b.dist,
                y: Math.sin(b.angle * Math.PI / 180) * b.dist,
                scale: 1,
                opacity: 0,
              }}
              transition={{ duration: 1.2, delay: b.delay, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                width: b.size,
                height: b.size,
                borderRadius: '50% 10% 50% 10%',
                background: b.color,
                transformOrigin: 'center',
                marginLeft: -b.size / 2,
                marginTop: -b.size / 2,
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default function EnvelopeOpening({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const [burst, setBurst] = useState(false);
  const [done, setDone] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setBurst(true);
    setTimeout(() => {
      setDone(true);
      setTimeout(() => onOpen(), 600);
    }, 2200);
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="envelope-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'linear-gradient(145deg, #FFFDF9 0%, #FCE8EF 50%, #FFFDF9 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Poppins', sans-serif",
            overflow: 'hidden',
          }}
        >
          <FloatingPetals count={8} opacity={0.5} />

          {/* Background floral watercolor circles */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div style={{ position:'absolute', top:'-10%', left:'-10%', width:'50vmax', height:'50vmax', borderRadius:'50%', background:'radial-gradient(circle, rgba(245,183,203,0.25) 0%, transparent 70%)' }} />
            <div style={{ position:'absolute', bottom:'-10%', right:'-10%', width:'40vmax', height:'40vmax', borderRadius:'50%', background:'radial-gradient(circle, rgba(216,63,131,0.12) 0%, transparent 70%)' }} />
          </div>

          {/* Top text */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: 40, position: 'relative', zIndex: 2 }}
          >
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(14px, 3.5vw, 20px)', letterSpacing: '0.3em', color: '#C6A46A', textTransform: 'uppercase', marginBottom: 8 }}>
              You Are Cordially Invited
            </p>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, #C6A46A, transparent)', margin: '0 auto' }} />
          </motion.div>

          {/* Envelope */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
            style={{
              position: 'relative',
              zIndex: 10,
              width: 'min(340px, 85vw)',
              height: 'min(240px, 60vw)',
              filter: 'drop-shadow(0 20px 60px rgba(216, 63, 131, 0.25))',
              animation: opening ? 'floatBob 0.5s ease-out forwards' : 'floatSlow 4s ease-in-out infinite',
            }}
          >
            <PetalBurst active={burst} />

            {/* Envelope body */}
            <svg viewBox="0 0 340 240" style={{ width: '100%', height: '100%' }}>
              {/* Body */}
              <rect x="0" y="40" width="340" height="200" rx="8" fill="#FFFDF9" stroke="#F5B7CB" strokeWidth="1.5" />

              {/* Back flap triangles (bottom V) */}
              <path d="M0,40 L170,160 L340,40 Z" fill="#FCE8EF" stroke="#F5B7CB" strokeWidth="1" />
              <path d="M0,240 L170,130 L340,240 Z" fill="#FBE0EB" stroke="#F5B7CB" strokeWidth="1" />
              <path d="M0,40 L0,240 L170,130 Z" fill="#F9D6E5" stroke="#F5B7CB" strokeWidth="1" />
              <path d="M340,40 L340,240 L170,130 Z" fill="#F9D6E5" stroke="#F5B7CB" strokeWidth="1" />

              {/* Front flap — animates open */}
              <motion.path
                d="M0,40 L170,160 L340,40 Z"
                fill="#FBE8F0"
                stroke="#F5B7CB"
                strokeWidth="1.5"
                style={{ transformOrigin: '170px 40px', transformBox: 'fill-box' }}
                animate={opening ? { rotateX: -180, opacity: 0 } : { rotateX: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />

              {/* Gold border on body */}
              <rect x="6" y="46" width="328" height="188" rx="5" fill="none" stroke="#C6A46A" strokeWidth="0.8" strokeDasharray="4,4" strokeOpacity="0.5" />

              {/* Floral corner decorations (via use — simulated) */}
              <g opacity="0.7">
                {/* Top left mini flower */}
                {[0,60,120,180,240,300].map((a,i)=>(
                  <ellipse key={i}
                    cx={30 + Math.cos(a*Math.PI/180)*10}
                    cy={80 + Math.sin(a*Math.PI/180)*10}
                    rx="6" ry="3"
                    transform={`rotate(${a}, ${30+Math.cos(a*Math.PI/180)*10}, ${80+Math.sin(a*Math.PI/180)*10})`}
                    fill="#D83F83" fillOpacity="0.5"
                  />
                ))}
                <circle cx="30" cy="80" r="5" fill="#C6A46A" fillOpacity="0.8" />
                {/* Top right mini flower */}
                {[0,60,120,180,240,300].map((a,i)=>(
                  <ellipse key={i}
                    cx={310 + Math.cos(a*Math.PI/180)*10}
                    cy={80 + Math.sin(a*Math.PI/180)*10}
                    rx="6" ry="3"
                    transform={`rotate(${a}, ${310+Math.cos(a*Math.PI/180)*10}, ${80+Math.sin(a*Math.PI/180)*10})`}
                    fill="#D83F83" fillOpacity="0.5"
                  />
                ))}
                <circle cx="310" cy="80" r="5" fill="#C6A46A" fillOpacity="0.8" />
                {/* Leaves */}
                <path d="M 42 90 Q 50 70 60 80 Q 52 95 42 90Z" fill="#89947A" fillOpacity="0.5" />
                <path d="M 298 90 Q 290 70 280 80 Q 288 95 298 90Z" fill="#89947A" fillOpacity="0.5" />
              </g>
            </svg>

            {/* Wax seal centered */}
            <div style={{
              position: 'absolute',
              top: '55%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 20,
              filter: 'drop-shadow(0 2px 8px rgba(198,164,106,0.5))',
              transition: 'opacity 0.3s',
              opacity: opening ? 0 : 1,
            }}>
              <WaxSeal />
            </div>
          </motion.div>

          {/* Open button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            onClick={handleOpen}
            disabled={opening}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginTop: 40,
              padding: '14px 44px',
              background: 'linear-gradient(135deg, #D83F83, #A92555)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(15px, 3vw, 18px)',
              letterSpacing: '0.15em',
              cursor: opening ? 'default' : 'pointer',
              opacity: opening ? 0.6 : 1,
              boxShadow: '0 6px 24px rgba(216, 63, 131, 0.4)',
              position: 'relative',
              zIndex: 10,
              transition: 'opacity 0.3s',
            }}
          >
            {opening ? 'Opening…' : 'Open Invitation ✦'}
          </motion.button>

          {/* Names tease */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: opening ? 1 : 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            style={{
              marginTop: 24,
              textAlign: 'center',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(28px, 7vw, 42px)', color: '#D83F83' }}>
              Ameesh & Sayanora
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
