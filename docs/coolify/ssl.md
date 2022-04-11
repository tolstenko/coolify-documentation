---
sidebar_position: 9
---

# SSL Certificates

Coolify would generate SSL certificates for your resources if you defined the URL starting with HTTPS. 

## Let's Encrypt
Coolify using [Let's Encrypt](https://letsencrypt.org/) helper. Only used if you use Coolify Proxy. 

## www vs non-www
Certificates are only generated for the defined URL. If you specify a non-www URL, only the non-www will have a certificate. You cannot reach the www URL. 

>Usually, you need to redirect www to non-www on the DNS layer.

If you would like to generate SSL certificates for both, there is an option called `Generate SSL for www and non-www?` for applications and services.