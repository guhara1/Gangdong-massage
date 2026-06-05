/** @type {import('next').NextConfig} */
const nextConfig = {
  // 정적 사이트로 빌드(SSG). 어디서나 호스팅 가능하도록 export.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
