"use client";
import { TextReveal } from "./ui/TextReveal";
import { SlideUp } from "./ui/SlideUp";


const HeroSection = () => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden pt-16 sm:pt-20">
      
      {/* Background Video */}
      <video
        autoPlay loop muted playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.75] scale-105"
      >
        <source src="/videost.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-white/90 via-white/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center py-12 sm:py-0">
        <div className="max-w-2xl w-full">
          
          <TextReveal 
            text="Launch Your Tech Career..." 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          />

          <SlideUp delay={0.5}>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Build real projects. Gain experience. Earn certificates.
            </p>
          </SlideUp>

          <SlideUp delay={0.7}>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe7h3_3sa8Hu-UjZHw9CspY2lowhOfkMOWp0wfcn2q8LsmdrA/viewform', '_blank')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                Apply Now
              </button>

              <button
                onClick={() => document.getElementById("domains")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-lg transform hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                View Domains
              </button>
            </div>
          </SlideUp>
          
          <SlideUp delay={0.9}>
            <p className="mt-4 sm:mt-6 text-gray-600 text-xs sm:text-sm flex flex-wrap gap-2 items-center justify-start">
              <span>100% project-based</span>
              <span className="hidden sm:inline">•</span>
              <span>Beginner friendly</span>
              <span className="hidden sm:inline">•</span>
              <span>Work from home</span>
            </p>
          </SlideUp>
        </div>
      </div>

      {/* Scroll Indicator - Enhanced
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer group">
        <span className="text-gray-700 font-medium text-base">Explore</span>
        <div className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all">
          <ChevronDown className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
