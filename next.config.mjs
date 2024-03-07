/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 's.car.info',
            }
        ]
    }
};

export default nextConfig;
