import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Services', href: '#services',
    sub: [
      { label: 'Firearm Training', href: '#services' },
      { label: 'Competency (Proficiency)', href: '#services' },
      { label: 'License Applications', href: '#services' },
      { label: 'Renewals & Estates', href: '#services' },
    ]
  },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

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
          <a href="mailto:info@redotfs.co.za" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.85)', transition: 'color 0.2s' }}>
            <Mail size={12} /> info@redotfs.co.za
          </a>
          <a href="tel:+27161100149" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.85)', transition: 'color 0.2s' }}>
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
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: 44,
              height: 44,
              background: 'var(--red)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
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
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '22px',
                letterSpacing: '0.08em',
                lineHeight: 1,
                color: 'var(--white)',
              }}>REDOT</div>
              <div style={{
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: 'var(--gray)',
                marginTop: '2px',
              }}>FIREARM SOLUTIONS</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <div key={link.label} style={{ position: 'relative' }}
                onMouseEnter={() => link.sub && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href={link.href} style={{
                  padding: '8px 14px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.75)',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  textTransform: 'uppercase',
                }}>
                  {link.label}
                  {link.sub && <ChevronDown size={12} />}
                </a>
                {link.sub && activeDropdown === link.label && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'var(--dark-2)',
                    border: '1px solid rgba(185,28,28,0.3)',
                    borderRadius: '4px',
                    minWidth: '220px',
                    overflow: 'hidden',
                    animation: 'fadeIn 0.15s ease',
                  }}>
                    {link.sub.map(sub => (
                      <a key={sub.label} href={sub.href} style={{
                        display: 'block',
                        padding: '10px 16px',
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.7)',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        transition: 'all 0.2s',
                      }}
                        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(185,28,28,0.15)'; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'; }}
                      >
                        {sub.label}
                      </a>
                    ))}
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
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--red-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(!open)} style={{ color: 'white', padding: '8px' }} className="mobile-menu-btn">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(10,10,10,0.98)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          animation: 'fadeIn 0.2s ease',
        }}>
          <button onClick={() => setOpen(false)} style={{
            position: 'absolute', top: 24, right: 24, color: 'white',
          }}>
            <X size={28} />
          </button>
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '36px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
              padding: '8px 24px',
              transition: 'color 0.2s',
            }}>
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/+27663980024" target="_blank" rel="noopener noreferrer"
            style={{
              marginTop: '16px',
              padding: '14px 36px',
              background: 'var(--red)',
              color: 'white',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '16px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '3px',
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
      `}</style>
    </>
  )
}
