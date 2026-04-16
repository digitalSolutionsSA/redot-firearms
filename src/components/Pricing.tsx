import { Check } from 'lucide-react'

const PACKAGES = [
  {
    name: 'Basic 1',
    tagline: 'Single Firearm',
    price: 800,
    businessPrice: 1000,
    items: [
      '1 firearm type of your choice',
      'SAPS proficiency training',
      'PFTC accredited assessment',
      'Certificate of competency',
    ],
    highlight: false,
  },
  {
    name: 'Basic 2',
    tagline: 'Two Firearm Types',
    price: 1400,
    businessPrice: 1600,
    items: [
      '2 firearm types of your choice',
      'SAPS proficiency training',
      'PFTC accredited assessment',
      'Certificate of competency',
    ],
    highlight: false,
  },
  {
    name: 'Basic 3',
    tagline: 'Three Firearm Types',
    price: 1750,
    businessPrice: 2300,
    items: [
      '3 firearm types of your choice',
      'SAPS proficiency training',
      'PFTC accredited assessment',
      'Certificate of competency',
    ],
    highlight: true,
  },
  {
    name: 'Basic 4',
    tagline: 'All Four Types',
    price: 2200,
    businessPrice: 2600,
    items: [
      'Basic Handgun',
      'Shotgun',
      'Manually Operated Rifle',
      'Self-loading Rifle',
      'SAPS proficiency training',
      'PFTC accredited assessment',
    ],
    highlight: false,
  },
]

