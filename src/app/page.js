"use client"

import Link from 'next/link'
import { Button } from 'antd'
import { useState } from 'react'


export default function Home() {
  const [hoverProject, setHoverProject] = useState(false)
  const [hoverContact, setHoverContact] = useState(false)
  const hoverColor = '#FFC107'

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-900 px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
        Hi, I’m Htet Aung Shine
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 text-center mb-8">
        Front-End Developer | React & Next.js | Tailwind & Ant Design
      </p>
      <div className="flex space-x-4">
        <Link href="/projects">
          <Button
            size="large"
            type="primary"
            style={{
              backgroundColor: hoverProject ? '#1DA1F2' : 'black',
              borderColor: hoverProject ? '#1DA1F2' : 'black',
              color: 'white',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={() => setHoverProject(true)}
            onMouseLeave={() => setHoverProject(false)}
          >
            View Projects
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            size="large"
            style={{
              backgroundColor: hoverContact ? hoverColor : 'black',
              borderColor: hoverContact ? hoverColor : 'black',
              color: 'white',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={() => setHoverContact(true)}
            onMouseLeave={() => setHoverContact(false)}
          >
            Contact Me
          </Button>
        </Link>
      </div>
    </main>
  );
}
