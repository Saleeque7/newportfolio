'use client'

import { useEffect, useMemo, useState } from 'react'
import { useScrollSpy } from '@/hooks/useScrollSpy'

type NavLink = { label: string; anchor: string }

type HeaderProps = {
  siteName: string
  logoUrl?: string | null
  navLinks: NavLink[]
}

const Header = ({ siteName, logoUrl, navLinks }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const ids = useMemo(() => navLinks.map((link) => link.anchor), [navLinks])
  const activeId = useScrollSpy(ids, 100)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock page scroll behind the open mobile menu, and close it if the
  // window grows past the mobile breakpoint (991px in devfolio.css).
  useEffect(() => {
    if (!isMobileNavOpen) return

    document.body.style.overflow = 'hidden'
    const desktop = window.matchMedia('(min-width: 992px)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMobileNavOpen(false)
    }
    desktop.addEventListener('change', handleChange)

    return () => {
      document.body.style.overflow = ''
      desktop.removeEventListener('change', handleChange)
    }
  }, [isMobileNavOpen])

  return (
    <header id="header" className={`fixed-top ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="#hero">{logoUrl ? <img src={logoUrl} alt={siteName} /> : siteName}</a>
        </h1>

        <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.anchor}>
                <a
                  className={`nav-link scrollto ${activeId === link.anchor ? 'active' : ''}`}
                  href={`#${link.anchor}`}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label={isMobileNavOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileNavOpen}
            aria-controls="navbar"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            <i className={`bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
