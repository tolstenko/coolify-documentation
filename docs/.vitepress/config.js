import { defineConfig } from "vitepress";

export default defineConfig({
  lang: 'en-US',
  title: "coolLabs",
  description: "Documentation for all applications & services of coolLabs",
  lastUpdated: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  cleanUrls: 'with-subfolders',
  themeConfig: {
    logo: '/icon.png',
    footer: {
      message: "Released under the Apache License.",
      copyright: "Copyright © 2019-present Andras Bacsai",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/coollabsio" },
      { icon: "twitter", link: "https://twitter.com/andrasbacsai" },
      { icon: "discord", link: "https://coollabs.io/discord" },
    ],
    editLink: {
      pattern:
        "https://github.com/coollabsio/documentation/edit/main/docs/:path",
    },
    nav: [
      { text: "Feedback", link: "https://feedback.coolify.io/" },

    ],
    sidebar: {
      "/": [
        {
          text: "General",

          items: [
            { text: "Introduction", link: "/" },
            { text: "Sponsorship", link: "/sponsorship" },
            { text: "Contact", link: "/contact" },
          ]
        },
        {
          text: "Coolify",
          items: [
            { text: "Get Started", link: "/coolify/" },
            { text: "Architecture", link: "/coolify/architecture" },
            { text: "Installation", link: "/coolify/installation" },
            { text: "Settings", link: "/coolify/settings" },
            { text: "Users", link: "/coolify/users" },
            { text: "Teams", link: "/coolify/teams" },
            { text: "Sources", link: "/coolify/sources" },
            { text: "Destinations", link: "/coolify/destinations" },
            {
              text: "Applications", link: "/coolify/applications/",
              // items: [
              //   {
              //     text: "Heroku", link: "/coolify/applications/heroku"
              //   },
              //   {
              //     text: "Static Sites", link: "/coolify/applications/static"
              //   },
              //   {
              //     text: "Deno", link: "/coolify/applications/deno"
              //   },
              //   {
              //     text: "NodeJS", link: "/coolify/applications/nodejs"
              //   },
              //   {
              //     text: "VueJS", link: "/coolify/applications/vuejs"
              //   },
              //   {
              //     text: "NuxtJS", link: "/coolify/applications/nuxtjs"
              //   },
              //   {
              //     text: "NextJS", link: "/coolify/applications/nextjs"
              //   },
              //   {
              //     text: "React/Preact", link: "/coolify/applications/react-preact"
              //   },
              //   {
              //     text: "Gatsby", link: "/coolify/applications/gatsby"
              //   },
              //   {
              //     text: "Svelte", link: "/coolify/applications/svelte"
              //   },
              //   {
              //     text: "PHP", link: "/coolify/applications/php"
              //   },
              //   {
              //     text: "Python", link: "/coolify/applications/python"
              //   },
              //   {
              //     text: "Laravel", link: "/coolify/applications/laravel"
              //   },
              //   {
              //     text: "Rust", link: "/coolify/applications/rust"
              //   },
              //   {
              //     text: "Docker", link: "/coolify/applications/docker"
              //   },
              // ]
            },
            { text: "Databases", link: "/coolify/databases" },
            {
              text: "Services", link: "/coolify/services/", items: [
                // {
                //   text: "Plausible Analytics", link: "/coolify/services/plausible-analytics"
                // },
                // {
                //   text: "WordPress", link: "/coolify/services/wordpress"
                // },
              ]
            },
          ]
        },
        {
          text: "coolLabs Fonts",
          items: [
            { text: "Introduction", link: "/fonts/" },
            { text: "Get Started", link: "/fonts/get-started" },
          ]
        },
      ],

    }
  },
});
