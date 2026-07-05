/**
 * SSR configuration for a Node host (Vercel).
 *
 * Server-side rendering + the /api/contact route + on-demand image
 * optimization all work here. `basePath` stays empty for a root-domain
 * deployment; set NEXT_PUBLIC_BASE_PATH only if you serve under a sub-path.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(basePath ? { basePath } : {}),
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
