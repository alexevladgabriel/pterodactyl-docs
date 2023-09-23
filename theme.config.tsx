import { Discord, Github } from "@/components/Social";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  sidebar: {
    defaultMenuCollapseLevel: 10000,
    toggleButton: true,
  },
  docsRepositoryBase: "https://github.com/pterodactyl/documentation",
  logo: <span>Pterodactyl</span>,
  editLink: {
    text: "Edit this page on GitHub",
  },
  navbar: {
    // component: Navigation,
    extraContent: (
      <>
        <Github />
        <Discord />
      </>
    ),
  },
};

export default config;
