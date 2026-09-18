import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { posts } from "@/data/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hmsaeed.com";

  const staticRoutes = [
    "",
    "/story",
    "/now",
    "/work",
    "/writing",
    "/academics",
    "/photography",
    "/connect",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const writingRoutes = posts.map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...writingRoutes];
}
