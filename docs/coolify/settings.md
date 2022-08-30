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
# Settings
Users in the `root team` can configure system-wide settings here.


## URL (FQDN)

This is `optional.`

You can specify a domain name to your Coolfiy instance. Otherwise you need to use `ip:3000` to reach your instance and all webhooks will be going to this destination.

## Public Port Range

Used for:
- Public databases
- Services with special needs
- SSH connections to Remote Docker Engines

:::tip
 Allow these ports in your firewall.
:::

## DNS Check
By default, all DNS settings would be resolvable by Let's Encrypt servers and Coolify. If you are using behind a reverse proxy or tunnel, you can disable this check to prevent unnecessary errors.

## Custom DNS Servers

This is `optional.`

If you have an internal DNS server, you can specify them here. Otherwise, the OS configured DNS servers will be used.

## Registration allowed
After the first registration, this option is enabled to prevent unwanted registrations.

## Auto Update Coolify (beta)
If you enable it, the update process of Coolify will be done automatically. You do not need to click on that pink shiney button anymore. 

## SSH Keys
You can add SSH Keys (private keys) to your Coolify instance, which can be used to connect to a [Remote Docker Engine](./destinations.md#remote-docker-engine).