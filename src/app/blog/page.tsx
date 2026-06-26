import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata = {
  title: "Blog | Growza",
  description: "Insights on web development, integrations, and DevOps from the Growza team.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sky text-[10px] font-bold uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-3xl sm:text-4xl font-bold">Insights & Guides</h1>
          <p className="mt-3 text-slate-300 text-sm max-w-xl">
            Practical articles on development, integrations, and DevOps from our team.
          </p>
        </div>
      </section>

      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-lg transition-shadow">
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky">{post.category}</span>
              <h2 className="text-lg font-bold text-navy mt-2 mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-sky transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <Calendar size={11} />
                  {post.date} · {post.readTime}
                </div>
                <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-sky inline-flex items-center gap-1">
                  Read <ArrowRight size={11} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
