import Footer from '@/component/footer'
import Header from '@/component/header'
import 'antd/dist/reset.css';
import './globals.css'

export const metadata = {
  title: 'Htet Aung Shine Portfolio',
  description: 'Front-End Developer Portfolio built with Next.js & Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">
        {/* Header will appear on every page */}
        <Header />

        {/* Main content changes depending on page */}
        <main className="flex-1">{children}</main>

        {/* Footer will appear on every page */}
        <Footer />
      </body>
    </html>
  )
}
