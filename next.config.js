/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["i.dummyjson.com"]
    },

    //for genarate static html using npm run build
    // output: "export",

    // for redirect one url to another
    redirects: async () => {
        return [
            {
                source: "/profile/user",
                destination: "/users",
                permanent: false,
            },
        ]
    }
}

module.exports = nextConfig
