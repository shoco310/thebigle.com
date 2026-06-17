import { useScrollReveal, useScrollRevealChildren } from '../hooks/useScrollReveal'

const TOPICS = [
  'Developer Relations',
  '技術広報',
  'コミュニティ運営',
  'エンジニア採用',
  'AI活用',
  '女性とテクノロジー',
  '地域DX',
  'キャリア形成',
]

const FORMATS = [
  '講演',
  'パネル登壇',
  'モデレーター',
  '社内勉強会',
  'ワークショップ',
  'ハッカソン審査員',
]

export default function Speaking() {
  const headingRef = useScrollReveal<HTMLDivElement>()
  const leadRef = useScrollReveal<HTMLParagraphElement>()
  const ctaRef = useScrollReveal<HTMLDivElement>()
  const topicsRef = useScrollRevealChildren<HTMLDivElement>('.reveal')
  const formatsRef = useScrollReveal<HTMLUListElement>()

  return (
    <section id="speaking" className="speaking-brand">
      <div className="container">
        <div ref={headingRef} className="reveal">
          <p className="section-label">Speaking</p>
          <h2 className="speaking-brand__heading">
            技術と人、<br />
            組織と地域をつなぐ。
          </h2>
        </div>

        <p className="speaking-brand__lead reveal" ref={leadRef}>
          Developer Relations、技術広報、コミュニティ運営、AI活用、地域DXなどをテーマに
          講演・モデレーションを行っています。企業向け勉強会・カンファレンス・メディアへの
          登壇など、幅広い形式でご対応可能です。
        </p>

        <div className="speaking-brand__cta" ref={ctaRef}>
          <button
            className="btn btn--cream"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            講演を依頼する
          </button>
          <button
            className="btn btn--ghost-light"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            プロフィールを見る
          </button>
        </div>

        <div className="speaking-brand__divider" aria-hidden="true" />

        <div className="speaking-brand__body">
          <div ref={topicsRef}>
            <p className="speaking-brand__col-label">主なテーマ</p>
            <div className="speaking-brand__topics">
              {TOPICS.map((t, i) => (
                <span
                  key={t}
                  className={`speaking-brand__topic reveal reveal-delay-${Math.min(i + 1, 6)}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="speaking-brand__col-label">対応形式</p>
            <ul className="speaking-brand__formats" ref={formatsRef}>
              {FORMATS.map((f) => (
                <li key={f} className="speaking-brand__format">
                  <span className="speaking-brand__format-dot" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
