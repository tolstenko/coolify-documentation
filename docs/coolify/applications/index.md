# Applications

Applications are used to deploy a production version of your applications. All data are based on your provided git repositories.

Coolify not just builds but also configures a reverse proxy (Traefik) automatically and requests an SSL certificate through Let's Encrypt. 

You just need to push your code!

If you have a new build pack you would like to add, raise an idea [here](https://feedback.coolify.io/) to get feedback from the community!

## Types of applications supported
Applications are based on custom build packs (later, it will support cloud-native and Heroku build packs).

Build packs have predefined configurations and build processes, especially for frameworks, like VueJs, Svelte, React, etc.

> These build processes do not handle all the use-cases, just the most commonly used ones. Consider using the `Docker` build pack if you need a custom build process.

- [Static sites](./static.md)
- [NodeJS](./nodejs.md)
- [VueJS](./vuejs.md)
- [NuxtJS](./nuxtjs.md)
- [NextJS](./nextjs.md)
- [React/Preact](./react.md)
- [Gatsby](./gatsby.md)
- [Svelte](./svelte.md)
- [PHP](./php.md)
- [Python](./python.md)
- [Laravel](./laravel.md)
- [Rust](./rust.md)
- [Docker](./docker.md)
- [Deno](./deno.md)

To choose the best-fitting build pack, Coolify scans your repository to guess it.

## Build Images

You can choose which build and deployment image you would like to use during build. For example node version 14/16/18.

## Secrets
Secrets are environment variables that should be set during build or runtime.

## Exposed Port
You can expose your application to a port on the host system.

> Useful if you would like to use your own reverse proxy or tunnel and also in development mode of Coolify. 

## Features

### Enable Automatic Deployment
Enable automatic deployment through webhooks. Enabled by default.
> Useful to turn off if you would like to deploy your applications manually, not on every commit.

### Enable MR/PR Previews
Automatically builds `Merge Request` and `Pull Requests`. Default: `off`
> Useful when you would like to see others' work deployed.

They could have different `secrets` than the main application.
> Useful when you want to have a staging version of your application, e.g., connected to a separate database than the main application.

### Debug Logs
To see extended build logs. Default: `off`
> Useful if something is wrong with the build process.