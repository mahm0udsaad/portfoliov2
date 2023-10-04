"use client"
import NavBar from '@/components/navBar'
import './globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '@/components/footer'

export default function RootLayout({ children }) {
  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 1, x: 0, y: 100 },
}
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className='bg-[#121924] overflow-x-hidden'>
        <NavBar />
          <AnimatePresence >
          <motion.main
          onLoad={()=> console.log('loading')}
          variants={variants} // Pass the variant object into Framer Motion 
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: 'linear' }} // Set the transition to linear
          >
              {children}
          </motion.main>
          </AnimatePresence>
          <Footer />
        </body>
    </html>
  )
}
