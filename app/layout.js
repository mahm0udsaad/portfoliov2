import NavBar from '@/components/navBar'
import './globals.css'
import Footer from '@/components/footer';
import Transition from '@/components/transition';
import { K2D } from 'next/font/google'
const k2d = K2D({subsets: ['latin'] , weight:['400']})

export const metadata = {
  title: `Mahmoud's Portfolio`,
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel='icon' href='/android_1_.svg' />
      <body suppressHydrationWarning={true} className={`bg-[#121924] overflow-x-hidden ${k2d.className}`}>
        <NavBar />
          <Transition>
            {children}
          </Transition>
          <Footer />
        </body>
    </html>
  )
}
