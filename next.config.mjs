/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
        workerThreads: true
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(mp3)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/sounds/',
                    outputPath: 'static/sounds/',
                    name: '[name].[ext]',
                    esModule: false,
                },
            },
        });
        return config;
    },
};

export default nextConfig;
