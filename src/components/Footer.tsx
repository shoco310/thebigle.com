const YEAR = new Date().getFullYear()

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="footer__logo">THE BIGLE</p>
            <p className="footer__tagline">
              技術と人をつなぎ、<br />
              事業の前進を支える。
            </p>
          </div>

          <nav className="footer__nav" aria-label="フッターナビゲーション">
            <div className="footer__nav-col">
              <p className="footer__nav-heading">Services</p>
              <a href="#services" className="footer__nav-link" onClick={(e) => { e.preventDefault(); scrollTo('#services') }}>Developer Relations</a>
              <a href="#services" className="footer__nav-link" onClick={(e) => { e.preventDefault(); scrollTo('#services') }}>技術広報</a>
              <a href="#services" className="footer__nav-link" onClick={(e) => { e.preventDefault(); scrollTo('#services') }}>採用広報</a>
              <a href="#services" className="footer__nav-link" onClick={(e) => { e.preventDefault(); scrollTo('#services') }}>コミュニティ運営</a>
              <a href="#services" className="footer__nav-link" onClick={(e) => { e.preventDefault(); scrollTo('#services') }}>イベント企画</a>
            </div>
            <div className="footer__nav-col">
              <p className="footer__nav-heading">Company</p>
              <a href="#speaking" className="footer__nav-link" onClick={(e) => { e.preventDefault(); scrollTo('#speaking') }}>Speaking</a>
              <a href="#works" className="footer__nav-link" onClick={(e) => { e.preventDefault(); scrollTo('#works') }}>Works</a>
              <a href="#about" className="footer__nav-link" onClick={(e) => { e.preventDefault(); scrollTo('#about') }}>About</a>
              <a href="#contact" className="footer__nav-link" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}>Contact</a>
            </div>
            <div className="footer__nav-col">
              <p className="footer__nav-heading">Connect</p>
              <a
                href="mailto:info@thebigle.com"
                className="footer__nav-link"
              >
                @satoshoco
              </a>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {YEAR} THE BIGLE Inc. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">プライバシーポリシー</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
