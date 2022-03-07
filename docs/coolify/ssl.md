---
sidebar_position: 9
---

# SSL 

All certificates are automatically generated, in case you are using Coolify Proxy. 

Coolify uses [Let's Encrypt](https://letsencrypt.org/) to generate these certs.

## http vs https
By default, the protocol is based on what you set for FQDN. 

## www vs non-www
By default, certificates are only generated for the configured FQDN. 

If you would like to generate both SSL certificates, there is an option called `Generate SSL for www and non-www?` for each type of supported applications and services.