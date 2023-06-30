/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "https://broomva--arcan-entrypoint.modal.run/:path*"
            : "/api/",
      },
      {
        source: "/version/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "https://broomva--arcan-version.modal.run/:path*"
            : "/version/",
      },
     
    ];
  },
};

module.exports = nextConfig;
