/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://broomva--arcan-entrypoint.modal.run/:path*",
      },
      {
        source: "/version/:path*",
        destination: "https://broomva--arcan-version.modal.run/:path*",
      },
    ];
  },
};

module.exports = nextConfig;


// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'tailwindui.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
// }