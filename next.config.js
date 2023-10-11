/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['taayoo-images.s3.ap-south-1.amazonaws.com'],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
