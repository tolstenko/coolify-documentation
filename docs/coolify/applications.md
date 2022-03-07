---
sidebar_position: 6
---

# Applications

You can host several types of application with Coolify. They are build from your Git repositories through [Git Sources](./git-sources.md).

## Configurations
### Git Source

Defines which Git instance you would like to use.

### Git Repository/Branch

Defines which repository and branch you would like to use from the Git Source.

### Build Pack
Build packs have predefined configurations, especially for the frameworks, like VueJs, Svelte and predefined build process.

> These build processes does not handle all the use-cases, just the most commonly used one.

Currently supported types:

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

### Docker Build Pack
Docker is a special build pack. You can use any your custom Dockerfile to build your applications. This helps you to deploy any kind of application that builds with a Dockerfile.


### Destination

Defines which [destination](./destinations.md) is used by your application to publish it after the build is successful. 

### Secrets
Secrets are basically environment variables that should be used during build or runtime.


### Logs
You can check both build and runtime logs of your application.


### Features

#### Enable MR/PR Previews
Automatically builds Merge Request and Pull Requests. 
They could have different secrets than the main application.
> Useful when you would like to see other's work deployed.

#### Debug Logs
To see extended build logs.

> Useful if something is wrong with your build.