"use client";
import { TextReveal } from "./ui/TextReveal";
import { SlideUp } from "./ui/SlideUp";

import { useState } from "react";

const HeroSection = () => {
  const [isVisible] = useState(true);

  const tags = [
    'Web Development',
    'Virtual Internship',
    'IT Internship',
    'Coding Internship',
    'Beginner Friendly',
    'Certificate Provided',
    'Remote Work'
  ];
  
  return (
    <>
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
      </section>

      {/* Why Choose CodGen Section */}
      <section className="max-w-4xl mx-auto text-center py-16 px-6">
        <TextReveal 
          text="Why Choose CodGen Internship?" 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
        />

        <SlideUp delay={0.3}>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            CodGen offers a <span className="font-semibold text-blue-600">flexible virtual internship</span> experience for students in IT & Computer Science. 
            Learn <span className="font-semibold text-purple-600">Web Development, MERN Stack, Python, Data Science, UI/UX</span>, and more through hands-on tasks. 
            Improve your resume, build real projects, and earn a <span className="font-semibold text-blue-600">completion certificate</span> to showcase your skills.
          </p>
        </SlideUp>

        <SlideUp delay={0.5}>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </SlideUp>

      </section>
    </>
  );
};

export default HeroSection;