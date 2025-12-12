// app/blog/page.tsx
import { blogs } from "./blogdata";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "CodGen Blog – Learn Web Dev, Tech & Career Skills",
  description:
    "Explore high-quality articles on web development, internships, MERN stack, tech careers, UI/UX, and more from CodGen.",
  openGraph: {
    title: "CodGen Blog – Learn & Grow",
    description:
      "Read tutorials, guides, and insights to grow your development & career skills.",
    url: "https://codgen.in/blog",
    siteName: "CodGen",
    images: [
      {
        url: "/blog-hero.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  keywords:
    "codgen blog, web development blog, internship tips, mern stack guide, coding tutorials, tech career advice",
};

export default function BlogPage() {
  return <BlogClient blogs={blogs} />;
}
