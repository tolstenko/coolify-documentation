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
      content: "@heyandras"
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

# Configurations - WIP

All data that is configured or used by Coolify is available on the host filesystem. If something goes wrong with Coolify, you will be still able to manage your applications.

This includes:

- docker-compose files
- proxy configurations
- SSH Keys
- TBD

## Persistent Directories

| Type                        | Host System                 | Coolify Container                               |
| --------------------------- | --------------------------- | ----------------------------------------------- |
| Base                        | `/data/coolify`             | `/var/www/html/app/storage/coolify`             |
| [Deployments](#deployments) | `/data/coolify/deployments` | `/var/www/html/app/storage/coolify/deployments` |
| [SSH Keys](#ssh-keys)       | `/data/coolify/ssh-keys`    | `/var/www/html/app/storage/coolify/ssh-keys`    |
| [Proxy](#proxy)             | `/data/coolify/proxy`       | `/var/www/html/app/storage/coolify/proxy`       |

### Deployments

You can always find the latest successfully deployed application details in the `latest` directory.

```bash{3}
├── deployments
│   ├── my-first-application
│   │   ├── latest
│   │   │   ├── docker-compose.yaml
│   │   │   ├── .env
│   │   ├── <deployment timestamp>
│   │   ├── <deployment timestamp>
│   │   ├── <deployment timestamp>
│   ├── my-second-application
│   │   ├── latest
│   │   │   ├── docker-compose.yaml
│   │   ├── <deployment timestamp>
```

### SSH Keys

WIP - We should consider if we really would like to store ssh keys permantently. My first thought is to NOT.

### Proxy

WIP
