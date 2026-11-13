import { useState, useEffect } from 'react';

// ============================================================
// CountdownUnit — animated flip countdown unit
// ============================================================

export function CountdownUnit({ value, label }) {
  const [prev, setPrev] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlipping(true);
      const t = setTimeout(() => {
        setPrev(value);
        setFlipping(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  const display = String(value).padStart(2, '0');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
    }}>
      <div style={{
        position: 'relative',
        width: '72px',
        height: '80px',
        borderRadius: '12px',
        background: 'linear-gradient(145deg, rgba(252,232,239,0.95), rgba(245,183,203,0.8))',
        border: '1px solid rgba(198, 164, 106, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(216, 63, 131, 0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
        overflow: 'hidden',
      }}>
        {/* Top half shine */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '50%',
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '12px 12px 0 0',
        }} />
        {/* Center line */}
        <div style={{
          position: 'absolute',
          top: '50%', left: 0, right: 0,
          height: '1px',
          background: 'rgba(198, 164, 106, 0.3)',
        }} />
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 6vw, 36px)',
            fontWeight: '600',
            color: '#A92555',
            lineHeight: 1,
            animation: flipping ? 'flipIn 0.3s ease-out' : 'none',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {display}
        </span>
      </div>
      <span style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: '0.65rem',
        fontWeight: '500',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#89947A',
      }}>
        {label}
      </span>
    </div>
  );
}

// ============================================================
// useCountdown hook — IST timezone
// ============================================================
export function useCountdown(targetDate) {
  const getTimeLeft = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      done: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}
