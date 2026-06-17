import { useState, FormEvent } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CATEGORIES = [
  'Developer Relations支援',
  '技術広報・採用広報支援',
  'コミュニティ運営',
  '講演・登壇',
  'イベント企画',
  '地域プロジェクト',
  'その他',
]

// Formspree のエンドポイントを設定してください
// https://formspree.io でフォームを作成し、エンドポイントURLを取得して設定します
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const infoRef = useScrollReveal<HTMLDivElement>()
  const formRef = useScrollReveal<HTMLDivElement>()

  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const data = new FormData(e.currentTarget)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        const json = await res.json().catch(() => ({}))
        const msg = (json as { error?: string }).error ?? '送信に失敗しました。しばらく後にお試しください。'
        setErrorMsg(msg)
        setStatus('error')
      }
    } catch {
      setErrorMsg('ネットワークエラーが発生しました。しばらく後にお試しください。')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section section--paper">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-heading">
          まずは、<em>お気軽に</em>ご相談を。
        </h2>

        <div className="contact__layout">
          <div ref={infoRef} className="reveal">
            <p className="contact__info-lead">
              ご相談・講演依頼・イベント企画のご相談はこちらから。
              お気軽にお問い合わせください。
            </p>

            <p className="contact__cats-label">お問い合わせカテゴリ</p>
            <ul className="contact__cats" aria-label="問い合わせカテゴリ一覧">
              {CATEGORIES.filter(c => c !== 'その他').map((cat) => (
                <li key={cat} className="contact__cat">{cat}</li>
              ))}
            </ul>
          </div>

          <div ref={formRef} className="reveal reveal-delay-2">
            {status === 'success' ? (
              <div className="form-success" role="status">
                <p className="form-success__icon" aria-hidden="true">✓</p>
                <p className="form-success__title">ありがとうございます</p>
                <p className="form-success__text">
                  お問い合わせを受け付けました。<br />
                  2〜3営業日以内にご返信いたします。
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      お名前<span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="山田 花子"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">
                      会社名
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="form-input"
                      placeholder="株式会社 Example"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    メールアドレス<span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="hanako@example.com"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="category">
                    お問い合わせカテゴリ<span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>カテゴリを選択してください</option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    メッセージ<span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="ご相談内容、ご要望などをお書きください。"
                    required
                    rows={6}
                  />
                </div>

                {status === 'error' && (
                  <p className="form-error-msg" role="alert">{errorMsg}</p>
                )}

                <div className="form-submit">
                  <p className="form-note">
                    2〜3営業日以内に<br />
                    ご返信いたします。
                  </p>
                  <button
                    type="submit"
                    className="btn btn--submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? '送信中...' : '送信する'}
                    {status !== 'sending' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
