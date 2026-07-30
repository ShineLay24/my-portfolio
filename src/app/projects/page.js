"use client"

import { useState, useEffect, useRef } from 'react'
import { GithubOutlined, LinkOutlined, ArrowRightOutlined } from '@ant-design/icons'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing my projects, skills, and experience. Built with Next.js, Tailwind CSS, and Ant Design with smooth animations and a modern dark UI.',
    tech: ['Next.js', 'Tailwind CSS', 'Ant Design', 'Lottie'],
    github: 'https://github.com/ShineLay24',
    live: '#',
    category: 'Web App',
    accent: '#e63946',
    gradient: 'linear-gradient(135deg, rgba(230,57,70,0.15) 0%, rgba(230,57,70,0.03) 100%)',
  },
  {
    id: 2,
    title: 'React Weather App',
    description: 'A real-time weather application using OpenWeatherMap API. Features current conditions, 5-day forecast, location search, and responsive design.',
    tech: ['React.js', 'REST API', 'CSS3', 'Axios'],
    github: 'https://github.com/ShineLay24',
    live: '#',
    category: 'Web App',
    accent: '#4ecdc4',
    gradient: 'linear-gradient(135deg, rgba(78,205,196,0.12) 0%, rgba(78,205,196,0.02) 100%)',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A Kanban-style task manager built with React and local storage. Supports drag-and-drop, priority labels, deadlines, and board management.',
    tech: ['React.js', 'DnD Kit', 'LocalStorage', 'Tailwind'],
    github: 'https://github.com/ShineLay24',
    live: '#',
    category: 'Productivity',
    accent: '#c9a84c',
    gradient: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.02) 100%)',
  },
  {
    id: 4,
    title: 'E-Commerce UI',
    description: 'A pixel-perfect front-end implementation of an e-commerce product page, featuring product gallery, size selector, cart functionality, and responsive layout.',
    tech: ['Next.js', 'Tailwind CSS', 'React Hooks', 'Framer Motion'],
    github: 'https://github.com/ShineLay24',
    live: '#',
    category: 'UI/UX',
    accent: '#a855f7',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(168,85,247,0.02) 100%)',
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A full-stack blog platform with markdown support, category filtering, and an admin dashboard. Features SEO optimization and static site generation with Next.js.',
    tech: ['Next.js', 'Markdown', 'SSG', 'Tailwind CSS'],
    github: 'https://github.com/ShineLay24',
    live: '#',
    category: 'Full Stack',
    accent: '#22c55e',
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.02) 100%)',
  },
  {
    id: 6,
    title: 'Component Library',
    description: 'A custom React component library with 20+ reusable UI components including buttons, modals, forms, and data displays. Built with TypeScript and Storybook.',
    tech: ['React.js', 'TypeScript', 'Storybook', 'CSS Modules'],
    github: 'https://github.com/ShineLay24',
    live: '#',
    category: 'Library',
    accent: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0.02) 100%)',
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ 
      opacity: visible ? 1 : 0, 
      transform: visible ? 'none' : 'translateY(24px)', 
      transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease` }}>
      {children}
    </div>
  )
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 40px 100px' }}>

        {/* Header */}
        <FadeIn>
          <div className="section-label">Portfolio</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '16px',
          }}>
            Selected{' '}
            <span style={{ 
              fontFamily: 'var(--font-serif)', 
              fontStyle: 'italic', 
              fontWeight: 400, 
              color: 'var(--accent)' }}>
              Projects
            </span>
          </h1>
          <p style={{ 
            fontSize: '17px', 
            color: 'var(--text-muted)', 
            maxWidth: '560px', 
            lineHeight: 1.7, 
            marginBottom: '48px' }}>
            A collection of projects that showcase my approach to front-end development, user-focused design, 
            and transforming ideas into functional and respoonsive web applications.
            </p>

          {/* Filter */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '64px' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '6px',
                  border: `1px solid ${filter === cat ? 'var(--accent)' : 'var(--border)'}`,
                  background: filter === cat ? 'rgba(230,57,70,0.1)' : 'transparent',
                  color: filter === cat ? 'var(--accent)' : 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {filtered.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div style={{
            marginTop: '80px',
            padding: '48px',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            background: 'var(--surface)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}>
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                Want to see more?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                Check out my GitHub for more projects.
              </p>
            </div>
            <a
              href="https://github.com/ShineLay24"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <GithubOutlined />
              View GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? project.accent : 'var(--border)'}`,
        borderRadius: '16px',
        background: hovered ? project.gradient : 'var(--surface)',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? `0 12px 40px ${project.accent}22` : 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Color bar */}
      <div style={{
        height: '4px',
        background: project.accent,
        width: hovered ? '100%' : '32px',
        transition: 'width 0.4s ease',
      }} />

      <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Category */}
        <div style={{ marginBottom: '16px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: project.accent,
              border: `1px solid ${project.accent}44`,
              padding: '3px 8px',
              borderRadius: '4px',
            }}
          >
            {project.category}
          </span>
        </div>

        <h3 style={{
          fontSize: '20px',
          fontWeight: 700,
          letterSpacing: '-0.01em',
          marginBottom: '12px',
          color: 'var(--text)',
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '14px',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          marginBottom: '24px',
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
          {project.tech.map(t => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-dim)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border)',
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ flex: 1, justifyContent: 'center', padding: '10px', fontSize: '13px' }}
          >
            <GithubOutlined />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ flex: 1, justifyContent: 'center', padding: '10px', fontSize: '13px', background: project.accent }}
          >
            <LinkOutlined />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}