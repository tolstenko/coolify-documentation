---
sidebar_position: 1
---

# Installation

## Minimum Requirements for Coolify

Coolify builds images locally for applications, which is a CPU-intensive process. 

- 2 CPUs
- 2 GBs memory
- 30+ GB of storage for the images.

Other resources depend on the resource requirements. For example, WordPress needs a different CPU/memory than a Redis database.

Currently, only `Ubuntu` servers are supported. If you would like to have other, please consider [open an issue on GitHub](https://github.com/coollabsio/coolify/issues/new).

# Ways To Install
:::tip Recommended way

The automated method is recommended for first-time users or if you want Coolify to handle everything for you.

:::
## Automated
It will still ask questions and does not overwrite existing configurations.

:::tip
You can use this to reinstall Coolify if something happens to it. The existing configuration will be used.
:::

```bash
/bin/bash -c "$(curl -fsSL https://get.coollabs.io/coolify/install.sh)"
```

## Scripted fully automated
No questions asked. It sets everything required.

```bash
curl -fsSL https://get.coollabs.io/coolify/install.sh | /bin/bash -s -- -y
```

You can always check the source code of this script [here](https://github.com/coollabsio/get.coollabs.io/blob/main/static/coolify/install.sh).

## Manually

1. Need to set the required environment variables in a `.env` file (see [below](./installation.md#environment-variables))
2. Need to have [Docker Engine v20.10+](https://docs.docker.com/engine/install/) installed on your server.

### Environment Variables

Coolify needs to have the following environment variables to be set in advance. (This is done automatically with the automated installation script.)

```text
COOLIFY_APP_ID=
COOLIFY_SECRET_KEY=
COOLIFY_DATABASE_URL=file:../db/prod.db
COOLIFY_SENTRY_DSN=https://9e7a74326f29422584d2d0bebdc8b7d3@o1082494.ingest.sentry.io/6091062
COOLIFY_IS_ON=docker
COOLIFY_WHITE_LABELED=false
```

| Variable              | Explanation                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------- |
| COOLIFY_APP_ID        | A random UUID. Used to differentiate between installed instances.                        |
| COOLIFY_SECRET_KEY    | Used to encrypt all kinds of private data. **Must be `32` characters long**.              |
| COOLIFY_DATABASE_URL  | SQLite database URL. **Must be under `../db`** .                                         |
| COOLIFY_SENTRY_DSN    | Sentry error report DSN. Not mandatory.                                                  |
| COOLIFY_IS_ON         | Where Coolify is deployed to. Currently, only **`docker`** is supported.                     |
| COOLIFY_WHITE_LABELED | It removes the "branding" of your Coolify instance. Please get in touch with me before using this. |


### Start Coolify

```sh
docker run -tid --env-file .env -v /var/run/docker.sock:/var/run/docker.sock -v coolify-db-sqlite coollabsio/coolify:latest /bin/sh -c "env | grep COOLIFY > .env && docker compose up -d --force-recreate"
```

Why is this complicated command instead of just a `docker compose up?`

Coolify needs to be started inside docker's namespace. In short, it is necessary for the auto-update process.