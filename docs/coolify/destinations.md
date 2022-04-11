---
sidebar_position: 5
---

# Destinations

Destinations define where to deploy your application, database, or service.
> Destinations are helpful to create **network separation from different applications**. Applications, databases, and services within the same network could communicate with each other.

Each team could have different networks.

## Types of destinations supported
- Local Docker Engine

## Upcoming support
- Remote Docker Engine (WIP)
- Kubernetes (WIP)

## Local Docker Engine
There are 2 main configuration for Local Docker Engines.
1. **Engine** - `/var/run/docker.sock` - You cannot modify this.
2. **Network** - Used to create docker networks within the defined Docker Engine.
3. **Coolify Proxy** - This is a special proxy based on [HAProxy](https://haproxy.com/), configured automatically by Coolify. 

Using this proxy is optional but **highly recommended**. You can use your own reverse proxy, but you need to configure it manually, which could be a considerable effort.
   