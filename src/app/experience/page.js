"use client"

import { useRef, useState, useEffect } from 'react'
import { DownloadOutlined, CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons'

const experiences = [
  {
    id: 'november-house',
    role: 'IT Support',
    company: 'November House A Creative Company',
    period: '2026 – Present',
    location: 'Yangon, Myanmar',
    type: 'Full-time',
    description: 'Providing IT support for the agency, including managing IT equipment, troubleshooting hardware and software issues, supporting users, and maintaining IT-related operations.',
    skills: ['IT Support', 'Hardware Troubleshooting', 'Software Troubleshooting', 'IT Asset Management',],
    color: '#e63946',
    current: true,
  },
  {
    id: 'lolc',
    role: 'IT Support',
    company: 'LOLC Myanmar Micro Finance',
    period: '2026',
    location: 'Yangon, Myanmar',
    type: 'Full-time',
    description: 'Provided IT support for Head Office and branch users, including remote and on-site troubleshooting, printer and computer support, IT equipment inventory, network troubleshooting, and Windows installation.',
    skills: ['IT Support', 'Remote Support', 'Hardware Troubleshooting', 'Network Troubleshooting', 'IT Asset Management',],
    color: '#4ecdc4',
    current: false,
  },
  {
    id: 'aac-project-manager',
    role: 'Project Manager',
    company: 'Academies Australasia College Singapore (AAC)',
    period: 'Feb 2025 – Mar 2025',
    location: 'Singapore',
    type: 'Project',
    description: 'Led a team of 10 in organizing a campus-wide IT awareness event. Coordinated school announcements and promotional materials, and managed the Cybersecurity Awareness booth, engaging over 200 participants.',
    skills: ['Project Management', 'Team Coordination', 'Cybersecurity Awareness', 'Event Management',],
    color: '#c9a84c',
    current: false,
  },
  {
    id: 'ri-ats',
    role: 'Web Developer & Video Editor',
    company: 'RI Institute & ATS',
    period: '2023 – 2024',
    location: 'Yangon, Myanmar',
    type: 'Full-time',
    description: 'Collaborated with a senior developer to build and update static websites for RI Institute and ATS. Worked on UI/UX design, homepage layouts, and login/register pages, while also editing online course videos for the RI Institute e-learning platform.',
    skills: ['HTML/CSS', 'JavaScript', 'UI/UX', 'Web Development', 'Video Editing',],
    color: '#4ecdc4',
    current: false,
  },
  {
    id: 'alpha-x',
    role: 'Front-End Developer Intern',
    company: 'Alpha X Training Center',
    period: 'Jul 2023 – Aug 2023',
    location: 'Yangon, Myanmar',
    type: 'Internship',
    description: 'Worked on Track X, a static music listening platform. Built CMS tables and implemented content data, contributed to UI/UX improvements, and developed responsive React.js components under mentor guidance.',
    skills: ['React.js', 'JavaScript', 'CMS', 'UI/UX', 'Responsive Design',],
    color: '#e63946',
    current: false,
  },
]

const education = [
  {
    degree: 'Advanced Diploma in Information Technology',
    institution: 'Academies Australasia College (AAC)',
    period: '2024 – 2025',
    location: 'Singapore',
    gpa: 'Completed',
    color: '#e63946',
  },
  {
    degree: 'Diploma in Information Technology',
    institution: 'RI Institute',
    period: '2022 – 2023',
    location: 'Yangon, Myanmar',
    gpa: 'Completed',
    color: '#4ecdc4',
  },
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
                My professional experience, education background, and selected projects.
              </p>
            </div>
            <a
              href="/resume/Resume (Htet Aung Shine).pdf"
              download="Resume (Htet Aung Shine).pdf"
              className="btn-primary"
              style={{ alignSelf: 'flex-end', textDecoration: 'none' }}>
              <DownloadOutlined />
              Download CV
            </a>
          </div>
        </FadeIn>

        {/* Experience */}
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
            <FadeIn key={exp.id} delay={i * 0.1}>
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
      </div>
    </div>
  )
}