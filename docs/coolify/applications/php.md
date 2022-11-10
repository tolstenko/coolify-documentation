---
head:
  - - meta
    - name: description
      content: Coolify - Applications - PHP
  - - meta
    - name: keywords
      content: applications php coollabs coolify 
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
      content: https://cdn.coollabs.io/assets/coollabs/og-image-applications.png
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
      content: https://cdn.coollabs.io/assets/coollabs/og-image-applications.png
---
# PHP

Base docker image: [webdevops/php-nginx](https://hub.docker.com/r/webdevops/php-nginx/) or [webdevops/php-apache](https://hub.docker.com/r/webdevops/php-nginx/)

PHP build pack contains almost every module necessary for your applications.

By default, Nginx is used to serve your application, but if you have a `.htaccess` file in the root directory of your repository, `apache` is used to take advantage of the customs rules defined.

Composer will install all dependencies if `composer.json` is detected.

You can customize this image with environment variables, see the [docs](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/php-nginx.html).
