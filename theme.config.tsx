import { Discord, Github } from "@/components/Social";
import { DocsThemeConfig } from "nextra-theme-docs";
import { GitHubIcon } from "nextra/icons";

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
  project: {
    icon: GitHubIcon,
    link: "https://github.com/pterodactyl/panel",
  },
  navbar: {
    // component: Navigation,
    extraContent: <Discord />,
  },
};

export default config;
