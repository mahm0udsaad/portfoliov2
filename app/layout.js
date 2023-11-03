import NavBar from '@/components/navBar'
import './globals.css'
import Footer from '@/components/footer';
import Transition from '@/components/transition';

export const metadata = {
  title: `Mahmoud's Portfolio`,
}
 
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel='icon' href='/android_1_.svg' />
      <body suppressHydrationWarning={true} className='bg-[#121924] overflow-x-hidden'>
        <NavBar />
          <Transition>
            {children}
          </Transition>
          <Footer />
        </body>
    </html>
  )
}
