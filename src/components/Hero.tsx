const TAGS = [
  'Developer Relations',
  '技術広報',
  '採用広報',
  'Community',
  'Event',
  'Speaking',
]

const BG_WORDS: {
  text: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  size: string
  rotate: number
}[] = [
  { text: 'Developer Relations', top: '10%',  left: '3%',   size: 'clamp(2rem, 5.5vw, 7rem)',  rotate: -7  },
  { text: 'Community',           top: '5%',   right: '4%',  size: 'clamp(1.5rem, 4vw, 5.5rem)', rotate: 5   },
  { text: 'Events',              top: '50%',  right: '1%',  size: 'clamp(1.2rem, 3vw, 4rem)',   rotate: -11 },
  { text: 'Speaking',            bottom: '22%', right: '7%', size: 'clamp(1.4rem, 3.5vw, 5rem)', rotate: 8  },
  { text: 'Regional Innovation', bottom: '12%', left: '2%',  size: 'clamp(1rem, 2.2vw, 3rem)',   rotate: -4  },
  { text: 'Tech Branding',       top: '35%',  left: '58%',  size: 'clamp(0.9rem, 1.8vw, 2.5rem)', rotate: 9 },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="hero__orb hero__orb--purple" />
        <div className="hero__orb hero__orb--coral" />

        {/* Background keywords */}
        <div className="hero__bg-words">
          {BG_WORDS.map((w) => (
            <span
              key={w.text}
              className="hero__bg-word"
              style={{
                top: w.top,
                bottom: w.bottom,
                left: w.left,
                right: w.right,
                fontSize: w.size,
                transform: `rotate(${w.rotate}deg)`,
              }}
            >
              {w.text}
            </span>
          ))}
        </div>
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow">Tokyo, Japan — THE BIGLE Inc.</p>

        <h1 className="hero__title">
          <span>THE</span>
          <span>BIGLE</span>
        </h1>

        <p className="hero__tagline">
          技術と人をつなぎ、<br />
          事業の前進を支える。
        </p>

        <p className="hero__lead">
          THE BIGLEは、Developer Relations、技術広報、採用広報、コミュニティ運営を通じて、
          企業と開発者、地域と人材をつなぐコミュニケーションパートナーです。
        </p>

        <div className="hero__tags" role="list" aria-label="サービス領域">
          {TAGS.map((tag) => (
            <span key={tag} className="hero__tag" role="listitem">{tag}</span>
          ))}
        </div>

        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => scrollTo('#services')}>
            Servicesを見る
          </button>
          <button className="btn btn--secondary" onClick={() => scrollTo('#speaking')}>
            講演・登壇を相談する
          </button>
          <button className="btn btn--ghost" onClick={() => scrollTo('#contact')}>
            お問い合わせ
          </button>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
