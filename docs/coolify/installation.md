---
sidebar_position: 1
---

# Installation

## Minimum Requirements for Coolify

Coolify builds docker images for applications, so it is a CPU intensive process. Other resources are depending on what you would like to host.

- 2 CPUs
- 2 GBs memory
- 30+ GB of storage for Docker images.


## Supported Operating Systems

- Ubuntu

# Ways To Install
:::tip Recommended way

Automated method recommended for first time users, or if you want Coolify to handle everything for you.

:::
## Automated

```bash
/bin/bash -c "$(curl -fsSL https://get.coollabs.io/coolify/install.sh)"
```

You can always check the source code of this script [here](https://github.com/coollabsio/get.coollabs.io/blob/main/static/coolify/install.sh).

## Manually

1. Need to set the required environment variables in a `.env` file (see [below](./installation.md#environment-variables))
2. Need to have [Docker Engine v20.10+](https://docs.docker.com/engine/install/) installed on your server.

### Environment Variables

Coolify needs to have the following environment variables to be set in-advance. (This is done automatically with the automated installation script.)

```text
COOLIFY_APP_ID=
COOLIFY_SECRET_KEY=
COOLIFY_DATABASE_URL=file:../db/prod.db
COOLIFY_SENTRY_DSN=https://9e7a74326f29422584d2d0bebdc8b7d3@o1082494.ingest.sentry.io/6091062
COOLIFY_IS_ON=docker
```

| Variable             | Explanation                                                                 |
| -------------------- | --------------------------------------------------------------------------- |
| COOLIFY_APP_ID       | A random UUID. Used to differentiate between installed instances.           |
| COOLIFY_SECRET_KEY   | Used to encrypt all kind of private data. **Must be `32` characters long**. |
| COOLIFY_DATABASE_URL | SQLite database URL. **Must be under `../db`** .                            |
| COOLIFY_SENTRY_DSN   | Sentry error report DSN. Not mandatory, but preferred.                      |
| COOLIFY_IS_ON        | Where Coolify is deployed to. Currently only **`docker`** supported.        |
