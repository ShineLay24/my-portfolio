"use client"

import { useState } from 'react'
import { MailOutlined, GithubOutlined, LinkedinOutlined, FacebookOutlined, PhoneOutlined, SendOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { FaGitlab, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  { href: 'mailto:shinelay2499@gmail.com', Icon: MailOutlined, label: 'Email', value: 'shinelay2499@gmail.com', color: '#e63946' },
  { href: 'https://github.com/ShineLay24', Icon: GithubOutlined, label: 'GitHub', value: 'ShineLay24', color: '#f0eff4' },
  { href: 'https://www.linkedin.com/in/htet-aung-shine-290a26368', Icon: LinkedinOutlined, label: 'LinkedIn', value: 'Htet Aung Shine', color: '#0a66c2' },
  { href: 'https://wa.me/6590169754', Icon: FaWhatsapp, label: 'WhatsApp', value: '+65 9016 9754', color: '#25d366' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleSubmit = async () => {
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle = (field) => ({
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === field ? 'var(--accent)' : 'var(--border)'}`,
    borderRadius: '10px',
    color: 'var(--text)',
    fontSize: '14px',
    fontFamily: 'var(--font-display)',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: focused === field ? '0 0 0 3px rgba(230,57,70,0.1)' : 'none',
    resize: field === 'message' ? 'vertical' : 'none',
  })

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 40px 100px' }}>

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
          }}>
            Let's Build Something{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
              Together.
            </span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7 }}>
            Available for internships, freelance projects, and collaborations. I usually respond within 24 hours.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '64px' }} className="contact-grid">

          {/* Left: Info + social */}
          <div>
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>Available For</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Front-End Internships', 'Freelance Projects', 'UI/UX Collaboration', 'Open Source'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>Find Me On</h3>
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
                      background: 'var(--surface)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      group: true,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = color
                      e.currentTarget.style.background = `${color}0c`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.background = 'var(--surface)'
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `${color}18`,
                      color: color,
                      fontSize: '16px',
                      flexShrink: 0,
                    }}>
                      <Icon />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</div>
                      <div style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 500 }}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <div style={{
              padding: '40px',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              background: 'var(--surface)',
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '28px' }}>Send a Message</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name & Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <div>
                    <label style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('name')}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('email')}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    value={form.subject}
                    onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('subject')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('message')}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={sending || !form.name || !form.email || !form.message}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '16px',
                    fontSize: '15px',
                    opacity: (!form.name || !form.email || !form.message) ? 0.5 : 1,
                    cursor: (!form.name || !form.email || !form.message) ? 'not-allowed' : 'pointer',
                  }}
                >
                  {sent ? (
                    <><CheckCircleOutlined /> Message Sent!</>
                  ) : sending ? (
                    'Sending...'
                  ) : (
                    <><SendOutlined /> Send Message</>
                  )}
                </button>

                {sent && (
                  <p style={{ fontSize: '13px', color: '#22c55e', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
                    ✓ Thanks! I'll be in touch soon.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}