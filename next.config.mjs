/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    transpilePackages: ['next-mdx-remote'],
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default nextConfig;
