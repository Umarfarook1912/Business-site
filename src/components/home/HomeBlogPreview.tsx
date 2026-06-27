import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS, ROUTES } from "@/lib/constants";
import { MotionSection } from "@/components/common/MotionSection";

export function HomeBlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="bg-off-white py-16 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="section-label mb-2">Insights</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">From Our Blog</h2>
          </div>
          <Link href={ROUTES.blog} className="text-xs font-semibold text-sky inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all articles <ArrowRight size={12} />
          </Link>
        </MotionSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-[#E2E8F0] rounded-xl p-5 hover:border-sky hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky">{post.category}</span>
              <h3 className="text-sm font-bold text-navy mt-2 mb-2 group-hover:text-sky transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <Calendar size={11} />
                {post.date} · {post.readTime}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
