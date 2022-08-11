# Local Docker Engine
It means all resources are deployed to the same server as Coolify is running.

## Configuration
1. **Engine** - `/var/run/docker.sock` - You cannot modify this.
2. **Network** - Used to create docker networks within the defined Docker Engine.
3. **Coolify Proxy** - This is a special proxy based on [Traefik](https://traefik.io/traefik/), configured automatically by Coolify. 