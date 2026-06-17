import { useScrollReveal, useScrollRevealChildren } from '../hooks/useScrollReveal'

type ColorVariant = 'purple' | 'coral' | 'green' | 'amber' | 'blue' | 'ink'

type Project = {
  name: string
  tag: string
  desc: string
  color: ColorVariant
  icon: React.ReactNode
}

const PROJECTS: Project[] = [
  {
    name: 'OutSystems User Group',
    tag: 'Community',
    desc: 'ローコード開発プラットフォームの日本・韓国コミュニティをゼロから構築。定期勉強会・年次カンファレンスを企画・運営。',
    color: 'purple',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    name: 'Developer Community',
    tag: 'Community',
    desc: '技術コミュニティのオーガナイザー・メンバーとして、開発者が学び・つながれるイベントを定期開催。',
    color: 'blue',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    name: 'Women in Tech',
    tag: 'D&I / Community',
    desc: 'Women Techmakers Tokyoのオーガナイザーとして、テクノロジー分野の女性エンジニアを支援する活動を推進。',
    color: 'amber',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    name: 'Event Production',
    tag: 'Event Planning',
    desc: '技術カンファレンス・勉強会・ハッカソンの企画・運営を、参加者体験を中心に設計。オンライン・オフラインに対応。',
    color: 'ink',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="m9 16 2 2 4-4"/>
      </svg>
    ),
  },
  {
    name: 'UBE NEXT',
    tag: 'Regional Innovation',
    desc: '宇部市を起点に、地方での挑戦・起業・移住を後押しするコミュニティプロジェクト。次世代の地域人材育成を目指す。',
    color: 'green',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    name: 'UBEハシゴ酒',
    tag: 'Regional Event',
    desc: '山口県宇部市で開催するまち飲みイベント。地域の人と人をつなぎ、ローカルなつながりと愛着を育む場をつくる。',
    color: 'coral',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

export default function Works() {
  const headingRef = useScrollReveal<HTMLDivElement>()
  const gridRef = useScrollRevealChildren<HTMLDivElement>('.reveal')

  return (
    <section id="works" className="section section--paper">
      <div className="container">
        <div ref={headingRef} className="reveal">
          <p className="section-label">Works &amp; Projects</p>
          <h2 className="section-heading">
            コミュニティと地域に、<br />
            <em>実践で貢献する</em>。
          </h2>
        </div>

        <div className="projects-grid" ref={gridRef}>
          {PROJECTS.map((p, i) => (
            <article key={p.name} className={`project-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className={`project-card__icon-wrap project-card__icon-wrap--${p.color}`}>
                {p.icon}
              </div>
              <p className="project-card__tag">{p.tag}</p>
              <h3 className="project-card__name">{p.name}</h3>
              <p className="project-card__desc">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
