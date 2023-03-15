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

# Concepts

This section provides context on the concepts used on the application.

Let's start with Servers and Destinations.

- Servers. We can manage servers, no matter if it's a standalone docker or swarm.
  - It's a VPS. There is an IP, user, port, and private key. There can also be a jump server.
- Destinations. We make operations and automations on destinations. It's basically a network inside the docker engine.

- For Docker Containers, we need both a Server and a Destination.
- For Kubernetes, we do not manage servers, so they will have only a destination (Kubernetes API) that is separated by namespaces.
