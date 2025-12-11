import { blogs } from "../blogdata";
import BlogClient from "./BlogClient";

export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;  // unwrap params on server
  const blog = blogs.find((b) => b.id === id);

  
  return <BlogClient blog={blog} />;
}
