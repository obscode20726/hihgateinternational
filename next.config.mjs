/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.prod.website-files.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "i.postimg.cc",
                pathname: "/**",
            },
        ],
    },
    reactStrictMode: true,
};

export default nextConfig;
