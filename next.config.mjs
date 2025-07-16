/** @type {import('next').NextConfig} */
const nextConfig = {
  // 'experimental' 选项已移除。
  // 在你的 Next.js 版本 (15.x) 中，App Router 已是默认功能，不再需要此实验性标志。
  
  eslint: {
    // 在构建过程中忽略 ESLint 错误检查。
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在构建过程中忽略 TypeScript 类型错误检查。
    ignoreBuildErrors: true,
  },
  images: {
    // 注意：unoptimized: true 会禁用 Next.js 的图像优化功能。
    // 这在某些托管平台（如 Cloudflare Pages 免费版）上是必要的。
    domains: ['placeholder.svg'],
    unoptimized: true,
  },
}

export default nextConfig
