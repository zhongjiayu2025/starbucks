import { NextResponse } from "next/server"

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://starbuckscaloriecalculator.pro/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas (if any in future)
Disallow: /admin/
Disallow: /api/

# Allow important pages
Allow: /
Allow: /about
Allow: /recipes
Allow: /faq
Allow: /contact
Allow: /privacy-policy
Allow: /terms-of-service`

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
