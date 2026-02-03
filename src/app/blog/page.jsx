import { blogData } from "@/data/blogData";
import BlogHeader from "@/components/Blog/BlogHeader";
import BlogGrid from "@/components/Blog/BlogGrid";

export default function BlogPage() {
  return (
    <main className='bg-black min-h-screen'>
      <BlogHeader />
      <BlogGrid posts={blogData} />
    </main>
  );
}
