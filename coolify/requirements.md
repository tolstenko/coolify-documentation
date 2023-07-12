---
head:
  - - meta
    - name: description
      content: Coolify - Installation
  - - meta
    - name: keywords
      content: installation coollabs coolify 
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: '@heyandras'
  - - meta
    - name: twitter:title
      content: Coolify
  - - meta
    - name: twitter:description
      content: An open-source & self-hostable Heroku / Netlify alternative.
  - - meta
    - name: twitter:image
      content: https://cdn.coollabs.io/assets/coollabs/og-image-documentation.png
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://coolify.io
  - - meta
    - property: og:title
      content: Coolify
  - - meta
    - property: og:description
      content: An open-source & self-hostable Heroku / Netlify alternative.
  - - meta
    - property: og:site_name
      content: Coolify
  - - meta
    - property: og:image
      content: https://cdn.coollabs.io/assets/coollabs/og-image-documentation.png
---

# Requirements

## Supported Architectures

`AMD64` and `ARM` architecture are supported.

## Supported Operating Systems

`Debian` based servers are supported, due to the installation script (Coolify
itself supports every OS that could run a Docker Engine). If you would like to
have other, please consider
[open an issue on GitHub](https://github.com/coollabsio/coolify/issues/new).

## Resources

Minimum required resources for Coolify:

- 2 CPUs
- 2 GBs memory
- 30+ GB of storage for the images.

## Additional Resources

Based on what you would like to run with Coolify, additional resources (CPU, memory, disk) are
needed.

Self-hosting could be heavy if you would like to run a lot of things.

For example, I'm hosting most of my production stuffs on a server with:

- 8GB of memory (average usage 3.5GB)
- 4 CPUs (average usage ~20-30%)
- 150GB disk (usage 40GB)

Hosting the following things:

- 3 NodeJS apps
- 4 Static sites
- Plausible Analytics (for visitor analytics)
- Fider (feedback tool)
- UptimeKuma (uptime monitoring)
- Ghost (my newsletters)
- 3 Redis databases
- 2 PostgreSQL databases

:::tip
All static sites and one of the NodeJS applications are cached on
[BunnyCDN](https://bunny.net), so the usage is super low on my server.
:::
