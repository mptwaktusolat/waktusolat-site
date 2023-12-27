/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "play.google.com"
            },
            {
                protocol: "https",
                hostname: "bucket.waktusolat.app"
            }
        ]
    },
    redirects: async () => {
        return [
            {
                source: "/get",
                destination: "https://play.google.com/store/apps/details?id=live.iqfareez.waktusolatmalaysia",
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
