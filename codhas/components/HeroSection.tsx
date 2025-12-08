"use client";
import { TextReveal } from "./ui/TextReveal";
import { SlideUp } from "./ui/SlideUp";


const HeroSection = () => {
  return (
    <section id="home" className="relative w-full min-h-[90vh] overflow-hidden pt-20">
      
      {/* Background Video */}
      <video
        autoPlay loop muted playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.75]"
      >
        <source src="/videost.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-white/90 via-white/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center">
        <div className="max-w-2xl">
          
          <TextReveal 
            text="Project-Based Virtual Internships" 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          />

          <SlideUp delay={0.5}>
            <p className="mt-6 text-lg sm:text-xl text-gray-700">
              Build real projects. Gain experience. Earn certificates.
            </p>
          </SlideUp>

          <SlideUp delay={0.7}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                Apply Now
              </button>

            <button
  onClick={() => document.getElementById("domains")?.scrollIntoView({ behavior: "smooth" })}
  className="px-8 py-3 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-lg transform hover:scale-105 active:scale-95"
>
  View Domains
</button>

            </div>
          </SlideUp>
          <SlideUp delay={0.9}>
          <p className="mt-4 text-gray-600 text-sm">
            100% project-based • Beginner friendly • Work from home
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
