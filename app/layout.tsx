import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Flexible',
  description: 'Showcase your work with flexible layouts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        {/* {children} */}
        <Footer /> 
      </body>
    </html>
  )
}
