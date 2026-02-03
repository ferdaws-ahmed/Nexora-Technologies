


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
    domains: ["logo.svgcdn.com"], // আলিফের অ্যাড করা ডোমেইন
  },
  reactCompiler: true,
};

export default nextConfig;