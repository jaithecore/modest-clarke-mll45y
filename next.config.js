/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
    //output: "export",
    async redirects() {
        if (true) {
          return [
            {
              source: "/",
              destination: "",
              basePath: false,
              permanent: false,
            },
          ];
        }
        return [];
      },
}

module.exports = nextConfig
