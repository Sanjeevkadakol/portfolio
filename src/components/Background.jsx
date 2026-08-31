import { useEffect, useState } from 'react'

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#f7f6e3] overflow-hidden select-none">
      {/* 1. Rich Sunlit Amber & Eucalyptus Ambient Radial Washes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at -2% 15%, rgba(135, 175, 145, 0.55) 0%, rgba(160, 195, 170, 0.25) 30%, transparent 60%),
            radial-gradient(circle at 102% 18%, rgba(245, 185, 80, 0.55) 0%, rgba(255, 215, 120, 0.25) 30%, transparent 60%),
            radial-gradient(circle at 98% 70%, rgba(255, 210, 90, 0.45) 0%, rgba(255, 230, 140, 0.2) 35%, transparent 55%),
            radial-gradient(circle at 2% 80%, rgba(145, 185, 155, 0.45) 0%, rgba(175, 210, 185, 0.2) 35%, transparent 55%),
            radial-gradient(ellipse at 50% 50%, rgba(255, 255, 245, 0.6) 0%, transparent 80%)
          `
        }}
      />

      {/* 2. Top-Left & Top-Right Botanical Eucalyptus Silhouette Overlays */}
      <div className="absolute -top-6 -left-6 w-56 sm:w-80 md:w-96 h-72 sm:h-96 opacity-65 pointer-events-none transform -rotate-12">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#6b8c74]">
          <path d="M10 190 Q 60 120 120 40 Q 150 10 180 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          <ellipse cx="60" cy="130" rx="22" ry="14" transform="rotate(-35 60 130)" fill="currentColor" opacity="0.35" />
          <ellipse cx="40" cy="155" rx="20" ry="12" transform="rotate(25 40 155)" fill="currentColor" opacity="0.3" />
          <ellipse cx="90" cy="95" rx="24" ry="15" transform="rotate(-25 90 95)" fill="currentColor" opacity="0.4" />
          <ellipse cx="75" cy="115" rx="22" ry="13" transform="rotate(35 75 115)" fill="currentColor" opacity="0.35" />
          <ellipse cx="125" cy="55" rx="24" ry="14" transform="rotate(-20 125 55)" fill="currentColor" opacity="0.45" />
          <ellipse cx="110" cy="75" rx="22" ry="13" transform="rotate(40 110 75)" fill="currentColor" opacity="0.4" />
          <ellipse cx="155" cy="25" rx="20" ry="12" transform="rotate(-15 155 25)" fill="currentColor" opacity="0.5" />
          <ellipse cx="145" cy="40" rx="18" ry="11" transform="rotate(45 145 40)" fill="currentColor" opacity="0.45" />
        </svg>
      </div>

      <div className="absolute -top-6 -right-6 w-56 sm:w-80 md:w-96 h-72 sm:h-96 opacity-65 pointer-events-none transform rotate-12 scale-x-[-1]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#c2964a]">
          <path d="M10 190 Q 60 120 120 40 Q 150 10 180 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          <ellipse cx="60" cy="130" rx="22" ry="14" transform="rotate(-35 60 130)" fill="currentColor" opacity="0.35" />
          <ellipse cx="40" cy="155" rx="20" ry="12" transform="rotate(25 40 155)" fill="currentColor" opacity="0.3" />
          <ellipse cx="90" cy="95" rx="24" ry="15" transform="rotate(-25 90 95)" fill="currentColor" opacity="0.4" />
          <ellipse cx="75" cy="115" rx="22" ry="13" transform="rotate(35 75 115)" fill="currentColor" opacity="0.35" />
          <ellipse cx="125" cy="55" rx="24" ry="14" transform="rotate(-20 125 55)" fill="currentColor" opacity="0.45" />
          <ellipse cx="110" cy="75" rx="22" ry="13" transform="rotate(40 110 75)" fill="currentColor" opacity="0.4" />
          <ellipse cx="155" cy="25" rx="20" ry="12" transform="rotate(-15 155 25)" fill="currentColor" opacity="0.5" />
          <ellipse cx="145" cy="40" rx="18" ry="11" transform="rotate(45 145 40)" fill="currentColor" opacity="0.45" />
        </svg>
      </div>

      {/* 3. Clearly Visible Dot Matrix Grid (Airtree Engineering Matrix) */}
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(38, 45, 41, 0.22) 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* 4. Interactive Soft Cursor Halo */}
      {mousePos.x > 0 && (
        <div
          className="absolute w-[460px] h-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle, rgba(255, 255, 80, 0.24) 0%, rgba(245, 200, 100, 0.12) 45%, transparent 70%)'
          }}
        />
      )}

      {/* 5. Tactile Parchment Paper Grain SVG Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] mix-blend-multiply pointer-events-none">
        <filter id="parchment-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#parchment-grain)" />
      </svg>
    </div>
  )
}

export default Background
