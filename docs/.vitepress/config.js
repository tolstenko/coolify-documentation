import { defineConfig } from "vitepress"

export default defineConfig({
  title: 'coolLabs',
  description: 'Documentation for all applications & services of coolLabs',
  themeConfig: {
    lastUpdated: true,
    footer: {
      message: 'Released under the Apache License.',
      copyright: 'Copyright © 2019-present Andras Bacsai'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/coollabsio' },
      { icon: 'twitter', link: 'https://twitter.com/andrasbacsai' },
      { icon: 'discord', link: 'https://discord.gg/6rDM4fkymF' }
    ],
    editLink: {
      pattern: 'https://github.com/coollabsio/documentation/edit/main/docs/:path'
    },
    nav: [
      { text: 'Feedback', link: 'https://feedback.coolify.io/' },
      { text: 'Sponsorship', link: 'https://opencollective.com/coollabsio' },
    ],
    sidebar: {
      '/coolify/services/': [
        ...sidebarProducts(),
        ...sidebarCoolify(),
        {
          text: 'Services',
          items: [
            { text: 'Plausible Analytics', link: '/coolify/services/plausible-analytics' },
            { text: 'Wordpress', link: '/coolify/services/wordpress' },
          ]
        }
      ],
      '/coolify/applications/': [
        ...sidebarProducts(),
        ...sidebarCoolify(),
        {
          text: 'Build Packs',
          items: [
            { text: 'Static', link: '/coolify/applications/static' },
            { text: 'NodeJS', link: '/coolify/applications/nodejs' },
            { text: 'VueJS', link: '/coolify/applications/vuejs' },
            { text: 'NuxtJS', link: '/coolify/applications/nuxtjs' },
            { text: 'React/Preact', link: '/coolify/applications/react-preact' },
            { text: 'Gatsby', link: '/coolify/applications/gatsby' },
            { text: 'Svelte', link: '/coolify/applications/svelte' },
            { text: 'PHP', link: '/coolify/applications/php' },
            { text: 'Python', link: '/coolify/applications/python' },
            { text: 'Laravel', link: '/coolify/applications/laravel' },
            { text: 'Rust', link: '/coolify/applications/rust' },
            { text: 'Docker', link: '/coolify/applications/docker' },
            { text: 'Deno', link: '/coolify/applications/deno' },
          ]
        }
      ],
      '/coolify': [
        ...sidebarProducts(),
        ...sidebarCoolify()
      ],
      '/fonts': [
        ...sidebarProducts(),
        {
          text: 'Fonts',
          items: [
            { text: 'Get Started', link: '/fonts/get-started' },
          ]
        }
      ],
      '/': [
        ...sidebarProducts()
      ],
    },
  }
})

function sidebarProducts() {
  return [
    {
      text: 'Welcome',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/' },
        { text: 'Who we are?', link: '/who-we-are' },
        { text: 'Contact', link: '/contact' },
      ]
    },
    {
      text: 'Products',
      items: [
        { text: 'Coolify', link: '/coolify' },
        { text: 'Fonts', link: '/fonts' },
      ]
    }
  ]
}

function sidebarCoolify() {
  return [
    {
      text: 'Coolify',
      items: [
        { text: 'Installation', link: '/coolify/installation' },
        { text: 'Git Sources', link: '/coolify/sources' },
        { text: 'Destinations', link: '/coolify/destinations' },
        { text: 'Applications', link: '/coolify/applications/' },
        { text: 'Databases', link: '/coolify/databases/' },
        { text: 'Services', link: '/coolify/services/' },
        { text: 'Teams', link: '/coolify/teams' },
      ]
    },
  ]
}