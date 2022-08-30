---
head:
  - - meta
    - name: description
      content: Coolify - Services - Wordpress
  - - meta
    - name: keywords
      content: services Wordpress coollabs coolify 
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: '@andrasbacsai'
  - - meta
    - name: twitter:title
      content: Coolify
  - - meta
    - name: twitter:description
      content: An open-source & self-hostable Heroku / Netlify alternative.
  - - meta
    - name: twitter:image
      content: https://cdn.coollabs.io/assets/coollabs/og-image-documentation.png
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://coolify.io
  - - meta
    - property: og:title
      content: Coolify
  - - meta
    - property: og:description
      content: An open-source & self-hostable Heroku / Netlify alternative.
  - - meta
    - property: og:site_name
      content: Coolify
  - - meta
    - property: og:image
      content: https://cdn.coollabs.io/assets/coollabs/og-image-documentation.png
---
# WordPress

It is based on the official [WordPress image](https://hub.docker.com/_/wordpress).

## Features
### Extra Config
You can define your WordPress configuration that will be embed into `wp-config.php`.

### Enable sFTP connection
Enables an on-demand sFTP connection to the WordPress data directory. 
> Useful if you want to use sFTP to upload files.

### Remote MySQL server
You can use your own, remote database or use the one automatically created by Coolify.


## Secrets
You can add all the official supported environment variables to customize your instance, like the followings:

```
WORDPRESS_AUTH_KEY
WORDPRESS_SECURE_AUTH_KEY
WORDPRESS_LOGGED_IN_KEY
WORDPRESS_NONCE_KEY
WORDPRESS_AUTH_SALT
WORDPRESS_SECURE_AUTH_SALT
WORDPRESS_LOGGED_IN_SALT
WORDPRESS_NONCE_SALT
WORDPRESS_DEBUG
...
```

For more info, check [the official documentation](https://hub.docker.com/_/wordpress).