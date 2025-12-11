"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  content: string;
  category: string;
  readTime: string;
  featured: boolean;
}

export default function BlogClient({ blog }: { blog?: Blog }) {
  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-2 py-10"
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blogs
          </Link>
        </motion.div>

        {/* Main Content Card */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
        >
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              <Tag className="w-4 h-4" />
              {blog.category}
            </span>
            {blog.featured && (
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-bold">
                ⭐ Featured
              </span>
            )}
          </div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            {blog.title}
          </motion.h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {blog.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">{blog.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-5 h-5" />
              <span className="font-medium">{blog.readTime}</span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none text-gray-800">
            {blog.content.split("\n").map((line: string, i: number) => {
              // Handle empty lines
              if (line.trim() === "") {
                return <br key={i} />;
              }
              
              // Handle headings
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                    {line.replace("### ", "")}
                  </h3>
                );
              }

              // Handle bullet points
              if (line.trim().startsWith("•") || line.trim().startsWith("-")) {
                return (
                  <li key={i} className="ml-6 mb-2">
                    {line.replace(/^[•\-]\s*/, "")}
                  </li>
                );
              }

              // Regular paragraphs
              return (
                <p key={i} className="mb-4 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Blogs
            </Link>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
