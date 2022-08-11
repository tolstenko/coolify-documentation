# Destinations

Destinations define where to deploy your application, database, or service.
> Destinations are helpful to create **network separation from different applications**. Applications, databases, and services within the same network could communicate with each other.

## Types of destinations supported
- [Local Docker Engine](./local)
- [Remote Docker Engine](./remote)

## Coolify Proxy
Using Coolify Proxy (based on Traefik) is optional but **highly recommended**. You can use your own reverse proxy, but you need to configure it manually, which could be a considerable effort.