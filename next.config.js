/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "play.google.com"
            }
        ]
    }
}

module.exports = nextConfig
