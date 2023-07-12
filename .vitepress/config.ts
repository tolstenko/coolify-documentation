import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "coolLabs",
  description: "Documentation for all applications & services of coolLabs",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: "/icon.png",
    footer: {
      message: "Released under the Apache License.",
      copyright: "Copyright © 2019-present Andras Bacsai",
    },
    algolia: {
      appId: "3B2O75UH3P",
      apiKey: "19522a9a6af41ff19c7c9eb76deb098d",
      indexName: "coollabs",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/coollabsio" },
      { icon: "twitter", link: "https://twitter.com/heyandras" },
      { icon: "discord", link: "https://coollabs.io/discord" },
    ],
    editLink: {
      pattern:
        "https://github.com/coollabsio/documentation/edit/main/docs/:path",
    },
    nav: [{ text: "Feedback", link: "https://feedback.coolify.io/" }],
    sidebar: {
      "/": mainSideBar(),
      "/coolify/": [
        ...mainSideBar(),
        {
          text: "Coolify (latest)",
          items: [
            { text: "⚠️ Introduction", link: "/coolify/" },
            {
              text: "⚠️ Building Blocks",
              link: "/coolify/building-blocks",
            },
            {
              text: "⚠️ Configurations",
              link: "/coolify/configurations",
            },
            {
              text: "⚠️ Developer Guide",
              link: "/coolify/developer-guide",
            },
          ],
        },
      ],
      "/coolify-v3/": [
        ...mainSideBar(),
        {
          text: "Coolify",
          items: [
            { text: "Introduction", link: "/coolify-v3/" },
            { text: "Architecture", link: "/coolify-v3/architecture" },
            { text: "Requirements", link: "/coolify-v3/requirements" },
            { text: "Installation", link: "/coolify-v3/installation" },
            { text: "Firewall", link: "/coolify-v3/firewall" },
            { text: "Settings", link: "/coolify-v3/settings" },
            { text: "Identity & Access Management", link: "/coolify-v3/iam" },
            {
              text: "Applications",
              link: "/coolify-v3/applications/",
              items: [
                {
                  text: "Heroku",
                  link: "/coolify-v3/applications/heroku",
                },
                {
                  text: "Static Sites",
                  link: "/coolify-v3/applications/static",
                },
                {
                  text: "Deno",
                  link: "/coolify-v3/applications/deno",
                },
                {
                  text: "NodeJS",
                  link: "/coolify-v3/applications/nodejs",
                },
                {
                  text: "VueJS",
                  link: "/coolify-v3/applications/vuejs",
                },
                {
                  text: "NuxtJS",
                  link: "/coolify-v3/applications/nuxtjs",
                },
                {
                  text: "NextJS",
                  link: "/coolify-v3/applications/nextjs",
                },
                {
                  text: "React/Preact",
                  link: "/coolify-v3/applications/react-preact",
                },
                {
                  text: "Gatsby",
                  link: "/coolify-v3/applications/gatsby",
                },
                {
                  text: "Svelte",
                  link: "/coolify-v3/applications/svelte",
                },
                {
                  text: "PHP",
                  link: "/coolify-v3/applications/php",
                },
                {
                  text: "Python",
                  link: "/coolify-v3/applications/python",
                },
                {
                  text: "Laravel",
                  link: "/coolify-v3/applications/laravel",
                },
                {
                  text: "Rust",
                  link: "/coolify-v3/applications/rust",
                },
                {
                  text: "Docker",
                  link: "/coolify-v3/applications/docker",
                },
                {
                  text: "Docker Compose",
                  link: "/coolify-v3/applications/docker-compose",
                },
              ],
            },
            { text: "Databases", link: "/coolify-v3/databases" },
            {
              text: "Services",
              link: "/coolify-v3/services/",
              items: [
                {
                  text: "Ghost",
                  link: "/coolify-v3/services/ghost",
                },
              ],
            },
            { text: "Git Sources", link: "/coolify-v3/sources" },
            { text: "Destinations", link: "/coolify-v3/destinations" },
            { text: "FAQ", link: "/coolify-v3/faq" },
          ],
        },
      ],
      "/fonts/": [
        ...mainSideBar(),
        {
          text: "Fonts",
          items: [
            { text: "Introduction", link: "/fonts/" },
            { text: "Get Started", link: "/fonts/get-started" },
          ],
        },
      ],
      "/safetyper/": [
        ...mainSideBar(),
        {
          text: "SafeTyper",
          items: [
            { text: "Introduction", link: "/safetyper/" },
            { text: "Pricing", link: "/safetyper/pricing" },
            { text: "License", link: "/safetyper/license" },
          ],
        },
      ],
    },
  },
});

function mainSideBar() {
  return [
    {
      text: "General",
      items: [
        { text: "Introduction", link: "/introduction" },
        { text: "Sponsorship", link: "/sponsorship" },
        { text: "Contact", link: "/contact" },
      ],
    },
    {
      text: "Products",
      items: [
        { text: "Coolify (latest)", link: "/coolify/" },
        { text: "Coolify (v3)", link: "/coolify-v3/" },
        { text: "Fonts", link: "/fonts/" },
        { text: "SafeTyper", link: "/safetyper/" },
      ],
    },
  ];
}
