"use client"

import Link from 'next/link'
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '48px 40px 32px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          {/* Brand + tagline */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '32px' }}>
            <div>
              <Link
                href="/"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  fontStyle: 'italic',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Htet Aung Shine
              </Link>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Front-End Developer
              </p>
            </div>

            {/* Nav links */}
            <nav style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/skills', label: 'Skills' },
                { href: '/experience', label: 'Experience' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-dim)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {[
                { href: 'https://github.com/ShineLay24', Icon: GithubOutlined },
                { href: 'https://www.linkedin.com/in/htet-aung-shine-290a26368', Icon: LinkedinOutlined },
                { href: 'mailto:shinelay2499@gmail.com', Icon: MailOutlined },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--text-muted)',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.background = 'rgba(230,57,70,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Bottom row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-dim)',
              letterSpacing: '0.05em',
            }}>
              © {year} Htet Aung Shine. All rights reserved.
            </p>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-dim)',
              letterSpacing: '0.05em',
            }}>
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}