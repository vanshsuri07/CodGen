"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Calendar, ArrowRight, BookOpen, Sparkles } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  featured: boolean;
}

const categories = ["All", "Development", "Career", "Technology", "Design"];

export default function BlogClient({ blogs }: { blogs: Blog[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredBlogs = blogs.filter((b) => b.featured);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* -------------------- HERO SECTION -------------------- */}
      <section className="relative overflow-hidden text-white py-24 px-6 min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog-hero.png"
            alt="Blog Hero Banner"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mt-10 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-semibold">CODGEN KNOWLEDGE HUB</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Grow Your <span className="text-yellow-300">Skills</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Unlock tutorials, insights, and the latest tech trends from CodGen
              experts.
            </p>

            <a
              href="#featured-post"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-xl hover:bg-blue-50 transition transform hover:scale-105"
            >
              Start Reading <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* -------------------- CATEGORY FILTER --------------------
      <section className="py-6 px-6 bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border-2 transition-all 
                ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                    : "bg-white border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section> */}

      {/* -------------------- FEATURED POSTS -------------------- */}
      <section className="py-16 px-6" id="featured-post">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Top Picks: Featured Articles
              </h2>
              <p className="text-gray-600">
                Our most recommended posts for leveling up.
              </p>
              <div className="w-24 h-1 mt-3 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredBlogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border hover:-translate-y-2 transition"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {blog.category}
                    </span>

                    <div className="flex items-center text-red-500 text-sm">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Featured
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 my-3">{blog.description}</p>

                  <div className="flex items-center justify-between mt-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </div>

                    <Link
                      href={`/blog/${blog.id}`}
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
