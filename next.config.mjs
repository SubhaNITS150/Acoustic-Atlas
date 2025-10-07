/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your existing config here...

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // This allows all paths from the hostname
      },
    ],
  },
};

export default nextConfig;