---
head:
  - - meta
    - name: description
      content: Coolify - Settings
  - - meta
    - name: keywords
      content: coollabs coolify 
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
Only users in the `root team` could configure system-wide settings.

## URL Instance Domain
> optional

You can specify a Fully Qualified Domain Name (FQDN, eg: https://example.com) for your Coolify instance. 

Without this configuration you need to use `<ip address>:3000` to reach your Coolify instance and all webhooks will be going to the ip address.

:::warning
If you change the domain name and you already have an existing integration with any Git provider, the webhooks (for autobuild and PR deployments, etc...) will fail. You need to reconfigure the URL manually in the GitHub/GitLab App.
:::

## Default Redirect URL
> optional

Redirect not configured services to this page. Like if you set a DNS entry for `example.com`, but you do not have anything running on this domain, Coolify Proxy will redirect any requests to this `Default Redirect URL`.


## Generate SSL for www and non-www
> default: off

You can specify if you would like to reach your Coolify instance on www & non-www as well, or just the defined FQDN (https://example.com -> non-www).

## Public Port Range
> default: 9000-9100

Port rage for on-demand TCP proxies (public databases), services (if need additional proxies).

:::tip
 Allow these ports in your [firewall settings](./firewall.md).
:::

## DNS Check
> default: on

By default, all DNS settings would be resolvable by Let's Encrypt servers and Coolify. If you are using behind a reverse proxy or tunnel, you can disable this check to prevent unnecessary errors.

## Custom DNS Servers
> optional

> default: the OS configured DNS servers will be used

If you have an internal DNS server, you can specify them here with comma separated a list, for example: `1.1.1.1,8.8.8.8`.

## Registration allowed
> default: on, but after the first registration, off.

After the first registration, this option is enabled to prevent unwanted registrations.

## Auto Update Coolify
> default: off

If enabled, Coolify checks for update every ~10 minutes and apply them automatically if there is a new version available.

:::tip
All resources (applications, databases, services) are keep running and available. Coolify does not required to run them. Only Git webhooks will fail during the update.
:::

## SSH Keys
You can add SSH Keys (private keys) to your Coolify instance, which can be used to connect to a [Remote Docker Engine](./destinations.md#remote-docker-engine).

## SSL Certificates
You can add custom SSL certificates to Coolify Proxy, even self-signed.
