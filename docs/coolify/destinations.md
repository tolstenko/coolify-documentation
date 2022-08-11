# Destinations

Destinations define where to deploy your application, database, or service.
> Destinations are helpful to create **network separation from different applications**. Applications, databases, and services within the same network could communicate with each other.

Each team could have different networks.

## Types of destinations supported
- Local Docker Engine
- Remote Docker Engine

## Local Docker Engine
It means all resources are deployed to the same server as Coolify is running .
1. **Engine** - `/var/run/docker.sock` - You cannot modify this.
2. **Network** - Used to create docker networks within the defined Docker Engine.
3. **Coolify Proxy** - This is a special proxy based on [Traefik](https://traefik.io/traefik/), configured automatically by Coolify. 

Using this proxy is optional but **highly recommended**. You can use your own reverse proxy, but you need to configure it manually, which could be a considerable effort.

## Remote Docker Engine
Remote Docker Engine makes you use any kind of server as a destination endpoint. You can have one Coolify instance as a control-plane/dashboard and deploy to unlimited number of remote servers.

### Requirements
The server needs to have:
1. Install Docker Engine (20.11+) - [instructions](https://docs.docker.com/engine/install/).
2. Add SSH key to `.ssh/authorized_keys` file in the proper user's home directory - recommended root.
3. Add the same SSH key added to Coolify in the `Settings/SSH Keys` menu.
