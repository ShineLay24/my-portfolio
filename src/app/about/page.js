"use client"

import { useEffect, useRef, useState } from 'react'
import { UserOutlined, BookOutlined, RocketOutlined } from '@ant-design/icons'
import Link from 'next/link'

const techStack = [
  'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js',
  'HTML5 & CSS3', 'Tailwind CSS', 'Ant Design', 'Git & GitHub',
  'REST APIs', 'Responsive Design', 'Node.js (basics)', 'Figma',
]

const education = [
  {
    degree: 'Diploma in Infocomm & Digital Media',
    institution: 'Nanyang Polytechnic',
    period: '2023 – Present',
    description: 'Specializing in web development and front-end technologies, building projects with React, Next.js, and modern UI frameworks.',
  },
  {
    degree: 'Secondary Education',
    institution: 'Adventist International School',
    period: '2018 – 2022',
    description: 'Strong foundation in mathematics and sciences, with early introduction to programming and digital design.',
  },
]

const values = [
  {
    icon: '⚡',
    title: 'Performance-First',
    desc: 'I care deeply about building fast, optimized websites that load quickly and run smoothly on any device.',
  },
  {
    icon: '🎨',
    title: 'Design-Aware',
    desc: 'I bridge the gap between design and engineering — understanding both Figma mockups and production code.',
  },
  {
    icon: '🔨',
    title: 'Clean Code',
    desc: 'I write modular, reusable, and well-structured code that\'s maintainable and scalable for teams.',
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  )
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 40px 100px' }}>

        {/* Page header */}
        <FadeIn>
          <div className="section-label">About Me</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '24px',
          }}>
            Building the web,{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
              one pixel at a time.
            </span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-muted)',
            maxWidth: '640px',
            lineHeight: 1.7,
            marginBottom: '64px',
          }}>
            I'm a Front-End Developer based in Singapore, passionate about creating web experiences that are both functional and beautiful.
          </p>
        </FadeIn>

        {/* Two column: bio + values */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '100px' }}
          className="about-grid">
          <FadeIn delay={0.1}>
            <div>
              <div className="section-label" style={{ marginBottom: '20px' }}>
                <UserOutlined /> Who I Am
              </div>
              <div style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>
                  I'm <strong style={{ color: 'var(--text)' }}>Htet Aung Shine</strong>, a Front-End Web Developer and polytechnic student currently studying Infocomm & Digital Media at Nanyang Polytechnic in Singapore.
                </p>
                <p>
                  My journey into web development started from a genuine curiosity about how websites work — and grew into a passion for building fast, interactive, and visually polished user interfaces.
                </p>
                <p>
                  I specialize in <strong style={{ color: 'var(--text)' }}>React.js</strong> and <strong style={{ color: 'var(--text)' }}>Next.js</strong>, with a strong focus on responsive design, component architecture, and modern JavaScript patterns.
                </p>
                <p>
                  When I'm not coding, I'm exploring new design trends, contributing to open-source projects, or building personal projects to sharpen my skills.
                </p>
              </div>

              <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }}>
                <Link href="/experience" className="btn-primary" style={{ fontSize: '13px', padding: '10px 20px' }}>
                  View Resume
                </Link>
                <Link href="/contact" className="btn-outline" style={{ fontSize: '13px', padding: '10px 20px' }}>
                  Get In Touch
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {values.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="card-hover"
                  style={{
                    padding: '24px',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    background: 'var(--surface)',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ fontSize: '24px', lineHeight: 1 }}>{icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '15px', marginBottom: '6px' }}>{title}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Tech Stack */}
        <FadeIn delay={0.1}>
          <div style={{ marginBottom: '80px' }}>
            <div className="divider" style={{ marginBottom: '60px' }} />
            <div className="section-label" style={{ marginBottom: '8px' }}>
              <RocketOutlined /> Technologies I Work With
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '32px' }}>
              My Tech Stack
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {techStack.map((tech, i) => (
                <div
                  key={tech}
                  style={{
                    padding: '10px 18px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--surface)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    animationDelay: `${i * 0.05}s`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.background = 'rgba(230,57,70,0.06)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.background = 'var(--surface)'
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.1}>
          <div className="divider" style={{ marginBottom: '60px' }} />
          <div className="section-label" style={{ marginBottom: '8px' }}>
            <BookOutlined /> Education
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '40px' }}>
            Academic Background
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {education.map(({ degree, institution, period, description }, i) => (
              <div
                key={degree}
                className="card-hover"
                style={{
                  padding: '32px',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  background: 'var(--surface)',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span className="num-decoration" style={{ fontSize: '80px', right: '20px' }}>
                  0{i + 1}
                </span>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--accent)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}>
                    {period}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>{degree}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>{institution}</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-dim)', lineHeight: 1.7 }}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </div>
  )
}