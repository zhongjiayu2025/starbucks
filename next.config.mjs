/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: { appDir: true } 已被移除
  
  eslint: {
    // 在构建期间忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在构建期间忽略 TypeScript 编译错误
    ignoreBuildErrors: true,
  },
  images: {
    // 允许来自 'placeholder.svg' 的图片域
    // 注意：这里的 domains 写法在新版 Next.js 中已不推荐，
    // 推荐使用 remotePatterns。不过 domains 仍然可用。
    domains: ['placeholder.svg'],
    // 禁用 Next.js 的内置图片优化（例如在 Cloudflare 等不支持的环境中）
    unoptimized: true,
  },
}

export default nextConfig
