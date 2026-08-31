const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-putty overflow-hidden select-none">
      {/* Organic Subtle Putty Paper Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] mix-blend-multiply pointer-events-none">
        <filter id="putty-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#putty-grain)" />
      </svg>
    </div>
  )
}

export default Background