const SAPS_FEES = [
  { label: 'Competency New', amount: 88 },
  { label: 'Competency Further', amount: 88 },
  { label: 'Renewal of Competency', amount: 88 },
  { label: 'New Firearm Application', amount: 168 },
  { label: 'Renewal of Firearm', amount: 88 },
  { label: 'Estate Firearm Application', amount: 168 },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="pricing-section"
      style={{
        background: 'var(--dark)',
        padding: 'clamp(64px, 8vw, 120px) clamp(16px, 4vw, 40px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(185,28,28,0.5), transparent)',
        }}
      />

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
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(32px, 5vw, 64px)',
          }}
        >
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
            Transparent Pricing
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
            COMPETENCY &<br />
            <span style={{ color: 'var(--red)' }}>TRAINING PRICES</span>
          </h2>

          <p
            style={{
              color: 'var(--gray)',
              margin: '16px auto 0',
              fontSize: 'clamp(14px, 2vw, 15px)',
              maxWidth: '560px',
              lineHeight: 1.7,
            }}
          >
            Professional firearm training for SAPS competency. All prices are
            for personal use unless stated otherwise.
          </p>
        </div>

        {/* Pricing cards */}
        <div
          className="pricing-section__grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 'clamp(14px, 2vw, 22px)',
            marginBottom: 'clamp(28px, 5vw, 64px)',
          }}
        >
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`pricing-section__card${
                pkg.highlight ? ' pricing-section__card--highlight' : ''
              }`}
              style={{
                background: pkg.highlight
                  ? 'linear-gradient(180deg, #c81414 0%, #b91c1c 100%)'
                  : 'linear-gradient(180deg, var(--dark-2) 0%, rgba(185,28,28,0.04) 100%)',
                border: pkg.highlight
                  ? '1px solid rgba(255,255,255,0.08)'
                  : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: 'clamp(22px, 3vw, 32px)',
                position: 'relative',
                transition:
                  'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                minWidth: 0,
                boxShadow: pkg.highlight
                  ? '0 14px 40px rgba(185,28,28,0.18)'
                  : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(185,28,28,0.35)'
                e.currentTarget.style.boxShadow = pkg.highlight
                  ? '0 18px 48px rgba(185,28,28,0.24)'
                  : '0 14px 30px rgba(0,0,0,0.22)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.boxShadow = pkg.highlight
                  ? '0 14px 40px rgba(185,28,28,0.18)'
                  : 'none'
              }}
            >
              {pkg.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '24px',
                    background: 'var(--white)',
                    color: 'var(--red)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '10px',
                    letterSpacing: '0.16em',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Most Popular
                </div>
              )}

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: 'clamp(30px, 4vw, 40px)',
                  letterSpacing: '0.02em',
                  color: 'var(--white)',
                  marginBottom: '6px',
                  lineHeight: 0.95,
                }}
              >
                {pkg.name}
              </div>

              <div
                style={{
                  fontSize: '12px',
                  color: pkg.highlight
                    ? 'rgba(255,255,255,0.82)'
                    : 'var(--gray)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '22px',
                  lineHeight: 1.5,
                }}
              >
                {pkg.tagline}
              </div>

              <div style={{ marginBottom: '6px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: 'clamp(44px, 8vw, 64px)',
                    color: 'var(--white)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.02em',
                    display: 'inline-block',
                  }}
                >
                  R{pkg.price.toLocaleString()}
                </span>
              </div>

              <div
                style={{
                  fontSize: '13px',
                  color: pkg.highlight
                    ? 'rgba(255,255,255,0.74)'
                    : 'var(--gray)',
                  marginBottom: '24px',
                  lineHeight: 1.5,
                }}
              >
                Business: R{pkg.businessPrice.toLocaleString()}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '26px',
                }}
              >
                {pkg.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      minWidth: 0,
                    }}
                  >
                    <Check
                      size={15}
                      color={pkg.highlight ? 'white' : 'var(--red)'}
                      style={{ marginTop: '3px', flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontSize: '14px',
                        color: pkg.highlight
                          ? 'rgba(255,255,255,0.88)'
                          : 'rgba(255,255,255,0.68)',
                        lineHeight: 1.65,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/+27663980024?text=I'd%20like%20to%20book%20training"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  minHeight: '46px',
                  textAlign: 'center',
                  padding: '12px 16px',
                  background: pkg.highlight
                    ? 'rgba(255,255,255,0.18)'
                    : 'rgba(185,28,28,0.14)',
                  border: `1px solid ${
                    pkg.highlight
                      ? 'rgba(255,255,255,0.35)'
                      : 'rgba(185,28,28,0.4)'
                  }`,
                  borderRadius: '10px',
                  color: 'white',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition:
                    'background 0.2s ease, transform 0.2s ease, border-color 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.background = pkg.highlight
                    ? 'rgba(255,255,255,0.24)'
                    : 'rgba(185,28,28,0.22)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = pkg.highlight
                    ? 'rgba(255,255,255,0.18)'
                    : 'rgba(185,28,28,0.14)'
                }}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* SAPS Fees */}
        <div
          style={{
            background: 'linear-gradient(180deg, var(--dark-2) 0%, rgba(185,28,28,0.04) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              background: 'rgba(185,28,28,0.12)',
              borderBottom: '1px solid rgba(185,28,28,0.25)',
              padding: 'clamp(18px, 3vw, 24px) clamp(18px, 4vw, 32px)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(22px, 3vw, 26px)',
                letterSpacing: '0.05em',
                color: 'var(--white)',
                lineHeight: 1,
                margin: 0,
              }}
            >
              SAPS Application Fees
            </h3>

            <p
              style={{
                fontSize: '13px',
                color: 'var(--gray)',
                marginTop: '6px',
                lineHeight: 1.6,
              }}
            >
              Payable at SAPS on the day of application. Exact amount in cash.
            </p>
          </div>

          <div
            className="pricing-section__fees-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            }}
          >
            {SAPS_FEES.map((fee, i) => (
              <div
                key={fee.label}
                className="pricing-section__fee-item"
                style={{
                  padding: 'clamp(16px, 3vw, 22px) clamp(18px, 4vw, 28px)',
                  borderRight:
                    i % 3 !== 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  borderBottom:
                    i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.5,
                  }}
                >
                  {fee.label}
                </span>

                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(20px, 3vw, 24px)',
                    color: 'var(--red)',
                    whiteSpace: 'nowrap',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  R{fee.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .pricing-section__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .pricing-section__fees-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .pricing-section__fees-grid .pricing-section__fee-item {
            border-right: 1px solid rgba(255,255,255,0.06) !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          }

          .pricing-section__fees-grid .pricing-section__fee-item:nth-child(2n) {
            border-right: none !important;
          }
        }

        @media (max-width: 640px) {
          .pricing-section__grid {
            grid-template-columns: 1fr !important;
          }

          .pricing-section__fees-grid {
            grid-template-columns: 1fr !important;
          }

          .pricing-section__fees-grid .pricing-section__fee-item {
            border-right: none !important;
          }

          .pricing-section__fees-grid .pricing-section__fee-item:last-child {
            border-bottom: none !important;
          }
        }

        @media (max-width: 480px) {
          .pricing-section__fee-item {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  )
}