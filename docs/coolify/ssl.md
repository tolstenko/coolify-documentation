---
sidebar_position: 9
---

# SSL Certificates

Coolify generates SSL certificates for your resources in case you defined the URL starting with a https. 

## Let's Encrypt
Coolify using [Let's Encrypt](https://letsencrypt.org/) helper. Only used if you use Coolify Proxy. 

## www vs non-www
Certificates are only generated for the defined URL. That means, if you define a non-www URL, only the non-ww will have a certificate. You cannot reach www URL. 

>Usually you need to redirect www to non-www on DNS layer.

If you would like to generate an SSL certificates for both, there is an option called `Generate SSL for www and non-www?` for applications and services.