"use client"

import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    title: 'Core Languages',
    icon: '{ }',
    color: '#e63946',
    skills: [
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'TypeScript', level: 65 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚛',
    color: '#4ecdc4',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Ant Design', level: 80 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠',
    color: '#c9a84c',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'npm / yarn', level: 85 },
    ],
  },
  {
    title: 'Concepts',
    icon: '💡',
    color: '#a855f7',
    skills: [
      { name: 'Responsive Design', level: 90 },
      { name: 'REST APIs', level: 80 },
      { name: 'Component Architecture', level: 82 },
      { name: 'Performance Optimization', level: 70 },
    ],
  },
]

const tools = [
  { name: 'VS Code', icon: '🖥' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Postman', icon: '📮' },
  { name: 'Chrome DevTools', icon: '🔍' },
  { name: 'GitLab', icon: '🦊' },
  { name: 'Netlify', icon: '🌐' },
]

function SkillBar({ name, level, color, animate }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '8px',
      }}>
        <span style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{name}</span>
        <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color, fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{
        height: '4px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: color,
          borderRadius: '2px',
          width: animate ? `${level}%` : '0%',
          transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: `0 0 8px ${color}66`,
        }} />
      </div>
    </div>
  )
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease` }}>
      {children}
    </div>
  )
}

function CategoryCard({ category, delay }) {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => setAnimate(true), delay * 1000) ; obs.disconnect() } }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      style={{
        padding: '32px',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        background: 'var(--surface)',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = category.color}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{
          width: '40px', height: '40px',
          background: `${category.color}18`,
          border: `1px solid ${category.color}40`,
          borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px', fontFamily: 'var(--font-mono)',
          color: category.color,
        }}>
          {category.icon}
        </div>
        <h3 style={{ fontSize: '16px', fontWeight: 700 }}>{category.title}</h3>
      </div>
      {category.skills.map(skill => (
        <SkillBar key={skill.name} {...skill} color={category.color} animate={animate} />
      ))}
    </div>
  )
}

export default function SkillsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 40px 100px' }}>

        <FadeIn>
          <div className="section-label">Expertise</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '16px',
          }}>
            Skills &{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
              Technologies
            </span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '64px' }}>
            A breakdown of my technical skills and the tools I use to build modern, responsive web applications.
          </p>
        </FadeIn>

        {/* Skill category grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.title} category={cat} delay={i * 0.1} />
          ))}
        </div>

        {/* Tools section */}
        <FadeIn delay={0.2}>
          <div className="divider" style={{ marginBottom: '60px' }} />
          <div className="section-label" style={{ marginBottom: '8px' }}>Daily Workflow</div>
          <h2 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '32px' }}>
            Tools I Use
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
            {tools.map(({ name, icon }) => (
              <div
                key={name}
                className="card-hover"
                style={{
                  padding: '20px',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  background: 'var(--surface)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'default',
                }}
              >
                <span style={{ fontSize: '28px' }}>{icon}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center' }}>{name}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Learning section */}
        <FadeIn delay={0.1}>
          <div style={{
            marginTop: '80px',
            padding: '40px',
            border: '1px dashed var(--border)',
            borderRadius: '16px',
            background: 'rgba(230,57,70,0.03)',
          }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>Currently Learning</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Node.js & Express', 'PostgreSQL', 'Docker', 'Testing (Jest/RTL)', 'Three.js'].map(item => (
                <div key={item} style={{
                  padding: '8px 16px',
                  border: '1px dashed rgba(230,57,70,0.4)',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--accent)',
                }}>
                  + {item}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}