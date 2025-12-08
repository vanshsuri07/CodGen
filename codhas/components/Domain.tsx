"use client";
import React, { useState } from 'react'
import { Code, Smartphone, Brain, Palette, Database, Cloud, Globe, Cpu, } from 'lucide-react'
import { SlideUp } from './ui/SlideUp';
import { motion } from 'framer-motion';

const Domain = () => {
  const [isPaused, setIsPaused] = useState(false)

  const domains = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description: "Build modern, responsive websites",
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      skills: ["React", "Next.js", "TypeScript", "Tailwind"],
      students: "2.5k",
      courses: "12"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Development",
      description: "Create cross-platform mobile apps",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      skills: ["React Native", "Flutter", "Swift", "Kotlin"],
      students: "1.8k",
      courses: "10"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Machine Learning",
      description: "Build intelligent AI systems",
      gradient: "from-green-500 via-green-600 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      skills: ["Python", "TensorFlow", "PyTorch", "Keras"],
      students: "3.2k",
      courses: "15"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description: "Design beautiful user experiences",
      gradient: "from-pink-500 via-pink-600 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      skills: ["Figma", "Adobe XD", "Sketch", "Principle"],
      students: "2.1k",
      courses: "8"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Backend Development",
      description: "Build scalable server applications",
      gradient: "from-orange-500 via-orange-600 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      students: "2.9k",
      courses: "14"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud & DevOps",
      description: "Master cloud infrastructure",
      gradient: "from-indigo-500 via-indigo-600 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      students: "1.6k",
      courses: "11"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Full Stack",
      description: "Complete web development mastery",
      gradient: "from-teal-500 via-teal-600 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
      skills: ["MERN", "Next.js", "GraphQL", "Docker"],
      students: "4.1k",
      courses: "18"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Data Science",
      description: "Analyze and visualize complex data",
      gradient: "from-violet-500 via-violet-600 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50",
      skills: ["Python", "Pandas", "Tableau", "R"],
      students: "2.3k",
      courses: "13"
    }
  ]

  // Duplicate domains for seamless loop
  const duplicatedDomains = [...domains, ...domains, ...domains]

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50 overflow-hidden" id="domains">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <SlideUp delay={0.2}>
          <div className="inline-block px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Our Domains
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Explore What You Love
          </h2>
          <p className="text-xl text-gray-600">
           Choose your domain • View tasks and apply
          </p>
          </SlideUp>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <SlideUp delay={0.4}>
        <motion.div 
          className="overflow-hidden"
        >
        <div 
          className="flex gap-8 py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            animation: isPaused ? 'none' : 'scroll 40s linear infinite',
            width: 'max-content'
          }}
        >
          {duplicatedDomains.map((domain, index) => (
  <div
    key={index}
    className={`group relative shrink-0 w-72 bg-linear-to-br ${domain.bgGradient} rounded-2xl p-6 
    shadow-lg hover:shadow-2xl hover:scale-[1.06] transition-all duration-500 border border-white cursor-pointer`}
  >

    {/* Decorative background */}
    <div className={`absolute -top-14 -right-14 w-32 h-32 bg-linear-to-br ${domain.gradient} rounded-full 
    opacity-15 group-hover:opacity-25 transition-all duration-500 blur-2xl`}></div>

    {/* Content */}
    <div className="relative z-10">
      
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-14 h-14 bg-linear-to-br ${domain.gradient} 
      rounded-xl mb-4 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all`}>
        <div className="text-white">{domain.icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-1">{domain.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{domain.description}</p>

      {/* Skills (only 3) */}
      <div className="flex flex-wrap gap-2 mb-4">
        {domain.skills.slice(0, 3).map((skill, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 text-xs bg-white/80 backdrop-blur-sm border border-gray-200 
            rounded-full text-gray-700 shadow-sm group-hover:bg-white transition-all"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Hover CTA */}
      {/* <div className="flex items-center text-sm font-semibold text-gray-700 opacity-0 
      group-hover:opacity-100 transition-all">
        Explore →
      </div> */}
    </div>
  </div>
))}
 
 </div>
        </motion.div>
        </SlideUp>
        </div>
      

     
    </section>
  )
}

export default Domain

