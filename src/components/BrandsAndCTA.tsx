import { MessageCircle } from 'lucide-react'

const BRANDS = ['GLOCK', 'CZ', 'CANIK', 'TAURUS', 'H&K', 'BERETTA', 'WALTHER', 'SIG SAUER']

export default function BrandsAndCTA() {
  return (
    <>
      {/* Brands */}
      <div style={{
        background: 'var(--dark-2)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '28px 40px',
        overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '48px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <span style={{
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: 'var(--gray)',
            textTransform: 'uppercase',
            flexShrink: 0,
          }}>Featured Brands</span>
          {BRANDS.map(brand => (
            <span key={brand} style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '16px',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.2)',
              transition: 'color 0.2s',
              cursor: 'default',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
            >{brand}</span>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div style={{
        position: 'relative',
        background: 'var(--dark)',
        padding: '80px 40px',
        overflow: 'hidden',
      }}>
        {/* Background texture */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1551737823-dfc8d0f1c547?w=1800&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.1) saturate(0)',
          opacity: 0.5,
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(127,29,29,0.4), rgba(10,10,10,0.8))',
        }} />

        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div style={{
            width: 64,
            height: 64,
            background: 'rgba(37,211,102,0.15)',
            border: '1px solid rgba(37,211,102,0.4)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <MessageCircle size={28} color="#25D366" />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: 0.95,
            color: 'var(--white)',
            marginBottom: '16px',
          }}>TALK TO US!</h2>

          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '36px',
            fontWeight: 300,
          }}>
            Click the button below to start a WhatsApp conversation with our team
          </p>

          <a href="https://wa.me/+27663980024?text=I'm%20interested%20in%20your%20firearm%20services"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 40px',
              background: '#25D366',
              color: 'white',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '16px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '3px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#1da851'; (e.currentTarget as HTMLAnchorElement).style.gap = '16px'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#25D366'; (e.currentTarget as HTMLAnchorElement).style.gap = '10px'; }}
          >
            <MessageCircle size={20} /> WhatsApp Us
          </a>
        </div>
      </div>
    </>
  )
}
