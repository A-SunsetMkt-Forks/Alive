// const { t } = useI18n();
// import {  } from "./i18n/locales";

export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Alive',
      description: 'Bring your favorite character to Alive.',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'Alive Docs',
      showTitle: true,
      darkModeToggle: true,
      languageSwitcher: {
        enable: false,
        triggerType: 'icon',
        dropdownType: 'select',
      },
      logo: {
        light: '/app-icon.png',
        dark: '/app-icon.png',
      },
      nav: [
        {
          title: ("nav.Docs"),
          links: [
            {
              title: ("nav.GettingStarted"),
              to: "/getting-started/introduction",
              description: ("nav.GettingStartedDescription"),
            },
            {
              title: ("nav.Installation"),
              to: "/getting-started/installation",
              description: ("nav.InstallationDescription"),
            },
            {
              title: ("nav.Components"),
              to: "/components",
              description: ("nav.ComponentsDescription"),
              target: "_self",
            },
            {
              title: "Inspira UI v1",
              to: "https://v1.inspira-ui.com",
              description: ("nav.V1DocsDescription"),
              target: "_blank",
            },
          ],
        },
        {
          title: "Credits",
          links: [
            {
              title: "Aceternity UI",
              to: "https://ui.aceternity.com/",
              description:
                "For providing the inspiration and permission to adapt the original designs.",
              target: "_blank",
            },
            {
              title: "Magic UI",
              to: "https://magicui.design/",
              description: "For providing the inspiration for designs.",
              target: "_blank",
            },
            {
              title: "shadcn-vue",
              to: "https://www.shadcn-vue.com/",
              description: "For the Vue port of shadcn-ui and contributions to some components",
              target: "_blank",
            },
            {
              title: "shadcn-docs-nuxt",
              to: "https://github.com/ZTL-UwU/shadcn-docs-nuxt",
              description: "For the beautifully crafted Nuxt documentation site.",
              target: "_blank",
            },
          ],
        },
        {
          title: ("nav.Community"),
          links: [
            {
              title: "GitHub",
              to: "https://github.com/unovue/inspira-ui",
              description: ("nav.GitHubDescription"),
              target: "_blank",
            },
            {
              title: "Discord",
              to: "https://discord.gg/Xbh5DwJRc9",
              description: ("nav.DiscordDescription"),
              target: "_blank",
            },
            {
              title: ("nav.Forum"),
              to: "https://github.com/unovue/inspira-ui/discussions",
              target: "_blank",
              description: ("nav.ForumDiscord"),
            },
          ],
        },
      ],
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/unovue/inspira-ui",
          target: "_blank",
        },
        {
          icon: "prime:twitter",
          to: "https://x.com/rahulv_dev",
          target: "_blank",
        },
        {
          icon: "ri:discord-line",
          to: "https://discord.gg/Xbh5DwJRc9",
          target: "_blank",
        },
        {
          icon: "ri:bluesky-line",
          to: "http://bsky.app/profile/inspira-ui.com",
          target: "_blank",
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
      folderStyle: "tree",
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Everything is about Furina.❤️',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/TopSea/Alive',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/TopSea/Alive',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/TopSea/Alive/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});