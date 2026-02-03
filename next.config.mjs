/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ["logo.svgcdn.com"], // add all external hosts you use
  },
  reactCompiler: true,
};

export default nextConfig;
