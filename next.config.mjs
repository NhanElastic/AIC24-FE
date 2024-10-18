/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    IMAGE_API_BASE_URL: "http://selab.nhtlongcs.com:20890/",
    IMAGE_BASE_URL: "http://selab.nhtlongcs.com:20167/preview/",
    VIDEO_API_BASE_URL: "http://localhost:3000",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "selab.nhtlongcs.com",
        port: "20167",
        pathname: "/preview/**",
      },
    ],
  },
};

export default nextConfig;
