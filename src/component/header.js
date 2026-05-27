"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { MessageOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/services', label: 'Services' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 40px' : '20px 40px',
          background: scrolled
            ? 'rgba(10, 10, 15, 0.95)'
            : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(42, 42, 56, 0.8)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '20px',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--text)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text)'}
        >
          Htet Aung Shine
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            gap: '32px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          className="hidden md:flex"
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  paddingBottom: '4px',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-muted)' }}
              >
                {label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'var(--accent)',
                  }} />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/contact"
            className="hidden md:inline-flex btn-primary"
            style={{ padding: '8px 20px', fontSize: '13px' }}
          >
            <MessageOutlined />
            Contact
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text)',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(10, 10, 15, 0.98)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          {navLinks.map(({ href, label }, i) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: isActive ? 'var(--accent)' : 'var(--text)',
                  textDecoration: 'none',
                  padding: '12px 32px',
                  animation: `fadeUp 0.4s ${i * 0.06}s ease both`,
                  transition: 'color 0.2s ease',
                }}
              >
                {label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="btn-primary"
            style={{ marginTop: '24px', animation: 'fadeUp 0.4s 0.4s ease both' }}
          >
            <MessageOutlined /> Contact Me
          </Link>
        </div>
      )}
    </>
  )
}