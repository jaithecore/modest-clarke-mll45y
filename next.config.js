/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/repo',
    //output: "export",
    async redirects() {
        if (true) {
          return [
            {
              source: "/",
              destination: "/repo",
              basePath: false,
              permanent: false,
            },
          ];
        }
        return [];
      },
}

module.exports = nextConfig
