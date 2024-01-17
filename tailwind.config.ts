import type { Config } from 'tailwindcss';

export default {
    darkMode: 'class',
    content: ['./docs/**/*.{html,js,vue,ts,md}', './docs/.vitepress/**/*.{html,js,vue,ts,md}'],
} satisfies Config;
