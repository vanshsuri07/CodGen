"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect for the navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Get all sections
      const sections = ["home", "services", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const scrollToSection = (href: string, id: string) => {
    setIsOpen(false);
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300
  ${scrolled ? "bg-white/95 shadow-sm backdrop-blur-lg py-2 border-b border-gray-200/60"
             : "bg-transparent py-4"}
`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* --- Logo Section --- */}
        <button
          onClick={() => scrollToSection("#home", "home")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <motion.img
            src="/CodGenlogo.png"
            alt="CodGen Logo"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-18 h-18 object-contain transition-all"
          />

          <span className="text-3xl font-normal text-[#172554] tracking-wide group-hover:scale-[1.02] transition-transform" style={{ fontFamily: "'Swirly Canalope', cursive" }}>
            CodGen
          </span>
        </button>

        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center gap-3">
          <ul className="flex items-center gap-1 bg-gray-50/80 backdrop-blur-sm rounded-full px-2 py-2 shadow-sm border border-gray-200/50">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href, link.id)}
                  className={`relative px-5 py-2.5 rounded-full font-bold text-100 transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white shadow-md rounded-full border border-blue-100"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Call to Action Button */}
          {/* <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#contact", "contact")}
            className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 text-sm"
          >
            Get Started
          </motion.button> */}
        </div>

        {/* --- Mobile Menu Button --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-11 h-11 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current rounded-full transform transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-current rounded-full transform transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* --- Mobile Dropdown --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute w-full bg-white/98 backdrop-blur-lg border-b border-gray-200 shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href, link.id)}
                    className={`w-full text-left px-5 py-3.5 rounded-xl font-medium transition-all duration-200 ${
                      activeSection === link.id
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                        : "text-gray-700 hover:bg-gray-50 active:scale-[0.98] border border-transparent hover:border-gray-200"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        {activeSection === link.id && (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                        {link.name}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          activeSection === link.id ? "rotate-0" : "-rotate-90 opacity-40"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>
                </motion.li>
              ))}
              {/* <motion.li
                className="pt-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <button
                  onClick={() => scrollToSection("#contact", "contact")}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-transform"
                >
                  Get Started →
                </button>
              </motion.li> */}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;