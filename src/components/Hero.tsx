import { useEffect, useRef } from 'react'
import { ArrowRight, Shield, Award, Users } from 'lucide-react'

const STATS = [
  { icon: Shield, value: 'SAPS', label: 'Accredited' },
  { icon: Award, value: 'PFTC', label: 'Registered' },
  { icon: Users, value: '1000+', label: 'Students Trained' },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e
      const target = currentTarget as HTMLElement
      const { left, top, width, height } = target.getBoundingClientRect()
      const x = ((clientX - left) / width - 0.5) * 20
      const y = ((clientY - top) / height - 0.5) * -20
      el.style.transform = `perspective(1200px) rotateX(${y * 0.15}deg) rotateY(${x * 0.15}deg)`
    }
    const reset = () => { el.style.transform = 'perspective(1200px) rotateX(0) rotateY(0)' }
    document.addEventListener('mousemove', handler)
    document.addEventListener('mouseleave', reset)
    return () => {
      document.removeEventListener('mousemove', handler)
      document.removeEventListener('mouseleave', reset)
    }
  }, [])

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--black)',
    }}>
      {/* Background image with overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=1800&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        filter: 'brightness(0.25) saturate(0.4)',
      }} />

      {/* Red gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(127,29,29,0.5) 0%, rgba(0,0,0,0) 60%)',
      }} />

      {/* Crosshair decorative element */}
      <div style={{
        position: 'absolute',
        right: '8%',
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0.06,
        pointerEvents: 'none',
      }}>
        <svg width="500" height="500" viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="240" stroke="white" strokeWidth="1" fill="none"/>
          <circle cx="250" cy="250" r="160" stroke="white" strokeWidth="1" fill="none"/>
          <circle cx="250" cy="250" r="80" stroke="white" strokeWidth="1" fill="none"/>
          <circle cx="250" cy="250" r="20" stroke="white" strokeWidth="2" fill="none"/>
          <line x1="0" y1="250" x2="210" y2="250" stroke="white" strokeWidth="1"/>
          <line x1="290" y1="250" x2="500" y2="250" stroke="white" strokeWidth="1"/>
          <line x1="250" y1="0" x2="250" y2="210" stroke="white" strokeWidth="1"/>
          <line x1="250" y1="290" x2="250" y2="500" stroke="white" strokeWidth="1"/>
        </svg>
      </div>

      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div ref={ref} style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 1280,
        margin: '0 auto',
        padding: '120px 40px 80px',
        transition: 'transform 0.1s ease',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(185,28,28,0.15)',
          border: '1px solid rgba(185,28,28,0.4)',
          borderRadius: '2px',
          padding: '6px 14px',
          marginBottom: '28px',
          animation: 'fadeIn 0.6s ease',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--red)', animation: 'pulse-red 2s infinite' }} />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.7)',
            textTransform: 'uppercase',
          }}>
            Safe · Professional · Accredited
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(52px, 9vw, 110px)',
          lineHeight: 0.9,
          letterSpacing: '-0.01em',
          marginBottom: '28px',
          animation: 'fadeUp 0.7s ease 0.1s both',
        }}>
          <span style={{ display: 'block', color: 'var(--white)' }}>FIREARM</span>
          <span style={{ display: 'block', color: 'var(--red)' }}>TRAINING</span>
          <span style={{ display: 'block', color: 'var(--white)', opacity: 0.4, fontSize: '70%' }}>& SOLUTIONS</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: '18px',
          color: 'rgba(255,255,255,0.6)',
          maxWidth: '520px',
          lineHeight: 1.7,
          marginBottom: '40px',
          animation: 'fadeUp 0.7s ease 0.2s both',
          fontWeight: 300,
        }}>
          The Vaal Triangle's most sought-after SAPS-accredited firearm training facility.
          Certified instructors. Proven results.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          animation: 'fadeUp 0.7s ease 0.3s both',
        }}>
          <a href="#services" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 32px',
            background: 'var(--red)',
            color: 'white',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '15px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            borderRadius: '2px',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--red-light)'; (e.currentTarget as HTMLAnchorElement).style.gap = '14px'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--red)'; (e.currentTarget as HTMLAnchorElement).style.gap = '8px'; }}
          >
            Our Services <ArrowRight size={16} />
          </a>
          <a href="#pricing" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '16px 32px',
            background: 'transparent',
            color: 'white',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '15px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            borderRadius: '2px',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.6)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.2)'; }}
          >
            View Pricing
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '40px',
          marginTop: '64px',
          flexWrap: 'wrap',
          animation: 'fadeUp 0.7s ease 0.4s both',
        }}>
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: 40,
                height: 40,
                border: '1px solid rgba(185,28,28,0.4)',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(185,28,28,0.1)',
              }}>
                <Icon size={18} color="var(--red)" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', letterSpacing: '0.05em', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: '12px', color: 'var(--gray)', letterSpacing: '0.08em', marginTop: '2px' }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to top, var(--black), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        animation: 'fadeIn 1s ease 1s both',
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: 1,
          height: 40,
          background: 'linear-gradient(to bottom, rgba(185,28,28,0.8), transparent)',
        }} />
      </div>
    </section>
  )
}
