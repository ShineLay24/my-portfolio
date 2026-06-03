"use client"

import { useRef, useState, useEffect } from 'react'
import { DownloadOutlined, CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons'

const experiences = [
  {
    role: 'Front-End Developer Intern',
    company: 'Seeking Opportunities',
    period: '2025 – Present',
    location: 'Singapore',
    type: 'Internship',
    description: 'Actively seeking front-end development internship opportunities to apply and grow my React.js and Next.js skills in a professional environment.',
    skills: ['React.js', 'Next.js', 'Tailwind CSS'],
    color: '#e63946',
    current: true,
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2023 – Present',
    location: 'Remote',
    type: 'Freelance',
    description: 'Designing and developing responsive websites for small businesses and personal clients. Focused on clean UI implementation, performance, and maintainability.',
    skills: ['React.js', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'Client Communication'],
    color: '#4ecdc4',
    current: false,
  },
  {
    role: 'Personal Projects & Self-Study',
    company: 'Independent',
    period: '2022 – Present',
    location: 'Singapore',
    type: 'Self-Study',
    description: 'Built 10+ personal projects exploring React patterns, API integration, authentication, state management, and modern UI design systems. Continuously learning through tutorials, documentation, and open source.',
    skills: ['JavaScript', 'React.js', 'Next.js', 'REST APIs', 'Git'],
    color: '#c9a84c',
    current: false,
  },
]

const education = [
  {
    degree: 'Diploma in Infocomm & Digital Media',
    institution: 'Nanyang Polytechnic',
    period: '2023 – Present',
    location: 'Singapore',
    gpa: 'In Progress',
    color: '#e63946',
  },
  {
    degree: 'Secondary Education (O-Levels)',
    institution: 'Adventist International School',
    period: '2018 – 2022',
    location: 'Singapore',
    gpa: 'Completed',
    color: '#4ecdc4',
  },
]

const certifications = [
  { name: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2024', color: '#f59e0b' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2024', color: '#22c55e' },
  { name: 'React – The Complete Guide', issuer: 'Udemy', year: '2024', color: '#a855f7' },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease` }}>
      {children}
    </div>
  )
}

export default function ExperiencePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 40px 100px' }}>

        {/* Header */}
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', marginBottom: '64px' }}>
            <div>
              <div className="section-label">Career</div>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                marginBottom: '16px',
              }}>
                Experience &{' '}
                <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
                  Resume
                </span>
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7 }}>
                My professional journey, education background, and certifications.
              </p>
            </div>
            <button
              className="btn-primary"
              style={{ alignSelf: 'flex-end' }}
              onClick={() => alert('CV download coming soon!')}
            >
              <DownloadOutlined />
              Download CV
            </button>
          </div>
        </FadeIn>

        {/* Work experience timeline */}
        <FadeIn delay={0.1}>
          <div className="section-label" style={{ marginBottom: '8px' }}>Work & Projects</div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '40px' }}>Experience</h2>
        </FadeIn>

        <div style={{ position: 'relative', paddingLeft: '32px', marginBottom: '80px' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, var(--accent), var(--border), transparent)',
          }} />

          {experiences.map((exp, i) => (
            <FadeIn key={exp.role} delay={i * 0.1}>
              <div style={{ position: 'relative', marginBottom: '48px' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-38px',
                  top: '20px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: exp.color,
                  border: `2px solid var(--bg)`,
                  boxShadow: `0 0 0 1px ${exp.color}`,
                }} />

                <div
                  className="card-hover"
                  style={{
                    padding: '32px',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    background: 'var(--surface)',
                  }}
                >
                  {/* Top row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: exp.color,
                          border: `1px solid ${exp.color}44`,
                          padding: '2px 8px',
                          borderRadius: '4px',
                        }}>
                          {exp.type}
                        </span>
                        {exp.current && (
                          <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#22c55e',
                            border: '1px solid #22c55e44',
                            padding: '2px 8px',
                            borderRadius: '4px',
                          }}>
                            Active
                          </span>
                        )}
                      </div>
                      <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>{exp.role}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end', marginBottom: '4px' }}>
                        <CalendarOutlined /> {exp.period}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end' }}>
                        <EnvironmentOutlined /> {exp.location}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
                    {exp.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.skills.map(s => (
                      <span key={s} style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-dim)',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border)',
                        padding: '4px 10px',
                        borderRadius: '4px',
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education */}
        <FadeIn delay={0.1}>
          <div className="divider" style={{ marginBottom: '60px' }} />
          <div className="section-label" style={{ marginBottom: '8px' }}>Academic</div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '40px' }}>Education</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginBottom: '80px' }}>
            {education.map(edu => (
              <div key={edu.degree} className="card-hover" style={{
                padding: '32px',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                background: 'var(--surface)',
                borderTop: `3px solid ${edu.color}`,
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: edu.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                  {edu.period}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px' }}>{edu.degree}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '4px' }}>{edu.institution}</p>
                <p style={{ color: 'var(--text-dim)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>{edu.location} · {edu.gpa}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Certifications */}
        <FadeIn delay={0.1}>
          <div className="divider" style={{ marginBottom: '60px' }} />
          <div className="section-label" style={{ marginBottom: '8px' }}>Credentials</div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '40px' }}>Certifications</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {certifications.map(cert => (
              <div key={cert.name} className="card-hover" style={{
                padding: '20px 28px',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                background: 'var(--surface)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: cert.color }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '15px', marginBottom: '3px' }}>{cert.name}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{cert.issuer}</div>
                  </div>
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: cert.color,
                  border: `1px solid ${cert.color}44`,
                  padding: '4px 12px',
                  borderRadius: '4px',
                }}>
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}