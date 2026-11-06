const SIGNS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

/** Decorative zodiac wheel (pure SVG). Inherits colour from `currentColor`. */
export default function ZodiacWheel({ className = "", spin = true }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className={`${spin ? "animate-spin-slow" : ""} text-white ${className}`}
    >
      <circle cx="250" cy="250" r="245" strokeWidth="1.5" />
      <circle cx="250" cy="250" r="200" strokeWidth="1" />
      <circle cx="250" cy="250" r="150" strokeWidth="1" strokeDasharray="3 7" />
      {SIGNS.map((sign, i) => {
        const angle = i * 30;
        return (
          <g key={sign} transform={`rotate(${angle} 250 250)`}>
            <line x1="250" y1="5" x2="250" y2="50" strokeWidth="1" />
            <line x1="250" y1="50" x2="250" y2="100" strokeWidth="0.6" opacity="0.5" />
            <text
              x="250"
              y="40"
              textAnchor="middle"
              fontSize="30"
              fill="currentColor"
              stroke="none"
              transform="rotate(15 250 40)"
              style={{ transformOrigin: "250px 40px" }}
            >
              {sign}&#xFE0E;
            </text>
          </g>
        );
      })}
    </svg>
  );
}
