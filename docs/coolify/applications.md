---
sidebar_position: 6
---

# Applications

You can build & host several types of application with Coolify. They are automatically build from your Git repositories through your [Git Sources](./git-sources.md).

## Configurations
### Git Source

Defines which Git instance you would like to use.

### Git Repository/Branch

Defines which repository and branch you would like to use from the Git Source.

## Build Pack
Build packs have predefined configurations and build process, especially for the frameworks, like VueJs, Svelte.

> These build processes does not handle all the use-cases, just the most commonly used one.

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

### Static 
Docker is a special build pack. It means your application will be served with Nginx as a static site. But, if you define install or build command, you can deploy any kind of application that needs to be built, for example Astro, Nuxt, SvelteKit, Gatsby etc.

Base docker image: [webdevops/nginx:alpine](https://hub.docker.com/r/webdevops/nginx)

You can customize this image with environment variables. See the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/nginx.html).

### Docker
Docker is another special build pack. You can use your own Dockerfile to build your applications. 

This helps you to deploy custom applications, that does not have a build pack, yet.
 
### NodeJS/NestJS/NextJS
Base docker image: [node:lts](https://hub.docker.com/_/node)

(There will be an feature released soon to change the base node version)

### React/Gastby/Svelte/Vue
Base docker image: [webdevops/nginx:alpine](https://hub.docker.com/r/webdevops/nginx)

You can customize this image with environment variables. See the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/nginx.html).

### PHP
Base docker image: [webdevops/php-nginx](https://hub.docker.com/r/webdevops/php-nginx/)

You can customize this image with environment variables. See the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/php-nginx.html).

### Rust
Base docker image: [rust:latest](https://hub.docker.com/_/rust)

It leverages `cargo-chef` to make cache for the final image. After the first image, others will be super fast.

## Destination

Defines where to build and deploy your application, which [destination](./destinations.md) should be used.

## Secrets
Secrets are basically environment variables that should be used during build or runtime, based on how you defined them.

## Logs
You can check both build and runtime logs of your application.

## Features

### Enable MR/PR Previews
Automatically builds `Merge Request` and `Pull Requests`. 
> Useful when you would like to see other's work deployed.

They could have different `secrets` than the main application.
> Useful when you would like to have a staging version of your application, eg: connected to a different database than the main application.


### Debug Logs
To see extended build logs.
> Useful if something is wrong with the build process.