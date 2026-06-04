"use client"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '20px 30px 15px',
      }}
    >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text-dim)',
              letterSpacing: '0.05em',
            }}>
              © {year} Htet Aung Shine. All rights reserved.
            </p>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text-dim)',
              letterSpacing: '0.05em',
            }}>
              Built with Next.js & Tailwind CSS
            </p>
      </div>
    </footer>
  )
}