import Footer from '@/component/footer'
import Header from '@/component/header'
import 'antd/dist/reset.css';
import './globals.css'

export const metadata = {
  title: 'Htet Aung Shine Portfolio',
  description: 'Front-End Developer portfolio — building fast, beautiful, and interactive web experiences with React, Next.js, and modern tooling.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
