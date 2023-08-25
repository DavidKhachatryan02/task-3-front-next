/** @type {import('next').NextConfig} */
const nextConfig = {
  
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Authorization",
            value:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyOTQ3NzUxLCJleHAiOjE2OTI5NDg3NTF9.scA1S4k4W_uYYS5pgKX0sa_3zz2rBOASIKWxu4vDi1g",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
