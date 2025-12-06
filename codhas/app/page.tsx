import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Service from '@/components/Service'
import About from '@/components/About'
import Contact from '@/components/Contact'

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Service />
      <About />
      <Contact />
      
    </main>
  )
}

export default page
