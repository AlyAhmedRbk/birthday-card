/** Delicate SVG floral ornament for book corners */
export default function FloralCorner({ className = '' }) {
  return (
    <svg
      className={`floral-corner ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <path
        d="M8 56C8 40 18 32 28 28C20 24 14 14 16 8C28 12 34 22 36 30C42 22 54 18 56 10C58 24 48 34 40 38C50 42 56 52 56 56C40 52 30 46 28 38C24 46 14 52 8 56Z"
        fill="#E8A0B0"
        opacity="0.55"
      />
      <circle cx="30" cy="34" r="3" fill="#C9A96E" opacity="0.7" />
    </svg>
  )
}
