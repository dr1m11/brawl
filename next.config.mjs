/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://api.youngrusssia.ru/:path*'
            }
        ]
    }
};

export default nextConfig;
