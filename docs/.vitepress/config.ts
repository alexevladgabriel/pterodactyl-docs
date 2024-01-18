import { defineConfig } from 'vitepress';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';

export default defineConfig({
    title: 'Pterodactyl',
    description: 'description',
    cleanUrls: true,
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' }],
        ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#0e4688' }],
        ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
        ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
        ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
        ['meta', { name: 'theme-color', content: '#0e4688' }],
    ],
    markdown: {
        image: {
            lazyLoading: true,
        },
        config(md) {
            md.use(tabsMarkdownPlugin);
        },
    },
    themeConfig: {
        logo: '/logos/pterry.svg',
        search: {
            provider: 'local',
        },
        nav: [
            { text: 'Documentation', link: '/project/introduction' },
            { text: 'Community Guides', link: '/community/about' },
            { text: 'About', items: [{ text: 'Team', link: '/project/about#core-project-team' }] },
            { text: 'API', link: 'https://dashflo.net/docs/api/pterodactyl/v1/' },
        ],
        sidebar: {
            '/community/': [
                {
                    text: 'Community Guides',
                    items: [{ text: 'Community Guides and Tutorials', link: '/community/about' }],
                },
                {
                    text: 'Panel Installation',
                    items: [
                        { text: 'CentOS 7', link: '/community/installation-guides/panel/centos7' },
                        {
                            text: 'CentOS 8, Rocky Linux 8, AlmaLinux 8, Fedora Server 38',
                            link: '/community/installation-guides/panel/centos8',
                        },
                        { text: 'Debian 11 & 12', link: '/community/installation-guides/panel/debian' },
                    ],
                },
                {
                    text: 'Wings Installation',
                    items: [
                        { text: 'CentOS 7', link: '/community/installation-guides/wings/centos7' },
                        {
                            text: 'CentOS 8, Rocky Linux 8, AlmaLinux 8, Fedora Server 38',
                            link: '/community/installation-guides/wings/centos8',
                        },
                        { text: 'Debian 11 & 12', link: '/community/installation-guides/wings/debian' },
                    ],
                },
                {
                    text: 'Creating Eggs',
                    items: [
                        { text: 'Creating a Custom Egg', link: '/community/config/eggs/creating_a_custom_egg' },
                        {
                            text: 'Creating a Custom Docker Image',
                            link: '/community/config/eggs/creating_a_custom_image',
                        },
                    ],
                },
                {
                    text: 'Game Configuration',
                    items: [{ text: 'Minecraft', link: '/community/games/minecraft' }],
                },
                {
                    text: 'Tutorials',
                    items: [
                        { text: 'Creating a New Node', link: '/community/config/nodes/add_node' },
                        { text: 'Artisan CLI', link: '/community/tutorials/artisan' },
                    ],
                },
                {
                    text: 'Customization',
                    items: [
                        { text: 'Building Panel Assets', link: '/community/customization/panel' },
                        { text: 'Building Wings', link: '/community/customization/wings' },
                    ],
                },
            ],
            '/': [
                {
                    text: 'Project Information',
                    items: [
                        { text: 'Introduction', link: '/project/introduction' },
                        { text: 'About', link: '/project/about' },
                        { text: 'Terminology', link: '/project/terms' },
                        { text: 'Community Standards', link: '/project/community' },
                    ],
                },
                {
                    text: 'Panel',
                    items: [
                        { text: 'Getting Started', link: '/panel/1.0/getting_started' },
                        { text: 'Webserver Configuration', link: '/panel/1.0/webserver_configuration' },
                        { text: 'Additional Configuration', link: '/panel/1.0/additional_configuration' },
                        { text: 'Updating the Panel', link: '/panel/1.0/updating' },
                        { text: 'Troubleshooting', link: '/panel/1.0/troubleshooting' },
                        { text: 'Legacy Upgrades', link: '/panel/1.0/legacy_upgrade' },
                    ],
                },
                {
                    text: 'Wings',
                    items: [
                        { text: 'Installing Wings', link: '/wings/1.0/installing' },
                        { text: 'Upgrading Wings', link: '/wings/1.0/upgrading' },
                        { text: 'Migrating to Wings', link: '/wings/1.0/migrating' },
                        { text: 'Additional Configuration', link: '/wings/1.0/configuration' },
                    ],
                },
                {
                    text: 'Tutorials',
                    items: [
                        { text: 'Setting up MySQL', link: '/tutorials/mysql_setup' },
                        { text: 'Creating SSL Certificates', link: '/tutorials/creating_ssl_certificates' },
                    ],
                },
                {
                    text: 'Guides',
                    items: [
                        { text: 'Using Mounts', link: '/guides/mounts' },
                        { text: 'Database Hosts', link: '/guides/database_hosts' },
                    ],
                },
            ],
        },
        socialLinks: [
            { icon: 'discord', link: 'https://discord.gg/pterodactyl' },
            { icon: 'github', link: 'https://github.com/pterodactyl/panel' },
        ],
        editLink: {
            pattern: 'https://github.com/pterodactyl/documentation/edit/master/docs/:path',
            text: 'Help us improve this page.',
        },
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium',
            },
        },
    },
});
