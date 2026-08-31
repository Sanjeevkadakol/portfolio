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
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-cream overflow-hidden select-none">
      {/* 1. Sunlit Ambient Gradient Mesh (Eucalyptus & Warm Amber) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `
            radial-gradient(circle at 0% 12%, rgba(165, 198, 175, 0.42) 0%, transparent 45%),
            radial-gradient(circle at 100% 18%, rgba(248, 210, 130, 0.45) 0%, transparent 48%),
            radial-gradient(circle at 95% 75%, rgba(255, 238, 140, 0.35) 0%, transparent 45%),
            radial-gradient(circle at 5% 82%, rgba(180, 212, 190, 0.32) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 50%, rgba(255, 255, 235, 0.4) 0%, transparent 70%)
          `
        }}
      />

      {/* 2. Interactive Soft Cursor Halo */}
      {mousePos.x > 0 && (
        <div
          className="absolute w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle, rgba(255, 255, 100, 0.18) 0%, rgba(245, 220, 140, 0.08) 50%, transparent 70%)'
          }}
        />
      )}

      {/* 3. Engineering Geometric Dot Matrix Grid */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(38, 45, 41, 0.14) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 60%, transparent 100%)'
        }}
      />

      {/* 4. Organic Tactile Paper Grain Overlay via SVG Filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-multiply pointer-events-none">
        <filter id="parchment-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#parchment-grain)" />
      </svg>

      {/* 5. Scattered Electric Lemon & Ink Accent Micro-Dots */}
      <div className="absolute top-[14%] left-[10%] w-2.5 h-2.5 rounded-full bg-lemon border border-ink/40 shadow-sm" />
      <div className="absolute top-[22%] right-[12%] w-3 h-3 rounded-full bg-lemon border border-ink/40 shadow-sm" />
      <div className="absolute top-[48%] left-[5%] w-2 h-2 rounded-full bg-ink/20" />
      <div className="absolute top-[68%] right-[7%] w-2.5 h-2.5 rounded-full bg-lemon border border-ink/40 shadow-sm" />
      <div className="absolute top-[88%] left-[16%] w-2 h-2 rounded-full bg-ink/15" />
      <div className="absolute top-[36%] right-[25%] w-1.5 h-1.5 rounded-full bg-lemon border border-ink/40" />
    </div>
  )
}

export default Background
