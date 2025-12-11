import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Service from '@/components/Service'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Domain from '@/components/Domain'

const page = () => {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <HeroSection />
      
      {/* Services Section */}
      <div id="services" className="scroll-mt-20">
        <Service />
      </div>
      
      {/* Domain Section */}
      <div className="py-8">
        <Domain />
      </div>
      
      {/* About Section */}
      <div id="about" className="scroll-mt-20">
        <About />
      </div>
    </main>
  )
}

export default page