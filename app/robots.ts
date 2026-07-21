import type { MetadataRoute } from "next";

/* ⚠️ غيّر الدومين هنا لدومينك الفعلي قبل النشر */
const SITE_URL = "https://palmhiilsproperties.com";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
