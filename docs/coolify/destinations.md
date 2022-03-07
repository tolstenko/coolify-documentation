---
sidebar_position: 5
---

# Destinations

Defines where to deploy your application, database or service to. 

## Types
- Local Docker Engine
- Remote Docker Engine (WIP)
- Kubernetes (WIP)

## Local Docker Engine
There are 2 main configuration for Local Docker Engines.
1. **Engine** - `/var/run/docker.sock` - You cannot modify this.
2. **Network** - Used to create docker networks within the defined Docker Engine.

   
> Networks are useful to create **network separation from different applications**. Applications, databases and services within the same network could communicate with eachother and with the internet - *databases by default are not public*.

3. **Coolify Proxy** - This is a special proxy based on [HAProxy](https://haproxy.com/), that is configured automatically by Coolify. 

Using this proxy is optional, but **highly recommended**. You can use your own reverse proxy, but you need to configure it manually, which could be a huge effort.
   