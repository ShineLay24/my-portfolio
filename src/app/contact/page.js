"use client"

import { MailOutlined, GithubOutlined, LinkedinOutlined, FacebookOutlined, PhoneOutlined } from '@ant-design/icons'
import { FaWhatsapp, FaInstagram, FaTelegram } from 'react-icons/fa'

const socialLinks = [
  { href: 'mailto:shinelay2499@gmail.com', Icon: MailOutlined, label: 'Email', value: 'shinelay2499@gmail.com', color: '#e63946' },
  { href: 'https://github.com/ShineLay24', Icon: GithubOutlined, label: 'GitHub', value: 'ShineLay24', color: '#1a191b' },
  { href: 'https://www.linkedin.com/in/htet-aung-shine-290a26368', Icon: LinkedinOutlined, label: 'LinkedIn', value: 'Htet Aung Shine', color: '#0a66c2' },
  { href: 'https://wa.me/6590169754', Icon: FaWhatsapp, label: 'WhatsApp', value: '+65 9016 9754', color: '#25d366' },
  { href: 'https://www.facebook.com/share/1C7F3dexo2/?mibextid=wwXIfr', Icon: FacebookOutlined, label: 'Facebook', value: 'Htet Aung Shine', color: '#1877f2' },
  { href: 'https://www.instagram.com/shine_layyy?stkn=MXJoZm1jbWNjZTc0cQ%3D%3D&utm_source=qr', Icon: FaInstagram, label: 'Instagram', value: '@shine_layyy', color: '#e1306c' },
  { href: 'https://t.me/htetaungshine249', Icon: FaTelegram, label: 'Telegram', value: '@shine_layyy', color: '#0088cc' },
]

const availability = [
  'Freelance Projects',
  'UI/UX Collaboration',
  'Full-Time Opportunities',
  'Part-Time / Contract Work',
  'Website Redesigns',
]

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 40px 100px' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div className="section-label">Get In Touch</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '16px',
            whiteSpace: 'nowrap',
          }}>
            Let's Build Something{' '} <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
              Together.
            </span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.7}}>
            I'm currently open to new opportunities. Feel free to reach out through any of the platforms below — I usually respond within 24 hours.
          </p>
        </div>

        {/* Available For */}
        <div style={{
          padding: '32px',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          background: 'var(--surface)',
          marginBottom: '24px',
        }}>
          <h3 style={{
            fontSize: '13px',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)',
            marginBottom: '20px',
          }}>
            Available For
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {availability.map(item => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  flexShrink: 0,
                }} />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Find Me On */}
        <div style={{
          padding: '32px',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          background: 'var(--surface)',
        }}>
          <h3 style={{
            fontSize: '13px',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)',
            marginBottom: '20px',
          }}>
            Find Me On
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {socialLinks.map(({ href, Icon, label, value, color }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  background: 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color
                  e.currentTarget.style.background = `${color}0c`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `${color}18`,
                  color: color,
                  fontSize: '18px',
                  flexShrink: 0,
                }}>
                  <Icon />
                </div>
                <div>
                  <div style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-dim)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '3px',
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'var(--text)',
                    fontWeight: 500,
                  }}>
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}