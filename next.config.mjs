/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" }, // existing pexels config
      { hostname: "res.cloudinary.com" }, // add cloudinary config
    ],
  },
};

export default nextConfig;
