import { ClipboardList, GraduationCap, FileCheck, BadgeCheck } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Contact Us',
    desc: "Reach out via WhatsApp, phone or email. We'll walk you through the requirements and schedule your training.",
  },
  {
    num: '02',
    icon: GraduationCap,
    title: 'Complete Training',
    desc: 'Attend our PFTC-accredited competency training. Courses are thorough, professional and conducted by certified instructors.',
  },
  {
    num: '03',
    icon: FileCheck,
    title: 'License Application',
    desc: 'We assist you with your complete SAPS license application including motivations and all required documentation.',
  },
  {
    num: '04',
    icon: BadgeCheck,
    title: 'Legal Ownership',
    desc: 'Once approved, you become a legal, responsible firearm owner. We support you through renewals and beyond.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="how-it-works"
      style={{
        background: 'var(--dark-2)',
        padding: 'clamp(64px, 8vw, 120px) clamp(16px, 4vw, 40px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative number */}
      <div
        className="how-it-works__bg-number"
        style={{
          position: 'absolute',
          right: 'clamp(-30px, -3vw, -60px)',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(140px, 26vw, 400px)',
          lineHeight: 1,
          color: 'rgba(185,28,28,0.04)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        04
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          className="how-it-works__header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(32px, 5vw, 64px)',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                letterSpacing: '0.25em',
                color: 'var(--red)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Simple Process
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(34px, 7vw, 64px)',
                lineHeight: 0.95,
                color: 'var(--white)',
                margin: 0,
              }}
            >
              HOW IT <br />
              <span style={{ color: 'var(--red)' }}>WORKS</span>
            </h2>
          </div>

          <p
            style={{
              maxWidth: '420px',
              color: 'var(--gray)',
              fontSize: 'clamp(14px, 2vw, 15px)',
              lineHeight: 1.7,
              fontWeight: 300,
              margin: 0,
            }}
          >
            From first contact to legal ownership we make the process simple, professional and stress-free.
          </p>
        </div>

        {/* Steps grid */}
        <div
          className="how-it-works__grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 'clamp(14px, 2vw, 22px)',
          }}
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon

            return (
              <div
                key={step.num}
                className="how-it-works__card"
                style={{
                  padding: 'clamp(24px, 3vw, 36px)',
                  background: 'linear-gradient(180deg, var(--dark) 0%, rgba(185,28,28,0.05) 100%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '16px',
                  position: 'relative',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, background 0.25s ease',
                  minWidth: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'rgba(185,28,28,0.32)'
                  e.currentTarget.style.background =
                    'linear-gradient(180deg, rgba(24,24,24,1) 0%, rgba(185,28,28,0.10) 100%)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.background =
                    'linear-gradient(180deg, var(--dark) 0%, rgba(185,28,28,0.05) 100%)'
                }}
              >
                {/* Connector line / arrow for desktop */}
                {i < STEPS.length - 1 && (
                  <div
                    className="how-it-works__connector"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '-11px',
                      transform: 'translateY(-50%)',
                      width: '22px',
                      height: '22px',
                      borderRadius: '999px',
                      border: '1px solid rgba(185,28,28,0.35)',
                      background: 'var(--black)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5h6M5 2l3 3-3 3"
                        stroke="var(--red)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                {/* Step number */}
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: 'clamp(44px, 8vw, 64px)',
                    lineHeight: 1,
                    color: 'rgba(185,28,28,0.10)',
                    position: 'absolute',
                    top: '18px',
                    right: '18px',
                    letterSpacing: '-0.02em',
                    pointerEvents: 'none',
                  }}
                >
                  {step.num}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: 'rgba(185,28,28,0.12)',
                    border: '1px solid rgba(185,28,28,0.28)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Icon size={22} color="var(--red)" />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(24px, 3vw, 28px)',
                    letterSpacing: '0.02em',
                    color: 'var(--white)',
                    marginBottom: '12px',
                    lineHeight: 1,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: 'clamp(14px, 1.7vw, 15px)',
                    color: 'rgba(255,255,255,0.68)',
                    lineHeight: 1.75,
                    fontWeight: 300,
                    margin: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA strip */}
        <div
          className="how-it-works__cta"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'clamp(20px, 3vw, 28px) clamp(18px, 4vw, 40px)',
            background: 'rgba(185,28,28,0.08)',
            border: '1px solid rgba(185,28,28,0.2)',
            borderRadius: '16px',
            marginTop: 'clamp(18px, 3vw, 32px)',
            flexWrap: 'wrap',
            gap: '18px',
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(20px, 3vw, 24px)',
                color: 'var(--white)',
                lineHeight: 1.1,
              }}
            >
              Ready to start your journey?
            </div>

            <div
              style={{
                fontSize: 'clamp(13px, 1.8vw, 14px)',
                color: 'rgba(255,255,255,0.58)',
                marginTop: '6px',
                lineHeight: 1.7,
              }}
            >
              Mon–Fri: 8:00 am – 5:00 pm · info@redotfs.co.za · 016 110 0149
            </div>
          </div>

          <a
            href="https://wa.me/+27663980024?text=I'm%20ready%20to%20start%20my%20firearm%20training"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '14px 24px',
              background: 'var(--red)',
              color: 'white',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '10px',
              transition: 'background 0.2s ease, transform 0.2s ease',
              flexShrink: 0,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '46px',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--red-light)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--red)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Get Started
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .how-it-works__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .how-it-works__connector {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .how-it-works__header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .how-it-works__bg-number {
            right: -16px !important;
            top: auto !important;
            bottom: 24px !important;
            transform: none !important;
            font-size: clamp(100px, 28vw, 180px) !important;
          }

          .how-it-works__cta {
            align-items: flex-start !important;
          }
        }

        @media (max-width: 640px) {
          .how-it-works__grid {
            grid-template-columns: 1fr !important;
          }

          .how-it-works__cta a {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}