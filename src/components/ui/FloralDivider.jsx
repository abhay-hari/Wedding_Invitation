// ============================================================
// FloralDivider — decorative gold ornamental divider SVG
// ============================================================

export default function FloralDivider({ color = '#C6A46A', size = 'md', className = '' }) {
  const widths = { sm: 200, md: 320, lg: 480 };
  const w = widths[size] ?? 320;

  return (
    <div
      className={className}
      style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${w} 40`}
        width={w}
        height={40}
        style={{ maxWidth: '100%' }}
      >
        {/* Left line */}
        <line x1="10" y1="20" x2={w / 2 - 60} y2="20" stroke={color} strokeWidth="0.8" strokeOpacity="0.7" />
        {/* Right line */}
        <line x1={w / 2 + 60} y1="20" x2={w - 10} y2="20" stroke={color} strokeWidth="0.8" strokeOpacity="0.7" />

        {/* Left decorative dots */}
        <circle cx={w / 2 - 55} cy="20" r="2" fill={color} fillOpacity="0.6" />
        <circle cx={w / 2 - 45} cy="20" r="1.2" fill={color} fillOpacity="0.4" />

        {/* Right decorative dots */}
        <circle cx={w / 2 + 55} cy="20" r="2" fill={color} fillOpacity="0.6" />
        <circle cx={w / 2 + 45} cy="20" r="1.2" fill={color} fillOpacity="0.4" />

        {/* Center floral motif */}
        <g transform={`translate(${w / 2}, 20)`}>
          {/* Petals */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <ellipse
              key={i}
              cx={Math.cos((angle * Math.PI) / 180) * 10}
              cy={Math.sin((angle * Math.PI) / 180) * 10}
              rx="5"
              ry="2.5"
              transform={`rotate(${angle})`}
              fill={color}
              fillOpacity="0.5"
            />
          ))}
          {/* Center */}
          <circle cx="0" cy="0" r="3.5" fill={color} fillOpacity="0.8" />
          <circle cx="0" cy="0" r="1.5" fill="white" fillOpacity="0.9" />
        </g>

        {/* Small leaf left */}
        <path
          d={`M${w / 2 - 32},20 C${w / 2 - 24},14 ${w / 2 - 20},20 ${w / 2 - 24},24 C${w / 2 - 28},26 ${w / 2 - 36},24 ${w / 2 - 32},20 Z`}
          fill={color}
          fillOpacity="0.4"
        />
        {/* Small leaf right */}
        <path
          d={`M${w / 2 + 32},20 C${w / 2 + 24},14 ${w / 2 + 20},20 ${w / 2 + 24},24 C${w / 2 + 28},26 ${w / 2 + 36},24 ${w / 2 + 32},20 Z`}
          fill={color}
          fillOpacity="0.4"
        />
      </svg>
    </div>
  );
}
