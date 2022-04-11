---
sidebar_position: 6
---

# Applications

Applications are used to deploy a production version of your applications. All data are based on your provided git repositories.

Coolify not just builds, but also configures a reverse proxy (HAProxy) automatically and requests an SSL certificate through Let's Encrypt. 

You just need to push your code!

## Types of applications supported
Applications are based on custom build packs (later, it will support cloudnative and heroku build packs as well).

Build packs have predefined configurations and build process, especially for frameworks, like VueJs, Svelte, React, etc.

> These build processes does not handle all the use-cases, just the most commonly used one. If you need a custom build process, consider using `Docker` build pack.

- Static
- NodeJS
- PHP
- Svelte
- VueJS
- NuxtJS
- Gatsby
- Astro
- Eleventy
- React
- Preact
- NextJS
- NestJS
- Rust
- Docker

To choose the best fitting build pack, Coolify scans your repository to guess it.

### Static 
Base docker image: [webdevops/nginx:alpine](https://hub.docker.com/r/webdevops/nginx)

Your application will be served as a static site. 

You can define install or build commands, so before service your static site, it will builds it. Think of the following frameworks: React, Astro, Nuxt, SvelteKit, Gatsby etc.

You can customize the base image with environment variables, see the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/nginx.html).

### Docker
Docker build pack is a powerful one. You can use your own Dockerfile to build your applications, or service. This means, you can deploy any kind of unsupported (by Coolify) applications, services, anything, where a simple Docker file is enough!

:::tip
    Docker Compose is not supported yet.
:::
 
### NodeJS/NestJS/NextJS
Base docker image: [node:lts](https://hub.docker.com/_/node)

Your application will be served as a NodeJS/NestJS/NextJS application.

:::tip 
 For exporting a static HTML version of your `NextJS` application, please use the `static` build pack, with the right commands (install and build).
:::

### React/Gastby/Svelte/Vue
Base docker image: [webdevops/nginx:alpine](https://hub.docker.com/r/webdevops/nginx)

What is the difference between these and the `static` build pack? The main difference is the predefined configurations. You do not need to set the right install/build commands, or publish directories, etc. Coolify will handle it for you.

You can customize this image with environment variables, see the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/nginx.html).

### PHP
Base docker image: [webdevops/php-nginx](https://hub.docker.com/r/webdevops/php-nginx/) or [webdevops/php-apache](https://hub.docker.com/r/webdevops/php-nginx/)

PHP build pack contains almost every modules necessary for your applications.

By default, nginx is used to serve your application, but if you have a `.htaccess` file in your root directory of your repository, `apache` is used to take advantages of the custom rules defined.

Composer will install all dependencies if `composer.json` is detected.

You can customize this image with environment variables, see the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/php-nginx.html).

### Rust
Base docker image: [rust:latest](https://hub.docker.com/_/rust)

Rust build pack leverages `cargo-chef` to create a cache layer. After the first build is successfully done, next builds will be significantly faster.


### Python
Base docker image: [python:3-alpine](https://hub.docker.com/_/python)

You can choose between Gunicorn, uWSGI and no WSGI deployments. 

## Secrets
Secrets are basically environment variables that should be set during build or runtime.

## Features

## Enable Automatic Deployment
Enable automatic deployment through webhooks. Default: `on`

### Enable MR/PR Previews
Automatically builds `Merge Request` and `Pull Requests`. Default: `off`
> Useful when you would like to see other's work deployed.

They could have different `secrets` than the main application.
> Useful when you would like to have a staging version of your application, eg: connected to a different database than the main application.

### Debug Logs
To see extended build logs. Default: `off`
> Useful if something is wrong with the build process.