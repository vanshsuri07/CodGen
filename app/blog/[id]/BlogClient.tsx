"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, ArrowLeft, BookOpen, Share2, ChevronRight } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "../blogdata";
import MarkdownRenderer from "@/components/MarkDownRenderer";

interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  content: string;
  category: string;
  keywords?: string[];
  coverImage?: string;
  featured: boolean;
}
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);
 if (!blog) {
    return {
      title: "Blog Not Found | CodGen",
      description: "The blog you're looking for does not exist.",
    };
  }

  const url = `https://codgen.in/blog/${blog.id}`;
  const ogImage = blog.coverImage
    ? `https://codgen.in${blog.coverImage}`
    : "https://codgen.in/blog-hero.png";

  return {
    title: `${blog.title} | CodGen Blog`,
    description: blog.description,
    keywords: blog.keywords || [],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${blog.title} | CodGen Blog`,
      description: blog.description,
      url,
      siteName: "CodGen",
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [ogImage],
    },
  };
}

export default function BlogClient({ blog }: { blog?: Blog }) {
  const [activeSection, setActiveSection] = useState("");

  // Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Derive content data from blog prop using useMemo
  const contentData = useMemo(() => {
    if (!blog) return { 
      readingTime: 0, 
      headings: [] as { id: string; text: string; level: number }[]
    };

    // 1. Calculate Reading Time
    const words = blog.content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / 200);

    // 2. Extract Headings
    const lines = blog.content.split("\n");
    const extractedHeadings = lines
      .filter((line) => line.startsWith("##"))
      .map((line, index) => ({
        id: `section-${index}`,
        text: line.replace(/^#+\s/, ""),
        level: line.match(/^#+/)?.[0].length || 2,
      }));
    
    return { readingTime, headings: extractedHeadings };
  }, [blog]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    if (!contentData.headings.length) return;

    // Wait for markdown to render
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);

          if (visible[0]?.target.id) {
            setActiveSection(visible[0].target.id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.5, 1] }
      );

      contentData.headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el) {
          observer.observe(el);
        }
      });

      // Set initial active section
      if (contentData.headings[0]) {
        setActiveSection(contentData.headings[0].id);
      }

      return () => {
        clearTimeout(timeoutId);
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [contentData.headings, blog?.content]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">
            The article you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-100 to-indigo-2000 text-gray-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Reading Progress Bar (Fixed Top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
        style={{ scaleX }}
      />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Posts</span>
            </Link>
              <div className="hidden sm:flex items-center gap-4">
               <span className="text-sm text-gray-500">{contentData.readingTime} min read</span>
               <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50">
                  <Share2 className="w-4 h-4" />
               </button>
            </div>
        </div>
      </header>

      <main className="pb-24">
        {/* Editorial Hero Section */}
        <section className="relative pt-12 pb-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
                {blog.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.15]">
              {blog.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
              {blog.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 border-t border-gray-200 pt-8 mt-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{contentData.readingTime} min read</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Featured Image Placeholder */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="aspect-21/9 bg-linear-to-tr from-blue-100 to-indigo-100 rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50 border border-blue-200 relative"
          >
            <Image
              src={blog.coverImage || "/blog-hero.png"}
              alt="Featured Image"
              fill
              className=" object-center"
              priority
            />  
          </motion.div>
        </div>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar: Table of Contents */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                {contentData.headings.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
                      On this page
                    </h3>
                    <nav className="relative border-l border-gray-200">
                      {contentData.headings.map((heading) => (
                        <button
                          key={heading.id}
                          onClick={() => scrollToSection(heading.id)}
                          className={`block w-full text-left pl-4 py-2 text-sm transition-all duration-200 border-l-2 -ml-0.5 ${
                            activeSection === heading.id
                              ? "border-blue-600 text-blue-700 font-medium"
                              : "border-transparent text-gray-700 hover:text-black hover:border-gray-300"
                          } ${heading.level === 3 ? "ml-4" : ""}`}
                        >
                          {heading.text}
                        </button>
                      ))}
                    </nav>
                  </motion.div>
                )}
                
                
              </div>
            </aside>

            {/* Main Article Content */}
            <article className="lg:col-span-8 lg:col-start-4">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="prose prose-lg max-w-none 
      prose-headings:font-bold prose-headings:text-gray-900 
      prose-p:text-gray-700 prose-p:leading-8 prose-p:mb-8
      prose-li:text-gray-700 prose-li:marker:text-blue-600
      prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
      prose-strong:font-semibold prose-strong:text-gray-900"
  >
    <MarkdownRenderer content={blog.content} headings={contentData.headings} />
  </motion.div>


              {/* Post Footer */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                 <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div>
                        
                        <Link href="/blog" className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2">
                           Back to Blog Library <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                    
                 </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}