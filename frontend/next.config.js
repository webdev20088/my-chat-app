/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: [
      'http://localhost:3000',
      'http://192.168.29.157:3000' // Replace with your computer's local IP
    ],
  },
};

module.exports = nextConfig;



