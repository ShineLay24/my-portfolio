"use client"

import Link from 'next/link'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(200px, 30vw, 400px)',
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'rgba(230, 57, 70, 0.04)',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
        }}
      >
        404
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'none' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}>
          <span style={{ display: 'inline-block', width: '32px', height: '1px', background: 'var(--accent)' }} />
          Error 404
          <span style={{ display: 'inline-block', width: '32px', height: '1px', background: 'var(--accent)' }} />
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '16px',
          lineHeight: 1.1,
        }}>
          Page Not{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
            Found.
          </span>
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '400px', lineHeight: 1.7, margin: '0 auto 40px' }}>
          Looks like this page doesn't exist or was moved. Let's get you back somewhere real.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">
            <ArrowLeftOutlined />
            Back to Home
          </Link>
          <Link href="/projects" className="btn-outline">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  )
}