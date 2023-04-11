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
      "/": [
        {
          text: "General",
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Sponsorship", link: "/sponsorship" },
            { text: "Contact", link: "/contact" },
          ],
        },
        {
          text: "Coolify v4 (nightly)",

          items: [
            { text: "⚠️ Introduction", link: "/coolify-nightly/" },
            { text: "⚠️ Building Blocks", link: "/coolify-nightly/building-blocks" },
            { text: "⚠️ Configurations", link: "/coolify-nightly/configurations" },
            // { text: "Concepts", link: "/coolify-nightly/concepts" },
          ],
        },
        {
          text: "Coolify v3",
          items: [
            { text: "Introduction", link: "/coolify/" },
            { text: "Architecture", link: "/coolify/architecture" },
            { text: "Requirements", link: "/coolify/requirements" },
            { text: "Installation", link: "/coolify/installation" },
            { text: "Firewall", link: "/coolify/firewall" },
            { text: "Settings", link: "/coolify/settings" },
            { text: "Identity & Access Management", link: "/coolify/iam" },
            {
              text: "Applications",
              link: "/coolify/applications/",
              items: [
                {
                  text: "Heroku",
                  link: "/coolify/applications/heroku",
                },
                {
                  text: "Static Sites",
                  link: "/coolify/applications/static",
                },
                {
                  text: "Deno",
                  link: "/coolify/applications/deno",
                },
                {
                  text: "NodeJS",
                  link: "/coolify/applications/nodejs",
                },
                {
                  text: "VueJS",
                  link: "/coolify/applications/vuejs",
                },
                {
                  text: "NuxtJS",
                  link: "/coolify/applications/nuxtjs",
                },
                {
                  text: "NextJS",
                  link: "/coolify/applications/nextjs",
                },
                {
                  text: "React/Preact",
                  link: "/coolify/applications/react-preact",
                },
                {
                  text: "Gatsby",
                  link: "/coolify/applications/gatsby",
                },
                {
                  text: "Svelte",
                  link: "/coolify/applications/svelte",
                },
                {
                  text: "PHP",
                  link: "/coolify/applications/php",
                },
                {
                  text: "Python",
                  link: "/coolify/applications/python",
                },
                {
                  text: "Laravel",
                  link: "/coolify/applications/laravel",
                },
                {
                  text: "Rust",
                  link: "/coolify/applications/rust",
                },
                {
                  text: "Docker",
                  link: "/coolify/applications/docker",
                },
                {
                  text: "Docker Compose",
                  link: "/coolify/applications/docker-compose",
                },
              ],
            },
            { text: "Databases", link: "/coolify/databases" },
            {
              text: "Services",
              link: "/coolify/services",
            },
            { text: "Git Sources", link: "/coolify/sources" },
            { text: "Destinations", link: "/coolify/destinations" },
            { text: "FAQ", link: "/coolify/faq" },
          ],
        },
        {
          text: "coolLabs Fonts",
          items: [
            { text: "Introduction", link: "/fonts/" },
            { text: "Get Started", link: "/fonts/get-started" },
          ],
        },
      ],
    },
  },
});
