import { TextReveal } from "./ui/TextReveal";
import { SlideUp } from "./ui/SlideUp";
import { FadeIn } from "./ui/FadeIn";

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
            <TextReveal
              text="Project-Based Virtual Internships"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            />

            <SlideUp delay={0.5}>
              <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
                Build real projects. Gain experience. Earn certificates.
              </p>
            </SlideUp>

            <SlideUp delay={0.7}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                  Apply Now
                </button>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
