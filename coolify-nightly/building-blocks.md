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

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

# Building Blocks

The count is: {{ count }}

<button @click="count++">Increment</button>

## Servers
Servers could be a VPS, baremetal, or even a Raspberry Pi, reachable through SSH. These will be managed, configured and monitoried by Coolify.
This means that some of the system administrator's task are automatically done by Coolify.

If something happens on your server (server is full), you will get notified via your set notification system (webhook, email, discord, slack, telegram).

:::tip
An unusual, but supported use-case for Coolify is to attach your servers into a Coolify instance and they will be monitored, updated periodically etc. You do not need to use other things.
:::

## Projects
If you would like to use Coolify to deploy a few resources, projects is the base building block you will get. It will group together different environments into a single tree structure.

<iframe src="https://link.excalidraw.com/readonly/SfP5Gy3PXPi8TqiJmwSY" width="100%" height="500px" style="border: none;"></iframe>

## Environments
All projects, by default have a `production` environment, that is not deletable, but renameable.
Environments consists of resources, like `applications`, `databases` & `services`, etc.

If you make a new enviroment, you could decide if you would like to make a 1-on-1 clone or use a clean one.

### 1-on-1 clone
Like for example, you can clone the `production` environment to `staging` and all resources defined will be cloned with the same configuration, except domains & environments variables.

::: tip Quick Tip
Useful if you would like to have a copy of your production resources for `testing` or `integration`.
:::
