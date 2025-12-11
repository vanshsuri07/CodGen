"use client";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,

  BookOpen,

  Sparkles,
} from "lucide-react";
import { blogs } from "./blogdata";
import Link from "next/link";

const categories = ["All", "Development", "Career", "Technology", "Design"];


const FeaturedBlogCard = ({ blog, index }: { blog: typeof blogs[0]; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 + index * 0.1 }}
    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
               transition-all duration-500 overflow-hidden border border-gray-100
               hover:-translate-y-2 cursor-pointer"
  >
    <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue-500 to-indigo-600"></div>

    <div className="p-8">
      <div className="flex items-center gap-4 mb-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
          {blog.category}
        </span>
        <div className="flex items-center text-sm font-medium text-red-500">
          <Sparkles className="w-4 h-4 mr-1" />
          <span>Featured</span>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {blog.title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {blog.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
          <Link href={`/blog/${blog.id}`}>Read Full Article</Link>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </motion.article>
);

const StandardBlogCard = ({ blog, index }: { blog: typeof blogs[0]; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 + index * 0.1 }}
    className="group bg-white rounded-xl shadow-md hover:shadow-xl 
               transition-all duration-300 overflow-hidden border border-gray-100
               hover:-translate-y-1 cursor-pointer"
  >
    <div className="p-6">
      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold mb-4">
        {blog.category}
      </span>

      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {blog.title}
      </h3>

      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
        {blog.description}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{blog.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{blog.readTime}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
        <span>Read Article</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.article>
);

// --- Main Page Component ---

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") {
      return blogs.filter((blog) => !blog.featured);
    }
    return blogs.filter(
      (blog) => blog.category === activeCategory && !blog.featured
    );
  }, [activeCategory]);

  const featuredBlogs = blogs.filter((blog) => blog.featured);

  return (
    <div className="min-h-screen  bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-r from-blue-700 to-indigo-800 text-white py-35 px-6">
        <div className="absolute inset-0 bg-black/20 opacity-80"></div>
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wider">
                CODGEN KNOWLEDGE HUB
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Grow Your <span className="text-yellow-300">Skills</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto mb-10 leading-relaxed">
              Unlock professional insights, detailed tutorials, and the latest
              trends in web development and tech careers.
            </p>

            <a
              href="#featured-post"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-xl hover:bg-blue-50 transition-colors transform hover:scale-105"
            >
              Start Reading Now <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        id="category-filter"
        className="py-6 px-6 bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-20 shadow-sm"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border-2 transition-all duration-300 font-medium 
                  ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                      : "bg-white border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-6" id="featured-post">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Top Picks: Featured Articles
              </h2>
              <p className="text-gray-600">
                Our most popular and highly recommended posts.
              </p>
              <div className="w-24 h-1 mt-3 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>
            {/* <a
              href="#latest-posts"
              className="hidden sm:flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              View All Posts <ArrowRight className="w-4 h-4 ml-1" />
            </a> */}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredBlogs.map((blog, index) => (
              <FeaturedBlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>

          <div className="text-center md:hidden">
            <a
              href="#latest-posts"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              View All Posts <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* All Posts */}
      {/* <section id="latest-posts" className="py-16 px-6 bg-white/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {activeCategory === "All"
                ? "All Latest Posts"
                : `Latest Posts in ${activeCategory}`}
            </h2>
            <p className="text-gray-600">
              Browse our complete archive of technical articles and guides.
            </p>
            <div className="w-24 h-1 mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <StandardBlogCard key={blog.id} blog={blog} index={index} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-10 border-2 border-dashed border-gray-300 rounded-xl bg-white"
              >
                <p className="text-xl font-medium text-gray-600">
                  No posts found in the **{activeCategory}** category yet.
                </p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  View All Posts
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section> */}

    
    </div>
  );
}