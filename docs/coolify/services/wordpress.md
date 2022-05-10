---
sidebar_position: 2
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