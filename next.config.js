/** @type {import('next').NextConfig} */
// const nextConfig = {}
const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
    // options
    flexsearch: true,
    staticImage: true,
    defaultShowCopyCode: true,
});

const nextConfig = withNextra({
    reactStrictMode: true,
})

module.exports = nextConfig
