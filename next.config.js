/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/static',
        logLevel: process.env.LOG_LEVEL,
    },
}

module.exports = nextConfig
