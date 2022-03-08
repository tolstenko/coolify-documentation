---
sidebar_position: 8
---

# Services

You can easily host one-click services with Coolify. These services includes:

- [Plausible Analytics](https://plausible.io)
- [NocoDB](https://nocodb.com)
- [MinIO](https://min.io)
- [VSCode Server](https://github.com/cdr/code-server)
- [WordPress](https://wordpress.org)
- [VaultWarden](https://github.com/dani-garcia/vaultwarden)
- [LanguageTool](https://languagetool.org/)

Some applications could take several minutes to start up.

## Persistency

All data are persistent. That means, if you stop a service, all your data persist on a Docker Volume. If you stop/start a service, you will keep your data as-is.

## Secrets
There are some predefined secrets on the frontend, that are generated automatically (like passwords, users.) or you can fill manually. If you need any futher environment variable, you can define them in the secrets tab.