import { Link } from 'react-router-dom'
import { SHOP_CATEGORIES } from '../../data/shopData'
import { ArrowRight, Shield, Truck, CreditCard, Headphones } from 'lucide-react'

export default function ShopPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Hero */}
      <div style={{
        borderBottom: '1px solid rgba(185,28,28,0.2)',
        padding: '100px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 520,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/view-powerful-3d-gun.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
        }} />
        {/* Dark overlay — left heavy so text stays readable, image shows right */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.35) 100%)',
        }} />
        {/* Red accent glow */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(ellipse at 30% 60%, rgba(185,28,28,0.18) 0%, transparent 60%)',
        }} />
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(185,28,28,0.1)', border: '1px solid rgba(185,28,28,0.3)',
            borderRadius: 2, padding: '6px 14px', marginBottom: 24,
            fontSize: 11, letterSpacing: '0.2em', color: 'var(--red)',
            fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--red)', display: 'inline-block' }} />
            SAPS Licensed Dealer
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '0.05em',
            textTransform: 'uppercase', color: 'white', lineHeight: 1.05,
            marginBottom: 20,
          }}>
            THE REDOT <span style={{ color: 'var(--red)' }}>ARMOURY</span>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--gray)', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Firearms, accessories, and maintenance supplies — sourced from globally trusted manufacturers, sold by experts you can trust.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {SHOP_CATEGORIES.map(cat => (
              <Link key={cat.id} to={`/shop/${cat.slug}`} style={{
                padding: '10px 20px',
                border: '1px solid rgba(185,28,28,0.4)',
                borderRadius: 3,
                color: 'rgba(255,255,255,0.7)',
                fontSize: 13,
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(185,28,28,0.15)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                <span>{cat.icon}</span> {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div style={{
        background: 'rgba(185,28,28,0.06)',
        borderBottom: '1px solid rgba(185,28,28,0.15)',
        padding: '20px 40px',
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20, textAlign: 'center',
        }} className="trust-grid">
          {[
            { icon: <Shield size={20} />, title: 'SAPS Licensed', desc: 'Fully accredited dealer' },
            { icon: <Truck size={20} />, title: 'Secure Delivery', desc: 'Nationwide via licensed couriers' },
            { icon: <CreditCard size={20} />, title: 'Secure Payments', desc: 'EFT & card accepted' },
            { icon: <Headphones size={20} />, title: 'Expert Support', desc: 'Trained staff on hand' },
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
              <span style={{ color: 'var(--red)' }}>{t.icon}</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'white', letterSpacing: '0.05em' }}>{t.title}</div>
                <div style={{ fontSize: 12, color: 'var(--gray)' }}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category cards grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 40px' }}>
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '0.06em',
            textTransform: 'uppercase', color: 'white',
          }}>
            BROWSE <span style={{ color: 'var(--red)' }}>CATEGORIES</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 28,
        }}>
          {SHOP_CATEGORIES.map((cat) => (
            <Link key={cat.id} to={`/shop/${cat.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--dark-2)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 8,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(185,28,28,0.5)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 56px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                {/* Cover photo */}
                <div style={{
                  height: 200,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <img
                    src={cat.coverImage}
                    alt={cat.label}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {/* Dark gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)',
                  }} />
                  {/* Product count badge */}
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    background: 'rgba(0,0,0,0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    padding: '4px 10px',
                    borderRadius: 2,
                    fontSize: 10, letterSpacing: '0.18em',
                    color: 'rgba(255,255,255,0.7)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700, textTransform: 'uppercase',
                  }}>
                    {cat.products.length} PRODUCTS
                  </div>
                  {/* Category label overlaid on photo */}
                  <div style={{
                    position: 'absolute', bottom: 16, left: 18,
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontWeight: 900,
                      fontSize: 22, letterSpacing: '0.06em', textTransform: 'uppercase',
                      color: 'white',
                      textShadow: '0 2px 12px rgba(0,0,0,0.8)',
                    }}>{cat.label}</div>
                    <div style={{
                      fontSize: 11, color: 'rgba(255,255,255,0.65)',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      fontFamily: 'var(--font-display)', fontWeight: 600,
                      marginTop: 2,
                    }}>{cat.tagline}</div>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: '20px 22px 24px' }}>
                  <p style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.65, marginBottom: 18 }}>
                    {cat.description}
                  </p>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    color: 'var(--red)', fontFamily: 'var(--font-display)',
                    fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
                  }}>
                    Browse {cat.label} <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #7f1d1d, #450a0a)',
        padding: '64px 40px',
        textAlign: 'center',
      }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'white', marginBottom: 16,
        }}>
          NEED ADVICE ON WHICH FIREARM IS RIGHT FOR YOU?
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32, fontSize: 16 }}>
          Our certified instructors will help you choose the right tool for your needs.
        </p>
        <a href="https://wa.me/+27663980024?text=I%20need%20advice%20on%20purchasing%20a%20firearm"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-block', padding: '14px 36px',
            background: 'white', color: '#7f1d1d',
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase',
            borderRadius: 3, textDecoration: 'none',
          }}>
          Chat to an Expert →
        </a>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}