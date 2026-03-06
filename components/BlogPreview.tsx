import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#f9f8f7" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="section-subtitle">Knowledge Hub</p>
            <h2 className="section-title">บทความความงาม</h2>
            <div className="divider-rose mt-4" />
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3 duration-200 shrink-0"
            style={{ color: "#c38789" }}
          >
            ดูบทความทั้งหมด <ArrowRight size={15} />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured — larger first card */}
          <Link
            href={`/blog/${posts[0].slug}`}
            className="group lg:col-span-1 flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ border: "1px solid #e0ddd9", backgroundColor: "#fff" }}
          >
            {/* Image */}
            <div
              className="relative h-52 flex items-center justify-center overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${posts[0].gradientFrom}, ${posts[0].gradientTo})`,
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-20" style={{ backgroundColor: "#fff" }} />
                <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full opacity-10" style={{ backgroundColor: "#fff" }} />
              </div>
              <div className="relative z-10 text-center px-6">
                <BookOpen size={36} style={{ color: "rgba(255,255,255,0.85)" }} className="mx-auto mb-2" />
                <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {posts[0].titleEn}
                </p>
              </div>
              {/* Category badge */}
              <span
                className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-medium"
                style={{ backgroundColor: "rgba(255,255,255,0.25)", color: "#fff" }}
              >
                {posts[0].category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-6 flex-1">
              <h3
                className="text-lg font-medium leading-snug group-hover:opacity-75 transition-opacity"
                style={{ color: "#69554a" }}
              >
                {posts[0].title}
              </h3>
              <p
                className="text-xs font-light leading-relaxed line-clamp-2 flex-1"
                style={{ color: "#8b7f7c" }}
              >
                {posts[0].excerpt}
              </p>
              <div
                className="flex items-center justify-between pt-3 border-t"
                style={{ borderColor: "#e8e7e5" }}
              >
                <span className="text-xs flex items-center gap-1" style={{ color: "#c7bfb5" }}>
                  <Clock size={10} /> {posts[0].readTime}
                </span>
                <span
                  className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                  style={{ color: posts[0].accentColor }}
                >
                  อ่านต่อ <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </Link>

          {/* Right column — 2 stacked cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ border: "1px solid #e0ddd9", backgroundColor: "#fff" }}
              >
                {/* Thumbnail */}
                <div
                  className="relative w-36 sm:w-48 shrink-0 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})`,
                  }}
                >
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: "#fff" }} />
                  <BookOpen size={26} style={{ color: "rgba(255,255,255,0.8)" }} className="relative z-10" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-2.5 p-5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[11px] px-2.5 py-0.5 rounded-full font-medium shrink-0"
                      style={{ backgroundColor: `${post.accentColor}15`, color: post.accentColor }}
                    >
                      {post.category}
                    </span>
                    <span className="text-[11px] flex items-center gap-1 shrink-0" style={{ color: "#c7bfb5" }}>
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="text-base font-medium leading-snug group-hover:opacity-75 transition-opacity line-clamp-2"
                    style={{ color: "#69554a" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-xs font-light leading-relaxed line-clamp-1 hidden sm:block"
                    style={{ color: "#8b7f7c" }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200 mt-1"
                    style={{ color: post.accentColor }}
                  >
                    อ่านต่อ <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
