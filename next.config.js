/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/dev/website",
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/**"
            }
        ],
        unoptimized: true
    }
};

module.exports = nextConfig;
