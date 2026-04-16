import { Mail } from 'lucide-react'

const TEAM = [
  {
    name: 'Marius',
    role: 'Firearm Instructor & Team Leader',
    email: 'marius@redotfs.co.za',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    speciality: 'Team Leader',
  },
  {
    name: 'Jevon',
    role: 'Firearm Instructor & Sales',
    email: 'gunshop@redotfs.co.za',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    speciality: 'Sales & Training',
  },
  {
    name: 'Nikita',
    role: 'Motivations Developer',
    email: 'motivation@redotfs.co.za',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    speciality: 'License Motivations',
  },
  {
    name: 'Belinda',
    role: 'Data Capturer (Training Dept.)',
    email: 'training@redotfs.co.za',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    speciality: 'Training Admin',
  },
]

export default function Team() {
  return (
    <section id="team" style={{
      background: 'var(--black)',
      padding: '120px 40px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: 'var(--red)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>Our Team</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 0.95,
              color: 'var(--white)',
            }}>
              MEET OUR<br /><span style={{ color: 'var(--red)' }}>EXPERTS</span>
            </h2>
          </div>
          <p style={{ maxWidth: '360px', color: 'var(--gray)', fontSize: '15px', lineHeight: 1.7, fontWeight: 300 }}>
            Our dedicated team of certified professionals are passionate about responsible firearm ownership and safety.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}>
          {TEAM.map((member, i) => (
            <div key={member.name} style={{
              position: 'relative',
              background: 'var(--dark)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '4px',
              overflow: 'hidden',
              transition: 'transform 0.3s, border-color 0.3s',
              animationDelay: `${i * 0.1}s`,
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(185,28,28,0.4)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)'
              }}
            >
              {/* Photo */}
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                <img src={member.image} alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) saturate(0.5)', transition: 'filter 0.3s, transform 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.85) saturate(0.7)'; (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.7) saturate(0.5)'; (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                />
                {/* Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 50%)',
                }} />

                {/* Speciality badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(185,28,28,0.9)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  fontSize: '10px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'white',
                  textTransform: 'uppercase',
                }}>{member.speciality}</div>
              </div>

              {/* Info */}
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '26px',
                  letterSpacing: '0.05em',
                  color: 'var(--white)',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}>{member.name}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px', lineHeight: 1.4 }}>{member.role}</p>
                <a href={`mailto:${member.email}`} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  color: 'var(--red)',
                  transition: 'gap 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.gap = '12px')}
                  onMouseLeave={e => (e.currentTarget.style.gap = '8px')}
                >
                  <Mail size={13} /> {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #team > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          #team > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
