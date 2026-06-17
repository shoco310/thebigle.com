import { useScrollReveal, useScrollRevealChildren } from '../hooks/useScrollReveal'

type Service = {
  num: string
  titleJp: string
  titleEn: string
  tagline: string
  items: string[]
  icon: React.ReactNode
}

const SERVICES: Service[] = [
  {
    num: '01',
    titleJp: 'Developer Relations',
    titleEn: 'DevRel',
    tagline: '技術と企業をつなぐ仕組みづくり。',
    items: [
      'Developer Relations 戦略設計',
      '技術イベント企画・運営',
      'コミュニティ施策の立案',
      '開発者向け情報発信',
      'カンファレンス支援',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    num: '02',
    titleJp: '技術広報',
    titleEn: 'Technical Branding',
    tagline: 'エンジニアに伝わる技術発信を支援。',
    items: [
      '技術ブログ企画・編集',
      'オウンドメディア立ち上げ',
      'エンジニアインタビュー制作',
      'SNS発信設計・支援',
      '技術コンテンツ制作',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    num: '03',
    titleJp: '採用広報',
    titleEn: 'Recruitment Branding',
    tagline: '採用につながる情報発信を設計。',
    items: [
      '採用広報戦略立案',
      '採用コンテンツ制作',
      '採用イベント企画',
      'SNS活用支援',
      'エンジニア採用伴走支援',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    num: '04',
    titleJp: 'コミュニティ運営',
    titleEn: 'Community Management',
    tagline: '継続するコミュニティを設計する。',
    items: [
      'Meetup 企画・運営',
      'アンバサダー施策',
      'KPI 設計・効果測定',
      'コミュニティ立ち上げ支援',
      'グローバルコミュニティ支援',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    num: '05',
    titleJp: 'イベント企画',
    titleEn: 'Event Planning',
    tagline: '人が集まり、つながる場をつくる。',
    items: [
      'カンファレンス企画・運営',
      '勉強会・ハッカソン企画',
      'オフラインイベント設計',
      'ワークショップ運営',
      '参加者体験設計',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    num: '06',
    titleJp: '講演・モデレーション',
    titleEn: 'Speaking / Moderation',
    tagline: '技術と人をつなぐ対話を届ける。',
    items: [
      '基調講演・セッション登壇',
      'パネルモデレーター',
      'パネル登壇',
      '社内勉強会・研修',
      'ワークショップ講師',
      'ハッカソン審査員',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
]

export default function Services() {
  const headingRef = useScrollReveal<HTMLDivElement>()
  const gridRef = useScrollRevealChildren<HTMLDivElement>('.reveal')

  return (
    <section id="services" className="section section--paper">
      <div className="container">
        <div ref={headingRef} className="reveal">
          <p className="section-label">Services</p>
          <h2 className="section-heading">
            企業の「伝える力」を、<br />
            <em>戦略から現場まで</em>支えます。
          </h2>
        </div>

        <div className="services__grid--v2" ref={gridRef}>
          {SERVICES.map((s, i) => (
            <article
              key={s.num}
              className={`service-card--v2 reveal reveal-delay-${(i % 2) + 1}`}
            >
              <div className="service-card__header">
                <div className="service-card__icon-v2">{s.icon}</div>
                <span className="service-card__num">{s.num}</span>
              </div>

              <div className="service-card__title-block">
                <h3 className="service-card__title-jp">{s.titleJp}</h3>
                <p className="service-card__title-en">{s.titleEn}</p>
              </div>

              <p className="service-card__tagline">{s.tagline}</p>

              <div className="service-card__divider" aria-hidden="true" />

              <ul className="service-card__items" aria-label={`${s.titleJp} 提供内容`}>
                {s.items.map((item) => (
                  <li key={item} className="service-card__item">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
