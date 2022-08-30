---
head:
  - - meta
    - name: description
      content: Sponsorship coolLabs
  - - meta
    - name: keywords
      content: sponsorship coollabs coolify 
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: '@andrasbacsai'
  - - meta
    - name: twitter:title
      content: Coolify
  - - meta
    - name: twitter:description
      content: An open-source & self-hostable Heroku / Netlify alternative.
  - - meta
    - name: twitter:image
      content: https://cdn.coollabs.io/assets/coollabs/og-image-applications.png
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
      content: https://cdn.coollabs.io/assets/coollabs/og-image-applications.png
---
# Static 
Base docker image: [webdevops/nginx:alpine](https://hub.docker.com/r/webdevops/nginx)

Your application will be served as a static site. 

You can define install or build commands, so it will build it before serving your static site. Think of the following frameworks: React, Astro, Nuxt, SvelteKit, Gatsby, etc.

You can customize the base image with environment variables, see the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/nginx.html).