---
head:
  - - meta
    - name: description
      content: Coolify - Applications - Svelte
  - - meta
    - name: keywords
      content: applications svelte coollabs coolify 
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
# Svelte
Base docker image: [webdevops/nginx:alpine](https://hub.docker.com/r/webdevops/nginx)

What is the difference between these and the `static` build pack? The main difference is the predefined configurations. You do not need to set the proper install/build commands, publish directories, etc. Coolify will handle it for you.

You can customize this image with environment variables, see the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/nginx.html).