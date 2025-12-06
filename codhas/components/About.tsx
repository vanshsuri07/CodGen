import React from 'react'
import { Target, Eye, Heart, CheckCircle } from 'lucide-react'

const About = () => {

  const features = [
    "Task-based internship structure",
    "Project submission based certificate",
    "Optional internship report",
    "Beginner-friendly learning approach",
    "Multiple domains (Web/AI/App etc.)",
    "Simple & transparent process"
  ]
  
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About CodHas
          </h2>
          <p className="text-xl text-gray-600">
            A project-based internship platform for students to build skills through real tasks and earn certificates.
          </p>
        </div>

        {/* Story + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Story */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Beginning
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                CodHas started with a simple idea — students don&apos;t need more theory, they need real hands-on work. 
                Most students finish college without projects, without GitHub work, and without confidence.
              </p>
              <p>
                We built this platform to help students complete practical tasks, submit their work, 
                and receive certificates they can actually showcase in resumes and LinkedIn.
              </p>
              <p>
                We are early, growing step by step — honestly and transparently — with a vision to build a valuable learning community.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What We Offer
            </h3>
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 text-center hover:border-blue-300 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mission</h3>
            <p className="text-gray-600">
              To make internships accessible through task-based practical learning without complicated entry barriers.
            </p>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 text-center hover:border-blue-300 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Vision</h3>
            <p className="text-gray-600">
              To grow into a recognized platform where students build projects, gain experience and prepare for the future.
            </p>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 text-center hover:border-blue-300 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Values</h3>
            <p className="text-gray-600">
              Transparency, Practical Skill Building, Student Growth, and Honest Commitment — not fake promises.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
