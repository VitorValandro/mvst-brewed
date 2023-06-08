module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/coffees",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/bucket/**",
      },
    ],
  },
};
