/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'earnionc.sirv.com',
                port: '',
                pathname: '/portfolio-felix/**'
            }
        ]
    }
};

module.exports = nextConfig;
