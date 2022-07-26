# Destinations

Destinations define where to deploy your application, database, or service.
> Destinations are helpful to create **network separation from different applications**. Applications, databases, and services within the same network could communicate with each other.

Each team could have different networks.

## Types of destinations supported
- Local Docker Engine
- Remote Docker Engine

## Local Docker Engine
There are 2 main configuration for Local Docker Engines.
1. **Engine** - `/var/run/docker.sock` - You cannot modify this.
2. **Network** - Used to create docker networks within the defined Docker Engine.
3. **Coolify Proxy** - This is a special proxy based on [Traefik](https://traefik.io/traefik/), configured automatically by Coolify. 

Using this proxy is optional but **highly recommended**. You can use your own reverse proxy, but you need to configure it manually, which could be a considerable effort.


## Remote Docker Engine
Remote Docker Engine makes you use any kind of server as a deployment endpoint. You can have one Coolify instance as a control-plane and dashboard and deploy to unlimited number of servers.

### Requirements
The server needs to have:
1. Install Docker Engine (20.11+).
2. SSH key added to `.ssh/authorized_keys` file in the proper user's home directory.
3. Same SSH key added to Coolifyin the `Settings` menu.
