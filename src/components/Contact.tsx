import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react'

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '016 110 0149',
    href: 'tel:+27161100149',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@redotfs.co.za',
    href: 'mailto:info@redotfs.co.za',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri: 8:00 am – 5:00 pm',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Vaal Triangle, South Africa',
    href: null,
  },
]

const FAQ = [
  {
    q: 'How do I start the process of owning a firearm?',
    a: 'You need to complete a competency course first, then apply for a license at SAPS. We guide you through every step from training to submission.'
  },
  {
    q: 'How long does the training take?',
    a: 'Training typically takes one day per unit standard. We schedule sessions regularly — contact us via WhatsApp to find available dates.'
  },
  {
    q: 'What do I need to bring to training?',
    a: 'A valid South African ID or passport, comfortable clothing, and closed-toe shoes. We provide all necessary equipment during training.'
  },
  {
    q: 'Can you help with firearm motivations?',
    a: 'Yes! We specialise in writing detailed, compliant firearm motivations for both new applications and renewals to maximise your chances of approval.'
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{
      background: 'var(--dark)',
      padding: '120px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(185,28,28,0.5), transparent)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: 'var(--red)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>Get In Touch</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 0.95,
            color: 'var(--white)',
          }}>
            CONTACT<br /><span style={{ color: 'var(--red)' }}>& FAQ</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
          {/* Left: Contact info */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '22px',
              letterSpacing: '0.05em',
              color: 'var(--white)',
              marginBottom: '32px',
            }}>REACH US DIRECTLY</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px 24px',
                  background: 'var(--dark-2)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '4px',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(185,28,28,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
                >
                  <div style={{
                    width: 44,
                    height: 44,
                    background: 'rgba(185,28,28,0.12)',
                    border: '1px solid rgba(185,28,28,0.3)',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color="var(--red)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--gray)', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
                    {href ? (
                      <a href={href} style={{
                        fontSize: '16px',
                        color: 'var(--white)',
                        fontWeight: 500,
                        transition: 'color 0.2s',
                      }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--white)')}
                      >{value}</a>
                    ) : (
                      <span style={{ fontSize: '16px', color: 'var(--white)', fontWeight: 500 }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp button */}
            <a href="https://wa.me/+27663980024?text=I'm%20interested%20in%20your%20firearm%20services"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '18px',
                background: '#25D366',
                color: 'white',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '15px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '3px',
                transition: 'all 0.2s',
                width: '100%',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1da851')}
              onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          {/* Right: FAQ */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '22px',
              letterSpacing: '0.05em',
              color: 'var(--white)',
              marginBottom: '32px',
            }}>FREQUENTLY ASKED</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {FAQ.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details style={{
      background: 'var(--dark-2)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '4px',
      overflow: 'hidden',
    }}>
      <summary style={{
        padding: '18px 24px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: '15px',
        color: 'rgba(255,255,255,0.85)',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
        userSelect: 'none',
      }}>
        {q}
        <span style={{
          flexShrink: 0,
          width: 20,
          height: 20,
          borderRadius: '50%',
          border: '1px solid rgba(185,28,28,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          color: 'var(--red)',
          lineHeight: 1,
        }}>+</span>
      </summary>
      <div style={{
        padding: '0 24px 18px',
        fontSize: '14px',
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.7,
        fontWeight: 300,
      }}>{a}</div>
    </details>
  )
}
