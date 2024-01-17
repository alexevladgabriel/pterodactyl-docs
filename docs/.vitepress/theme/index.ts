// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';

export default {
    extends: DefaultTheme,
    Layout: () => h(DefaultTheme.Layout, null),
    enhanceApp({ app }) {
        enhanceAppWithTabs(app);
    },
} satisfies Theme;
