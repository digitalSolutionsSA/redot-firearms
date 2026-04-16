import { Target, FileText, RefreshCw, BookOpen, ShoppingBag, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const SERVICES = [
  {
    icon: BookOpen,
    title: 'Firearm Training',
    subtitle: 'Unit Standards 1–4',
    desc: 'Comprehensive firearm training covering all unit standards from basic handgun proficiency to self-loading rifles. Our certified instructors guide you through safe handling, operation, and responsible ownership.',
    detail: ['Basic Handgun', 'Shotgun', 'Manually Operated Rifle', 'Self-loading Rifle'],
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600&q=80',
  },
  {
    icon: Target,
    title: 'Competency (Proficiency)',
    subtitle: 'SAPS Accredited',
    desc: 'PFTC-accredited competency assessments required for your SAPS firearm license. We ensure you meet all legal requirements and are fully prepared for your proficiency test.',
    detail: ['1–4 Firearm Types', 'SAPS Compliant', 'Professional Assessment', 'Same-day Results'],
    image: 'https://images.unsplash.com/photo-1608155686393-1aaf1f7ff4af?w=600&q=80',
  },
  {
    icon: FileText,
    title: 'License Applications',
    subtitle: 'New & Existing',
    desc: 'Full assistance with firearm license applications including motivations, documentation and submission. We handle the paperwork so you can focus on responsible ownership.',
    detail: ['New Applications', 'Firearm Motivations', 'Documentation Support', 'SAPS Submission'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
  {
    icon: RefreshCw,
    title: 'Renewals & Estates',
    subtitle: 'Hassle-Free',
    desc: 'Streamlined renewal processing for existing firearm licenses and estate firearm applications. We ensure continuity of your legal ownership with minimal disruption.',
    detail: ['Competency Renewals', 'License Renewals', 'Estate Firearms', 'Transfer Assistance'],
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&q=80',
  },
  {
    icon: ShoppingBag,
    title: 'Firearms & Accessories',
    subtitle: 'Online Store',
    desc: 'We stock a wide variety of firearms and accessories from some of the best brands on the market including Glock, CZ, Canik, Taurus, Heckler & Koch and more.',
    detail: ['Pistols & Handguns', 'Rifles & Shotguns', 'Cleaning Equipment', 'Safety Gear'],
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600&q=80',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const service = SERVICES[active]

  return (
    <section id="services" style={{
      background: 'var(--black)',
      padding: '120px 40px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: 'var(--red)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            What We Offer
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 0.95,
            color: 'var(--white)',
          }}>
            OUR<br /><span style={{ color: 'var(--red)' }}>SERVICES</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '40px', alignItems: 'start' }}>
          {/* Service tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {SERVICES.map((s, i) => {
              const Icon = s.icon
              const isActive = i === active
              return (
                <button key={s.title} onClick={() => setActive(i)} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px 24px',
                  background: isActive ? 'rgba(185,28,28,0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(185,28,28,0.4)' : '1px solid rgba(255,255,255,0.06)',
                  borderLeft: isActive ? '3px solid var(--red)' : '3px solid transparent',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.25s',
                }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.borderLeftColor = 'rgba(185,28,28,0.4)' }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.borderLeftColor = 'transparent' }}
                >
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: '2px',
                    background: isActive ? 'var(--red)' : 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 0.25s',
                  }}>
                    <Icon size={18} color={isActive ? 'white' : 'var(--gray)'} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '16px',
                      letterSpacing: '0.05em',
                      color: isActive ? 'var(--white)' : 'rgba(255,255,255,0.6)',
                      transition: 'color 0.25s',
                    }}>{s.title}</div>
                    <div style={{ fontSize: '12px', color: isActive ? 'var(--red)' : 'var(--gray)', marginTop: '2px' }}>{s.subtitle}</div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Detail panel */}
          <div key={active} style={{ animation: 'fadeIn 0.3s ease' }}>
            <div style={{
              position: 'relative',
              borderRadius: '4px',
              overflow: 'hidden',
              aspectRatio: '16/9',
              marginBottom: '32px',
            }}>
              <img src={service.image} alt={service.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) saturate(0.5)' }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)',
              }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '36px',
                  color: 'white',
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                }}>{service.title}</div>
                <div style={{ color: 'var(--red)', fontSize: '13px', marginTop: '4px', letterSpacing: '0.1em' }}>{service.subtitle}</div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '24px', fontWeight: 300 }}>
              {service.desc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '32px' }}>
              {service.detail.map(d => (
                <div key={d} style={{
                  padding: '10px 16px',
                  background: 'var(--dark)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '3px',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }} />
                  {d}
                </div>
              ))}
            </div>

            <a href="https://wa.me/+27663980024?text=I'm%20interested%20in%20your%20firearm%20services"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: 'var(--red)',
                color: 'white',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.gap = '14px')}
              onMouseLeave={e => (e.currentTarget.style.gap = '8px')}
            >
              Enquire Now <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
