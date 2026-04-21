import { CheckCircle2 } from 'lucide-react'

const FEATURES = [
  'Firearm Competency (Proficiency)',
  'Firearm Motivations and License Applications',
  'Firearm Renewals and Estates',
  'Firearm Training (all unit standards)',
]

const ACCREDITATIONS = [
  { abbr: 'SAPS', full: 'South African Police Service', desc: 'Fully accredited training provider' },
  { abbr: 'PFTC', full: 'Professional Firearm Trainers Council', desc: 'Registered member' },
]

export default function About() {
  return (
    <section id="about" style={{
      background: 'var(--dark)',
      padding: '120px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(185,28,28,0.5), transparent)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

        {/* Left: Visual */}
        <div style={{ position: 'relative' }}>
          {/* Main image block */}
          <div style={{
            position: 'relative',
            borderRadius: '4px',
            overflow: 'hidden',
            aspectRatio: '4/5',
            background: 'var(--dark-2)',
          }}>
            <img
              src="/training.jpg"
              alt="Professional firearm training at Redot Firearm Solutions"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(0.85) saturate(0.85)' }}
            />
            {/* Red overlay accent */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(127,29,29,0.7) 0%, transparent 50%)',
            }} />
          </div>

          {/* Floating badge */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            right: '-20px',
            background: 'var(--red)',
            padding: '24px',
            borderRadius: '4px',
            textAlign: 'center',
            minWidth: '140px',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '44px',
              lineHeight: 1,
              color: 'white',
            }}>20+</div>
            <div style={{
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.7)',
              textTransform: 'uppercase',
              marginTop: '4px',
            }}>Years Experience</div>
          </div>

          {/* Decorative corner bracket */}
          <div style={{
            position: 'absolute',
            top: '-12px',
            left: '-12px',
            width: 40,
            height: 40,
            borderTop: '2px solid var(--red)',
            borderLeft: '2px solid var(--red)',
          }} />
        </div>

        {/* Right: Content */}
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: 'var(--red)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            About Us
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 58px)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            marginBottom: '24px',
            color: 'var(--white)',
          }}>
            VAAL TRIANGLE'S<br />
            <span style={{ color: 'var(--red)' }}>PREMIER</span><br />
            FIREARM FACILITY
          </h2>

          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.8,
            marginBottom: '16px',
            fontWeight: 300,
          }}>
            Redot Firearm Solutions specialise in all your firearm needs and is the most sought-after
            firearm training facility in the Vaal Triangle. We are accredited by the South African
            Police Service (SAPS) and registered with the Professional Firearm Trainers Council (P.F.T.C.)
          </p>

          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.8,
            marginBottom: '40px',
            fontWeight: 300,
          }}>
            We assist with firearm license applications, firearm motivations for new applications and
            renewals, as well as estate firearms.
          </p>

          {/* Services list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
            {FEATURES.map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={18} color="var(--red)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)' }}>{f}</span>
              </div>
            ))}
          </div>

          {/* Accreditation blocks */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {ACCREDITATIONS.map(a => (
              <div key={a.abbr} style={{
                background: 'var(--dark-2)',
                border: '1px solid rgba(185,28,28,0.2)',
                borderRadius: '4px',
                padding: '20px',
                borderTop: '2px solid var(--red)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '28px',
                  color: 'var(--red)',
                  letterSpacing: '0.05em',
                }}>{a.abbr}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontWeight: 500, marginTop: '4px' }}>{a.full}</div>
                <div style={{ fontSize: '11px', color: 'var(--gray)', marginTop: '4px' }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}