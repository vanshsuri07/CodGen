const HeroSection = () => {
  return (
    <section id="home"> 
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videost.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
            Project-Based Virtual Internships
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-200">
            Build real projects. Gain experience. Earn certificates.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <button className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              Apply Now
            </button>

          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection