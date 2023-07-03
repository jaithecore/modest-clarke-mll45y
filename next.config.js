/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/modest-clarke-mll45y',
    output: "export",
    async redirects() {
        if (BASE_URL) {
          return [
            {
              source: "/",
              destination: "/modest-clarke-mll45y",
              basePath: false,
              permanent: false,
            },
          ];
        }
        return [];
      },
}

module.exports = nextConfig
