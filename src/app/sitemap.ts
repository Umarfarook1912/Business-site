import type { MetadataRoute } from "next";
import { SITE, BLOG_POSTS } from "@/lib/constants";

const BASE = SITE.metadataBase;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/services", "/tech-stack", "/about", "/blog"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
