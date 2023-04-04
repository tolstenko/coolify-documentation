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
      content: "@andrasbacsai"
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

# Building Blocks

## Servers
Servers are VPS, baremetal (or even a Raspberry Pi) servers, reachable through SSH. These will be managed and configured by Coolify.

## Projects

Projects are the main building blocks. They will group together different environments into a single place.

![D1](/coolify/D1.png)

## Environments

All projects should have a `production` environment, that is not deletable, but renameable.
Each environment consists of resources (Applications, Databases, Services...). 

You can make a 1-on-1 clone of an environment or use a fresh one.

### 1-on-1 clone
Like for example, you can clone the `production` environment to `staging` and all resources defined will be cloned with the same configuration. 

::: tip
Useful if you would like to have a copy of your production resources for testing or integration.
:::

### Fresh one
No resources will be defined. You can add them manually.
