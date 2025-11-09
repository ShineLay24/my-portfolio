"use client"

import Link from 'next/link'
import { MessageOutlined } from '@ant-design/icons'

export default function Header() {
    return (
        <header className="flex items-center justify-between p-6">

            <Link href="/" className="text-xl font-bold hover:text-red-400">
                Htet Aung Shine
            </Link>

            <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-14">
                <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-red-400 transition-colors">About</Link>
                <Link href="/projects" className="hover:text-red-400 transition-colors">Projects</Link>
                <Link href="/experience" className="hover:text-red-400 transition-colors">Experience</Link>
            </nav>

            <Link href="/contact" className="text-2xl hover:text-red-400 transition-colors">
                <MessageOutlined style={{ fontSize: '30px' }} />
            </Link>

        </header>
    )
}
