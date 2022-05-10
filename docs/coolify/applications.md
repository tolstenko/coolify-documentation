---
sidebar_position: 6
---

# Applications

Applications are used to deploy a production version of your applications. All data are based on your provided git repositories.

Coolify not just builds but also configures a reverse proxy (HAProxy) automatically and requests an SSL certificate through Let's Encrypt. 

You just need to push your code!

## Types of applications supported
Applications are based on custom build packs (later, it will support cloud-native and Heroku build packs).

Build packs have predefined configurations and build processes, especially for frameworks, like VueJs, Svelte, React, etc.

> These build processes do not handle all the use-cases, just the most commonly used ones. Consider using the `Docker` build pack if you need a custom build process.

- Static sites
- NodeJS
- VueJS
- NuxtJS
- NextJS
- React/Preact
- Gatsby
- Svelte
- PHP
- Laravel
- Rust
- Docker
- Deno

To choose the best-fitting build pack, Coolify scans your repository to guess it.

### Static 
Base docker image: [webdevops/nginx:alpine](https://hub.docker.com/r/webdevops/nginx)

Your application will be served as a static site. 

You can define install or build commands, so it will build it before serving your static site. Think of the following frameworks: React, Astro, Nuxt, SvelteKit, Gatsby, etc.

You can customize the base image with environment variables, see the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/nginx.html).

### Docker
The Docker build pack is a powerful one. You can use your Dockerfile to build your applications or service. It means you can deploy any unsupported (by Coolify) applications, services, anything, where a simple Docker file is enough!

:::tip
    Docker Compose is not supported yet.
:::
 
### NodeJS/NestJS/NextJS
Base docker image: [node:lts](https://hub.docker.com/_/node)

Your application will be served as a NodeJS/NestJS/NextJS application.

:::tip 
 For exporting a static HTML version of your `NextJS` application, please use the `static` build pack with the correct commands (install and build).
:::

### React/Gastby/Svelte/Vue
Base docker image: [webdevops/nginx:alpine](https://hub.docker.com/r/webdevops/nginx)

What is the difference between these and the `static` build pack? The main difference is the predefined configurations. You do not need to set the proper install/build commands, publish directories, etc. Coolify will handle it for you.

You can customize this image with environment variables, see the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/nginx.html).

### PHP
Base docker image: [webdevops/php-nginx](https://hub.docker.com/r/webdevops/php-nginx/) or [webdevops/php-apache](https://hub.docker.com/r/webdevops/php-nginx/)

PHP build pack contains almost every module necessary for your applications.

By default, Nginx is used to serve your application, but if you have a `.htaccess` file in the root directory of your repository, `apache` is used to take advantage of the customs rules defined.

Composer will install all dependencies if `composer.json` is detected.

You can customize this image with environment variables, see the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/php-nginx.html).

### Laravel
Base docker image: [webdevops/php-apache:8.0-alpine](https://hub.docker.com/r/webdevops/php-apache/)

You can customize this image with environment variables. See the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/php-apache.html).

### Docker
Docker is another special build pack. You can use your own Dockerfile to build your applications. 

This helps you to deploy custom applications, that does not have a build pack, yet.

Everything that runs by a single Dockerfile could be deployed with Coolify!

### Rust
Base docker image: [rust:latest](https://hub.docker.com/_/rust)

Rust build pack leverages `cargo-chef` to create a cache layer. The following builds will be significantly faster after the first build is successfully done.

### Python
Base docker image: [python:3.10-alpine](https://hub.docker.com/_/python)

## Destination
Defines where to build and deploy your application, which [destination](./destinations.md) should be used.

### Deno
Base docker image: [denoland/deno:latest](https://registry.hub.docker.com/r/denoland/deno)

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