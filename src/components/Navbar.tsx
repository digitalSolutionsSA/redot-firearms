import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, ChevronDown, ShoppingCart } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services', to: '/services',
    sub: [
      { label: 'Firearm Training', to: '/services#training' },
      { label: 'Competency (Proficiency)', to: '/services#competency' },
      { label: 'License Applications', to: '/services#licensing' },
      { label: 'Renewals & Estates', to: '/services#renewals' },
    ]
  },
  {
    label: 'Shop', to: '/shop',
    sub: [
      { label: 'Firearms', to: '/shop/firearms' },
      { label: 'Ammunition', to: '/shop/ammunition' },
      { label: 'Holsters & Accessories', to: '/shop/holsters-accessories' },
      { label: 'Safes & Storage', to: '/shop/safes-storage' },
      { label: 'Cleaning & Maintenance', to: '/shop/cleaning-maintenance' },
    ]
  },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location])

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <>
      {/* Top bar */}
      <div style={{
        background: 'var(--red-dark)',
        padding: '6px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '12px',
        fontFamily: 'var(--font-body)',
        letterSpacing: '0.05em',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.7)' }}>
          Welcome to Redot Firearm Solutions &nbsp;|&nbsp; Mon–Fri: 8:00 am – 5:00 pm
        </span>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="mailto:info@redotfs.co.za" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.85)' }}>
            <Mail size={12} /> info@redotfs.co.za
          </a>
          <a href="tel:+27161100149" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.85)' }}>
            <Phone size={12} /> 016 110 0149
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(185,28,28,0.4)' : '1px solid rgba(255,255,255,0.06)',
        transition: 'all 0.3s ease',
        padding: '0 40px',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{
              width: 44, height: 44,
              background: 'var(--red)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5"/>
                <line x1="12" y1="2" x2="12" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="12" y1="17" x2="12" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="2" y1="12" x2="7" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="17" y1="12" x2="22" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', letterSpacing: '0.08em', lineHeight: 1, color: 'var(--white)' }}>REDOT</div>
              <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--gray)', marginTop: '2px' }}>FIREARM SOLUTIONS</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <div key={link.label} style={{ position: 'relative' }}
                onMouseEnter={() => link.sub && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={link.to} style={{
                  padding: '8px 14px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  color: isActive(link.to) ? 'var(--red-light)' : link.label === 'Shop' ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.75)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  textTransform: 'uppercase' as const,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  borderBottom: isActive(link.to) ? '2px solid var(--red)' : '2px solid transparent',
                }}>
                  {link.label === 'Shop' && (
                    <ShoppingCart size={13} style={{ color: 'var(--red)', flexShrink: 0 }} />
                  )}
                  {link.label}
                  {link.sub && <ChevronDown size={12} />}
                </Link>

                {link.sub && activeDropdown === link.label && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'var(--dark-2)',
                    border: '1px solid rgba(185,28,28,0.3)',
                    borderRadius: '4px',
                    minWidth: link.label === 'Shop' ? '240px' : '220px',
                    overflow: 'hidden',
                    animation: 'fadeIn 0.15s ease',
                  }}>
                    {link.label === 'Shop' && (
                      <div style={{
                        padding: '8px 16px 6px',
                        fontSize: '10px',
                        letterSpacing: '0.18em',
                        color: 'var(--red)',
                        borderBottom: '1px solid rgba(185,28,28,0.2)',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        textTransform: 'uppercase' as const,
                      }}>
                        Browse Categories
                      </div>
                    )}
                    {link.sub.map(sub => (
                      <Link key={sub.label} to={sub.to} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        fontSize: '13px',
                        color: location.pathname === sub.to ? 'white' : 'rgba(255,255,255,0.7)',
                        background: location.pathname === sub.to ? 'rgba(185,28,28,0.2)' : 'transparent',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        transition: 'all 0.2s',
                        textDecoration: 'none',
                      }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(185,28,28,0.15)';
                          (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = location.pathname === sub.to ? 'rgba(185,28,28,0.2)' : 'transparent';
                          (e.currentTarget as HTMLAnchorElement).style.color = location.pathname === sub.to ? 'white' : 'rgba(255,255,255,0.7)';
                        }}
                      >
                        {link.label === 'Shop' && (
                          <span style={{
                            width: 5, height: 5,
                            borderRadius: '50%',
                            background: location.pathname === sub.to ? 'var(--red)' : 'rgba(185,28,28,0.4)',
                            flexShrink: 0,
                          }} />
                        )}
                        {sub.label}
                      </Link>
                    ))}
                    {link.label === 'Shop' && (
                      <Link to="/shop" style={{
                        display: 'block',
                        padding: '10px 16px',
                        fontSize: '12px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase' as const,
                        color: 'var(--red)',
                        background: 'rgba(185,28,28,0.08)',
                        transition: 'all 0.2s',
                        textAlign: 'center' as const,
                        textDecoration: 'none',
                      }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(185,28,28,0.2)';
                          (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(185,28,28,0.08)';
                          (e.currentTarget as HTMLAnchorElement).style.color = 'var(--red)';
                        }}
                      >
                        View All Products →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}

            <a href="https://wa.me/+27663980024?text=I'm%20interested%20in%20your%20firearm%20services"
              target="_blank" rel="noopener noreferrer"
              style={{
                marginLeft: '8px',
                padding: '10px 20px',
                background: 'var(--red)',
                color: 'white',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '3px',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--red-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(!open)} style={{ color: 'white', padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }} className="mobile-menu-btn">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(10,10,10,0.98)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          overflowY: 'auto',
          animation: 'fadeIn 0.2s ease',
        }}>
          <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: 24, right: 24, color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={28} />
          </button>
          {NAV_LINKS.map(link => (
            <Link key={link.label} to={link.to} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '32px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: isActive(link.to) ? 'var(--red)' : link.label === 'Shop' ? 'var(--red)' : 'rgba(255,255,255,0.8)',
              padding: '6px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
            }}>
              {link.label === 'Shop' && <ShoppingCart size={24} />}
              {link.label}
            </Link>
          ))}
          {/* Mobile shop sub-links */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginTop: '8px', borderTop: '1px solid rgba(185,28,28,0.3)', paddingTop: '16px', width: '100%' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--red)', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>SHOP CATEGORIES</div>
            {[
              { label: 'Firearms', to: '/shop/firearms' },
              { label: 'Ammunition', to: '/shop/ammunition' },
              { label: 'Holsters & Accessories', to: '/shop/holsters-accessories' },
              { label: 'Safes & Storage', to: '/shop/safes-storage' },
              { label: 'Cleaning & Maintenance', to: '/shop/cleaning-maintenance' },
            ].map(sub => (
              <Link key={sub.to} to={sub.to} onClick={() => setOpen(false)} style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.6)',
                padding: '4px 16px',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
              }}>{sub.label}</Link>
            ))}
          </div>
          <a href="https://wa.me/+27663980024" target="_blank" rel="noopener noreferrer"
            style={{
              marginTop: '16px', padding: '14px 36px',
              background: 'var(--red)', color: 'white',
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '16px', letterSpacing: '0.1em',
              textTransform: 'uppercase', borderRadius: '3px',
              textDecoration: 'none',
            }}>
            WhatsApp Us
          </a>
        </div>
      )}

      <style>{`
        .mobile-menu-btn { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  )
}