import { ENV } from "@/constants/env";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const staticPaths = [
    {
      url: ENV.SITE_URL,
      lastModified,
    },
  ];

  return [...staticPaths];
}
