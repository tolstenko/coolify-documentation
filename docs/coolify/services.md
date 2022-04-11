---
sidebar_position: 8
---

# Services

Services are popular open-sourced and self-hostable applications, provided as a service for you.

You can suggest new services by [opening an issue on GitHub](https://github.com/coollabsio/coolify/issues/new).

## Types of services supported

- [WordPress](https://wordpress.org)
- [Ghost](https://ghost.org)
- [Plausible Analytics](https://plausible.io)
- [NocoDB](https://nocodb.com)
- [VSCode Server](https://github.com/cdr/code-server)
- [MinIO](https://min.io)
- [VaultWarden](https://github.com/dani-garcia/vaultwarden)
- [LanguageTool](https://languagetool.org)
- [n8n](https://n8n.io)
- [Uptime Kuma](https://github.com/louislam/uptime-kuma)
- [Meilisearch](https://www.meilisearch.com)

Some services could take several minutes to start up.

## Requirements
Each service requires a specific amount of CPU / memory / storage. Choose your services based on their requirements.

## Persistency

All data are persistent. That means, if you stop a service, all your data persist on a Docker Volume. If you start it again, you will keep your data as-is.

## Secrets
There are some predefined secrets that are necessary for the service to start and generated automatically (like passwords, users, urls), but you can override them anytime, in the `secrets` menu.