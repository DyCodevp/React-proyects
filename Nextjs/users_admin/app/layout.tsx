import Navbar from '@/components/Navbar'
import './globals.css'


export const metadata = {
  title: 'App admin users',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<body>
  <Navbar></Navbar>
{children}
      </body>
    </html>
  )
}
