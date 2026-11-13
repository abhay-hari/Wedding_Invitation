import { useEffect, useState } from 'react';

// ============================================================
// FloatingPetals — ambient rose petal animation
// Respects prefers-reduced-motion
// ============================================================

const PETAL_COUNT = 18;

const petalShapes = [
  // Rose petal
  `M10,30 C10,15 20,5 30,5 C40,5 50,15 50,30 C50,45 40,55 30,55 C20,55 10,45 10,30 Z`,
  // Elongated petal
  `M15,40 C5,25 5,10 20,5 C35,0 45,15 45,30 C45,45 35,55 20,50 C5,45 25,55 15,40 Z`,
  // Small petal
  `M8,20 C8,10 15,3 22,3 C29,3 36,10 36,20 C36,30 29,38 22,38 C15,38 8,30 8,20 Z`,
];

const colors = [
  'rgba(216, 63, 131, 0.65)',
  'rgba(245, 183, 203, 0.75)',
  'rgba(252, 232, 239, 0.80)',
  'rgba(169, 37, 85, 0.5)',
  'rgba(249, 200, 220, 0.70)',
];

function generatePetals() {
  return Array.from({ length: PETAL_COUNT }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 12}s`,
    duration: `${10 + Math.random() * 14}s`,
    size: 18 + Math.random() * 22,
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: petalShapes[Math.floor(Math.random() * petalShapes.length)],
    swayAmount: 20 + Math.random() * 50,
  }));
}

export default function FloatingPetals({ count = PETAL_COUNT, opacity = 1 }) {
  const [petals] = useState(generatePetals);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
  }, []);

  if (reduced) return null;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        opacity,
      }}
      aria-hidden="true"
    >
      {petals.slice(0, count).map((petal) => (
        <div
          key={petal.id}
          style={{
            position: 'absolute',
            left: petal.left,
            top: '-60px',
            width: petal.size,
            height: petal.size,
            animation: `petalFall ${petal.duration} ${petal.delay} linear infinite`,
          }}
        >
          <svg
            viewBox="0 0 60 60"
            style={{
              width: '100%',
              height: '100%',
              transform: `rotate(${Math.random() * 360}deg)`,
              filter: 'drop-shadow(0 1px 3px rgba(216,63,131,0.2))',
            }}
          >
            <path d={petal.shape} fill={petal.color} />
          </svg>
        </div>
      ))}
    </div>
  );
}
