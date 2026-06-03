"use client"

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRightOutlined } from '@ant-design/icons'

const services = [
  {
    icon: '🖥',
    title: 'Web Development',
    tagline: 'Fast, modern websites',
    description: 'Building responsive, high-performance websites and web applications using React.js and Next.js. From landing pages to complex multi-page apps.',
    features: ['Next.js & React apps', 'Responsive design', 'SEO optimization', 'Performance tuning'],
    color: '#e63946',
  },
  {
    icon: '🎨',
    title: 'UI Implementation',
    tagline: 'Pixel-perfect interfaces',
    description: 'Converting Figma designs and mockups into clean, interactive React components with precise attention to spacing, typography, and interaction states.',
    features: ['Figma to React', 'Design system integration', 'Component libraries', 'Micro-animations'],
    color: '#4ecdc4',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    tagline: 'Every screen, perfectly',
    description: 'Ensuring your website looks and works beautifully across all devices — from mobile phones to large desktop monitors.',
    features: ['Mobile-first approach', 'Cross-browser tested', 'Touch-friendly UX', 'Fluid layouts'],
    color: '#c9a84c',
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    tagline: 'Speed that matters',
    description: 'Auditing and optimizing existing websites for speed, Core Web Vitals, and overall user experience. Better performance means better conversions.',
    features: ['Core Web Vitals audit', 'Image optimization', 'Code splitting', 'Lazy loading'],
    color: '#a855f7',
  },
  {
    icon: '🔧',
    title: 'Bug Fixing & Maintenance',
    tagline: 'Keep it running smoothly',
    description: 'Diagnosing and fixing front-end bugs, updating dependencies, and maintaining existing React/Next.js codebases so they stay secure and performant.',
    features: ['Bug diagnosis & fixes', 'Dependency updates', 'Code refactoring', 'Ongoing maintenance'],
    color: '#22c55e',
  },
  {
    icon: '🚀',
    title: 'Landing Pages',
    tagline: 'First impressions that convert',
    description: 'Designing and building high-converting landing pages with compelling layouts, smooth animations, and clear call-to-actions tailored to your goals.',
    features: ['CTA-focused design', 'Fast delivery', 'Analytics-ready', 'A/B test friendly'],
    color: '#f59e0b',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'Understanding your goals, requirements, and target audience through detailed consultation.' },
  { step: '02', title: 'Planning', desc: 'Defining the project scope, tech stack, and timeline before a single line of code is written.' },
  { step: '03', title: 'Development', desc: 'Building your project iteratively with regular check-ins and transparent progress updates.' },
  { step: '04', title: 'Delivery', desc: 'Testing, polishing, and deploying the final product — ready for your users.' },
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

function ServiceCard({ service, delay }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '36px',
        border: `1px solid ${hovered ? service.color : 'var(--border)'}`,
        borderRadius: '16px',
        background: hovered ? `linear-gradient(135deg, ${service.color}0a 0%, transparent 100%)` : 'var(--surface)',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? `0 12px 40px ${service.color}18` : 'none',
        transition: 'all 0.4s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{
        fontSize: '32px',
        marginBottom: '20px',
        width: '56px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `${service.color}18`,
        borderRadius: '14px',
        border: `1px solid ${service.color}30`,
        transition: 'background 0.3s ease',
      }}>
        {service.icon}
      </div>

      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: service.color, marginBottom: '8px' }}>
        {service.tagline}
      </div>

      <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '12px' }}>
        {service.title}
      </h3>

      <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px', flex: 1 }}>
        {service.description}
      </p>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {service.features.map(f => (
          <li key={f} style={{
            fontSize: '13px',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-mono)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{ color: service.color, fontSize: '10px' }}>▸</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 40px 100px' }}>

        <FadeIn>
          <div className="section-label">What I Do</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '16px',
          }}>
            Services I{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
              Offer
            </span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '64px' }}>
            Whether you need a full website built from scratch or an existing codebase improved, I can help.
          </p>
        </FadeIn>

        {/* Service grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginBottom: '100px' }}>
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.05}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>

        {/* Process */}
        <FadeIn delay={0.1}>
          <div className="divider" style={{ marginBottom: '60px' }} />
          <div className="section-label" style={{ marginBottom: '8px' }}>How It Works</div>
          <h2 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '48px' }}>My Process</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px', marginBottom: '80px' }}>
            {process.map(({ step, title, desc }) => (
              <div key={step} style={{ position: 'relative' }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '72px',
                  fontStyle: 'italic',
                  color: 'rgba(230,57,70,0.08)',
                  lineHeight: 1,
                  marginBottom: '-16px',
                  userSelect: 'none',
                }}>
                  {step}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.1}>
          <div style={{
            padding: '60px',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            background: 'var(--surface)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(230,57,70,0.06) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <h2 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '12px' }}>
              Ready to work together?
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>
              Let's discuss your project and how I can help bring your ideas to life.
            </p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '15px', padding: '14px 32px' }}>
              Start a Project
              <ArrowRightOutlined />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}