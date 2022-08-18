# Installation

## Minimum Requirements

Coolify builds images locally for applications, which is a CPU-intensive process. 

- 2 CPUs
- 2 GBs memory
- 30+ GB of storage for the images.

Other resources depend on the resource requirements. For example, WordPress needs a different CPU/memory than a Redis database.

Currently, only `Ubuntu` servers are supported. If you would like to have other, please consider [open an issue on GitHub](https://github.com/coollabsio/coolify/issues/new).

## Recommended ways

### Automated
Questions asked, but it is not that complicated.

```bash
wget -q https://get.coollabs.io/coolify/install.sh -O install.sh; sudo bash ./install.sh
```

### Scripted / fully automated
No questions asked. Could be used to install Coolify programmatically.

:::tip Recommended way
If you want, Coolify to handle everything for you.
:::

```bash
wget -q https://get.coollabs.io/coolify/install.sh -O install.sh; sudo bash ./install.sh -f
```

## Options
```sh
Usage: install.sh [options...]
    -h, --help                  Show this help menu.
    -v, --version               Show script version.

    -d, --debug                 Show debug logs during installation.
    -f, --force                 Force installation, no questions asked.

    -r, --restart                Only restart Coolify. Nothing more.

    -n, --do-not-track          Opt-out of telemetry. You can set export DO_NOT_TRACK=1 in advance.

    -a, --auto-update           Warning: TESTING PHASE, DO NOT USE IT YET! Enable auto update feature of Coolify.

    -w, --white-labeled         Install white-labeled version. Contact me before using it (https://docs.coollabs.io/contact)
    -i, --white-labeled-logo    Add your remote logo for your white-labeled version. Should be a http/https URL.
```

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
COOLIFY_WHITE_LABELED_ICON=
COOLIFY_AUTO_UPDATE=false
```

| Variable              | Explanation                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------- |
| COOLIFY_APP_ID        | A random UUID. Used to differentiate between installed instances.                        |
| COOLIFY_SECRET_KEY    | Used to encrypt all kinds of private data. **Must be `32` characters long**.              |
| COOLIFY_DATABASE_URL  | SQLite database URL. **Must be under `../db`** .                                         |
| COOLIFY_SENTRY_DSN    | Sentry error report DSN. Not mandatory.                                                  |
| COOLIFY_IS_ON         | Where Coolify is deployed to. Currently, only **`docker`** is supported.                     |
| COOLIFY_WHITE_LABELED | It removes the "branding" of your Coolify instance. Please get in touch with me before using this. |
| COOLIFY_WHITE_LABELED_ICON | A remote icon to be replaced on the login/registration page. |
| COOLIFY_AUTO_UPDATE | It updates your Coolify instance automatically behind the scenes. |


### Start Coolify

```sh
docker run -tid --env-file .env -v /var/run/docker.sock:/var/run/docker.sock -v coolify-db-sqlite coollabsio/coolify:latest /bin/sh -c "env | grep COOLIFY > .env && docker compose up -d --force-recreate"
```

Why is this complicated command instead of just a `docker compose up?`

Coolify needs to be started inside docker's namespace. In short, it is necessary for the auto-update process.

## Change configuration of a running instance

You can always execute the installation script with different options to reconfigure Coolify.

For example: 
- If you want to opt-out of tracking, execute the install script with `--do-not-track`.
- If you want to use the white-labeled version, execute the install script with `--white-labeled`.

:::warning
  Some configurations are not preserved if you would like to change them on an already configured instance. 
  
  These options are the following: `--white-labeled`, `--do-no-track`, `--white-labeled-icon`.
  
  So if you installed Coolify with `--do-no-track` before, and you want to also use `--white-labeled` option, you need execute the install script with `--do-not-track` and `--white-labeled`!
:::

## Restart Coolify

If your Coolify instance stops working (eg: OOM), you can restart it with the following command.

```bash
wget -q https://get.coollabs.io/coolify/install.sh -O install.sh; sudo bash ./install.sh -f
```

## Registration

After installation, the first registered user will be the `root/admin` user of your Coolify instance. It will see/change all resources deployed, access system-wide configurations, one-click update process, etc.

> By default, **registration is disabled** afterward. You can enable registration in the `Settings` menu.

Every other user won't access system-wide configurations and only see their team's resources.

### Type of authentication
Currently, `email/password` registration is supported.


### Reset Password

Admins can reset the passwords of team members in the `Settings` menu. If a password reset is requested, the user has 10 minutes to do it. 

Password reset is done through the login process. The user's new password will be the one used on the login form. 

After 10 minutes, the old password can be used to log in, and the password reset process is stopped. 


## SSL Certificates

Coolify would generate SSL certificates for your resources if you defined the URL starting with HTTPS. 

### Let's Encrypt
Coolify using [Let's Encrypt](https://letsencrypt.org/) helper. Only used if you use Coolify Proxy. 

### www vs non-www
Certificates are only generated for the defined URL. If you specify a non-www URL, only the non-www will have a certificate. You cannot reach the www URL. 

>Usually, you need to redirect www to non-www on the DNS layer.

If you would like to generate SSL certificates for both, there is an option called `Generate SSL for www and non-www?` for applications and services.