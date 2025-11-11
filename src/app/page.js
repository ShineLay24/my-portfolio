"use client"

import Link from 'next/link'
import { Button } from 'antd'
import { useState } from 'react'
import Image from 'next/image'
import Lottie from "lottie-react"
import devAnimation from "../assets/developer-skills.json"

export default function Home() {
  const [hoverProject, setHoverProject] = useState(false)
  const [hoverContact, setHoverContact] = useState(false)

  const buttonStyle = {
    width: '150px',
    height: '50px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  }

  return (
    <main className="flex flex-col md:flex-row justify-between items-center min-h-screen bg-blue-100 text-gray-900 px-8 md:px-20">

      {/* LEFT SIDE – TEXT SECTION  */}
      <div className="flex flex-col justify-center md:w-1/2 space-y-6">
        <p className="text-lg text-gray-600 text-left">
          Turning ideas into interactive web experiences.
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-left">
          Hi, I’m <span className="text-red-500">Shine.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
          A passionate <span className="font-semibold">Front-End Web Developer</span>
          experienced in building responsive and dynamic web applications using
          <span className="font-semibold"> JavaScript</span>,
          <span className="font-semibold"> React.js</span>,
          <span className="font-semibold"> Next.js</span>, and other modern frameworks and libraries.
        </p>

        <div className="flex space-x-4 pt-4">
          <Link href="/projects">
            <Button
              size="large"
              type="primary"
              style={{
                ...buttonStyle,
                backgroundColor: hoverProject ? 'red' : 'black',
                borderColor: hoverProject ? 'black' : 'black',
                color: 'white',
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
              type="default"
              style={{
                ...buttonStyle,
                backgroundColor: hoverContact ? 'red' : 'black',
                borderColor: hoverContact ? 'black' : 'black',
                color: 'white',
              }}
              onMouseEnter={() => setHoverContact(true)}
              onMouseLeave={() => setHoverContact(false)}
            >
              Contact Me
            </Button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE – ANIMATION SECTION */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <Lottie animationData={devAnimation} loop={true} className="w-[400px] h-[400px]" />
      </div>
    </main>
  );
}