---
sidebar_position: 9
---

# SSL 

## Let's Encrypt
All certificates are automatically generated with [Let's Encrypt](https://letsencrypt.org/) - in case if you are using Coolify Proxy. 

A certificate is requested in case `https` is defined in the FQDN for a resource.

## www vs non-www
Certificates are only generated for the defined FQDN. That means, if you define a non-www FQDN, then only it will have a certificate.

If you would like to generate an SSL certificates for both, there is an option called `Generate SSL for www and non-www?` for applications and services.