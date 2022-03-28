---
sidebar_position: 8
---

# Services

You can easily host one-click services with Coolify. These services includes:

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

Some applications could take several minutes to start up.

## Requirements
Each application requires a specific amount of CPU/memory/storage. If you would like to host more, have a larger server, not a $5 one, please.

## Persistency

All data are persistent. That means, if you stop a service, all your data persist on a Docker Volume. If you stop/start a service, you will keep your data as-is.

## Secrets
There are some predefined secrets on the frontend, that are generated automatically (like passwords, users.) or you can fill manually. If you need any futher environment variable, you can define them in the secrets tab.