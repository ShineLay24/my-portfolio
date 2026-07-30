"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Lottie from "lottie-react"
import devAnimation from "@/assets/developer-skills.json"
import { ArrowRightOutlined, DownloadOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const stats = [
  { value: '3+', label: 'Years Learning' },
  { value: '5+', label: 'Projects Built' },
  { value: '10+', label: 'Tech Stack' },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className="mesh-bg"
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 40px',
          width: '100%',
        }}
      >
        {/* Grid layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left: Text */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'none' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            {/* Label */}
            <div className="section-label" style={{ marginBottom: '24px' }}>
              Front-End Developer
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 5vw, 60px)',
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '24px',
              }}
            >
              Hi, I'm Htet Aung
              <br />
              <span
                style={{
                  color: 'var(--accent)',
                  fontSize: '75px',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  fontStyle: 'italic',
                }}
              >
                 Shine.
              </span>
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                maxWidth: '480px',
                marginBottom: '40px',
              }}
            >
              A front-end developer who enjoys turning ideas into interactive, responsive web experiences. 
              I build accessible and high-performance web applications with a focus on usability, 
              clean and maintainable code, and thoughtful design.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
              <Link href="/projects" className="btn-primary">
                View Projects
                <ArrowRightOutlined style={{ fontSize: '12px' }} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Me
              </Link>
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'flex',
                gap: '40px',
                paddingTop: '40px',
                borderTop: '1px solid var(--border)',
              }}
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '32px',
                      fontStyle: 'italic',
                      color: 'var(--accent)',
                      lineHeight: 1,
                      marginBottom: '4px',
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim)',
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Animation */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'none' : 'translateY(30px)',
              transition: 'opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease',
              position: 'relative',
            }}
          >
            {/* Glow behind animation */}
            <div
              style={{
                position: 'absolute',
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <Lottie
              animationData={devAnimation}
              loop={true}
              style={{ width: '480px', height: '480px', maxWidth: '100%' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
          .hero-grid > div:last-child lottie-player,
          .hero-grid > div:last-child > div:last-child {
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </div>
  )
}