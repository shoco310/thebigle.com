import { useScrollReveal } from '../hooks/useScrollReveal'

type CareerStatus = 'current' | 'past'

type CareerItem = {
  role: string
  status: CareerStatus
  statusLabel: string
}

// ソーシャルメディアのURLをここで設定してください
const SOCIALS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/satoshoco',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/satoshoco',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/satoshoco',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/satoshoco',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
]

const CAREER: CareerItem[] = [
  {
    role: 'THE BIGLE株式会社 代表取締役',
    status: 'current',
    statusLabel: '現在',
  },
  {
    role: 'LINEヤフー株式会社（現）Developer Relations',
    status: 'past',
    statusLabel: '前職',
  },
  {
    role: 'OutSystems Japan / Korea Community Manager',
    status: 'current',
    statusLabel: '現在兼任',
  },
  {
    role: 'Women Techmakers Tokyo Organizer',
    status: 'current',
    statusLabel: '現在兼任',
  },
]

const ROLE_TAGS = [
  'Developer Relations',
  'Community Manager',
  '技術広報',
  '採用広報',
  'Event Organizer',
  'Speaker',
]

export default function About() {
  const photoRef = useScrollReveal<HTMLDivElement>()
  const contentRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About</p>

        <div className="about-v2__layout">
          {/* Photo column */}
          <div ref={photoRef} className="reveal">
            <div className="about-v2__photo">
              <img
                src="/images/shoko-sato.png"
                alt="佐藤祥子"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement | null
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="about-v2__photo-placeholder" style={{ display: 'none' }}>
                <span className="about-v2__photo-placeholder-initials">S.S.</span>
                <span className="about-v2__photo-placeholder-note">Photo</span>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div ref={contentRef} className="reveal reveal-delay-2">
            <h2 className="about-v2__name">佐藤 祥子</h2>
            <p className="about-v2__role">
              THE BIGLE株式会社 代表取締役 &nbsp;/&nbsp; Developer Relations · Community Manager
            </p>

            {/* Social links */}
            <div className="about-v2__socials" aria-label="ソーシャルメディア">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-v2__social-link"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <p className="about-v2__bio">
              LINE株式会社（現LINEヤフー）で技術広報を担当後、独立。
              Developer Relations、技術広報、採用広報、コミュニティ運営を中心に、
              企業と開発者、地域と人材をつなぐ活動を行っています。
            </p>
            <p className="about-v2__bio">
              現在はOutSystems Japan/Korea Community Manager、Women Techmakers Tokyo Organizerとしても活動し、国内外の開発者コミュニティを
              牽引しています。
            </p>

            <div className="about-v2__divider" aria-hidden="true" />

            <p className="about-v2__career-heading">Career Highlights</p>

            <ul className="about-v2__career" aria-label="キャリアハイライト">
              {CAREER.map((item) => (
                <li
                  key={item.role}
                  className={`about-v2__career-item${item.status === 'current' ? ' about-v2__career-item--current' : ''}`}
                >
                  <span className="about-v2__career-dot" aria-hidden="true" />
                  <span className="about-v2__career-role">{item.role}</span>
                  <span
                    className={`about-v2__career-status${item.status === 'past' ? ' about-v2__career-status--past' : ''}`}
                  >
                    {item.statusLabel}
                  </span>
                </li>
              ))}
            </ul>

            <div className="about-v2__roles-tags" role="list" aria-label="専門領域">
              {ROLE_TAGS.map((tag) => (
                <span key={tag} className="about-v2__role-tag" role="listitem">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
