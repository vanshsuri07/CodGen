"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

  const scrollToSection = (href, id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200 py-3"
          : "bg-white/95 backdrop-blur-md shadow-sm py-4"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* --- Logo Section --- */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <span className="relative z-10">C</span>
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform">
            CodHas
          </span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-2 bg-gray-100/80 backdrop-blur-sm rounded-full p-1.5 shadow-inner">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href, link.id)}
                  className={`relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:text-blue-600 hover:bg-white/50"
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Call to Action Button */}
          <button
            onClick={() => scrollToSection("#contact", "contact")}
            className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* --- Mobile Menu Button --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* --- Mobile Dropdown --- */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.href, link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 active:scale-95"
                }`}
              >
                <span className="flex items-center justify-between">
                  {link.name}
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button
              onClick={() => scrollToSection("#contact", "contact")}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg active:scale-95 transition-transform"
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;