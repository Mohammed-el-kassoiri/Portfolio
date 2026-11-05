/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ["react-native", "react-native-web"],
  turbopack: {
    resolveAlias: {
      "react-native": "react-native-web",
    },
  },
}

export default nextConfig
