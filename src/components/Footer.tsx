import { Mail, Phone, Facebook, Youtube } from 'lucide-react'

const LINKS = {
  Services: [
    { label: 'Firearm Training', href: '#services' },
    { label: 'Competency (Proficiency)', href: '#services' },
    { label: 'License Applications', href: '#services' },
    { label: 'Renewals & Estates', href: '#services' },
    { label: 'Firearms Shop', href: '#services' },
  ],
  Information: [
    { label: 'How & Where to Start', href: '#about' },
    { label: 'Steps to Ownership', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#contact' },
    { label: 'Membership', href: 'http://members.redotfs.co.za/register' },
  ],
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid rgba(185,28,28,0.3)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: 44,
                height: 44,
                background: 'var(--red)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5"/>
                  <line x1="12" y1="2" x2="12" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="12" y1="17" x2="12" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="2" y1="12" x2="7" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="17" y1="12" x2="22" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px', letterSpacing: '0.08em', lineHeight: 1 }}>REDOT</div>
                <div style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'var(--gray)' }}>FIREARM SOLUTIONS</div>
              </div>
            </div>

            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.8,
              marginBottom: '24px',
              fontWeight: 300,
              maxWidth: '280px',
            }}>
              The Vaal Triangle's most sought-after SAPS-accredited firearm training facility. Safe. Professional. Accredited.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              <a href="tel:+27161100149" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                <Phone size={13} color="var(--red)" /> 016 110 0149
              </a>
              <a href="mailto:info@redotfs.co.za" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                <Mail size={13} color="var(--red)" /> info@redotfs.co.za
              </a>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Youtube, href: 'https://youtube.com' },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{
                  width: 36,
                  height: 36,
                  background: 'var(--dark-2)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  color: 'rgba(255,255,255,0.5)',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(185,28,28,0.2)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(185,28,28,0.5)'; (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--dark-2)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '13px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '20px',
              }}>{heading}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map(link => (
                  <a key={link.label} href={link.href} style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--red)', flexShrink: 0, display: 'inline-block' }} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Accreditation */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '13px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '20px',
            }}>Accreditation</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { abbr: 'SAPS', full: 'South African Police Service' },
                { abbr: 'PFTC', full: 'Professional Firearm Trainers Council' },
              ].map(a => (
                <div key={a.abbr} style={{
                  padding: '14px 16px',
                  background: 'var(--dark-2)',
                  border: '1px solid rgba(185,28,28,0.2)',
                  borderLeft: '2px solid var(--red)',
                  borderRadius: '3px',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '18px', color: 'var(--red)', lineHeight: 1 }}>{a.abbr}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', lineHeight: 1.4 }}>{a.full}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Redot Firearm Solutions. All Rights Reserved.
          </span>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            Mon–Fri: 8:00 am – 5:00 pm
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
