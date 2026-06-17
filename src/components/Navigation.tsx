import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#services',  label: 'Services' },
  { href: '#speaking',  label: 'Speaking' },
  { href: '#works',     label: 'Works' },
  { href: '#about',     label: 'About' },
  { href: '#contact',   label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="メインナビゲーション">
        <a href="#" className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="nav__logo-mark" aria-hidden="true">TB</span>
          THE BIGLE
        </a>

        <div className="nav__links" role="list">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__link"
              role="listitem"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav__cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
          >
            お問い合わせ
          </a>
        </div>

        <button
          className={`nav__hamburger${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav__mobile${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav__mobile-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            tabIndex={menuOpen ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="nav__mobile-cta btn btn--primary"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
          tabIndex={menuOpen ? 0 : -1}
        >
          お問い合わせ
        </a>
      </div>
    </>
  )
}
