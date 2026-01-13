import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {


    // Performance optimizations
    experimental: {
        optimizePackageImports: ['@sanity/image-url', '@portabletext/react'],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },


    images: {
        // domains: ['dummyimage.com'],
        //  domains: ['cdn.sanity.io'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/**',
            },
        ],


        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60 * 60 * 24 * 30, 
    },


    // i18n: {
    //     locales: ['en', 'el'],
    //     defaultLocale: 'en',
    // },




    // Bundle analyzer (uncomment for analysis)
    // webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //         config.resolve.fallback = {
    //             ...config.resolve.fallback,
    //             fs: false,
    //         };
    //     }
    //     return config;
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);