---
head:
  - - meta
    - name: description
      content: Coolify - Destinations
  - - meta
    - name: keywords
      content: destinations coollabs coolify 
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
# Destinations

Destinations define where to deploy your application, database, or service.

:::tip
Destinations are helpful to create `network separation from different applications`. Applications, databases, and services within the same network could communicate with each other.
:::

## Supported Destinations
- [Local Docker Engine](#local-docker-engine)
- [Remote Docker Engine](#remote-docker-engine)


## Local Docker Engine
It means all resources are deployed to the same server as Coolify is running on.

### Configuration
1. **Engine** - `/var/run/docker.sock` - You cannot modify this.
2. **Network** - Used to create docker networks within the defined Docker Engine.
3. **Coolify Proxy** - This is a special proxy based on [Traefik](https://traefik.io/traefik/), configured automatically by Coolify. 

## Remote Docker Engine
Allows you to use any kind of server as a destination endpoint.

You can have one Coolify instance as a control-plane/dashboard and deploy to unlimited number of remote servers.

### Requirements
The server needs to have:
1. Install Docker Engine (20.11+) - [instructions](https://docs.docker.com/engine/install/).
2. Add SSH `public key` to `.ssh/authorized_keys` file in the proper user's home directory, recommended `root`, but it can be [any user who have access to `Docker Engine`](https://docs.docker.com/engine/install/linux-postinstall/).
3. Add the `private key` of the same SSH key added to the remote server in the `Settings/SSH Keys` menu.
