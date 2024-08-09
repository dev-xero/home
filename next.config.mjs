/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
