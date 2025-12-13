"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

interface MarkdownRendererProps {
  content: string;
  headings?: { id: string; text: string; level: number }[];
}

export default function MarkdownRenderer({
  content,
  headings = [],
}: MarkdownRendererProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (!headings.length) return;

    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) =>
                a.target.getBoundingClientRect().top -
                b.target.getBoundingClientRect().top
            );

          if (visible[0]?.target.id) {
            setActiveSection(visible[0].target.id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.5, 1] }
      );

      headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el) observer.observe(el);
      });

      if (headings[0]) {
        setActiveSection(headings[0].id);
      }

      return observer;
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [headings]);

  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h2: ({ children }) => {
            const text = String(children);
            const heading = headings.find(
              (h) => h.text === text && h.level === 2
            );

            return (
              <h2
                id={heading?.id}
                className="text-3xl font-bold mt-16 mb-6 text-gray-900 tracking-tight scroll-mt-24"
              >
                {children}
              </h2>
            );
          },

          h3: ({ children }) => {
            const text = String(children);
            const heading = headings.find(
              (h) => h.text === text && h.level === 3
            );

            return (
              <h3
                id={heading?.id}
                className="relative text-xl font-bold mt-10 mb-4 text-gray-800 scroll-mt-24 pl-4"
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-600" />
                {children}
              </h3>
            );
          },

          p: ({ children }) => (
            <p className="text-lg leading-8 text-gray-700 mb-4">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {children}
            </ul>
          ),

          li: ({ children }) => (
            <li className="text-lg leading-8 text-gray-700">
              {children}
            </li>
          ),

          a: ({ children, href }) => (
            <a
              href={href}
              className="text-blue-600 font-medium no-underline hover:underline underline-offset-4"
            >
              {children}
            </a>
          ),

          code: ({ node, className, children }) => {
            const isInline = node?.tagName !== "pre";

            if (isInline) {
              return (
                <code className="-px-1 text-gray-200 rounded bg-gray-900">
                  {children}
                </code>
              );
            }

            return (
              <pre className="bg-gray-900 p-4 rounded-xl mb-6 overflow-auto">
                <code className={className}>{children}</code>
              </pre>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
