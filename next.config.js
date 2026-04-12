/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add basePath and assetPrefix for GitHub Pages
  // Make sure this exactly matches your repository name!
  basePath: '/suresh-vishnoi-portfolio',
  assetPrefix: '/suresh-vishnoi-portfolio/',
};

module.exports = nextConfig;
