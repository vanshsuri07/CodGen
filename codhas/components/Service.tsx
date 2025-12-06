import React from 'react'
import { Code, Briefcase, Award, Users, Lightbulb, TrendingUp } from 'lucide-react'

const Service = () => {
 const services = [
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: "Project-Based Internships",
    description: "Build small project tasks and complete assignments to earn an internship certificate.",
    features: ["Task Based", "Flexible", "Beginner Friendly"]
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Practical Project Tasks",
    description: "No long theory — you learn by building. Each module ends with a real mini project.",
    features: ["GitHub Submission", "Hands-on Work", "Portfolio Use"]
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "Completion Certificate",
    description: "Receive a certificate once you submit your final project successfully.",
    features: ["Shareable PDF", "Resume Friendly", "Proof of Work"]
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Basic Support",
    description: "We try to help when you're stuck through mail/WhatsApp support.",
    features: ["Doubt Support", "Guidance When Needed", "Simple Feedback"]
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Skill Growth",
    description: "Improve through practical tasks. Your skills grow as you build.",
    features: ["No Theory Load", "Mini Projects", "Continuous Learning"]
  },
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: "Future Vision",
    description: "More features like mentorship & job-ready tracks will come as we grow.",
    features: ["Expanding Soon", "Roadmap in Progress", "Community Building"]
  },
]


  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to learn skills, build projects and earn an internship certificate
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-blue-600 mb-6 transform transition-transform duration-300 hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center group">
                Apply now
                <svg 
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
