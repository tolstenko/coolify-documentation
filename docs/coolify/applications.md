---
sidebar_position: 6
---

# Applications

You can host several types of application with Coolify. They are automatically build from your Git repositories through [Git Sources](./git-sources.md).

## Configurations
### Git Source

Defines which Git instance you would like to use.

### Git Repository/Branch

Defines which repository and branch you would like to use from the Git Source.

## Build Pack
Build packs have predefined configurations and build process, especially for the frameworks, like VueJs, Svelte.

> These build processes does not handle all the use-cases, just the most commonly used one.\

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
Static build pack means, your final/built application is served with Nginx. If you define install/build commands, your application will be built before it's served as a static application.

### Docker
Docker is a special build pack. You can use any your custom Dockerfile to build your applications. This helps you to deploy any kind of application that builds with a Dockerfile.

## Destination

Defines which [destination](./destinations.md) is used by your application to publish it after the build is successful. 

## Secrets
Secrets are basically environment variables that should be used during build or runtime.


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