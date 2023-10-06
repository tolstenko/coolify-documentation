---
head:
  - - meta
    - name: description
      content: Coolify - Databases
  - - meta
    - name: keywords
      content: databases coollabs coolify 
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: '@heyandras'
  - - meta
    - name: twitter:title
      content: Coolify
  - - meta
    - name: twitter:description
      content: An open-source & self-hostable Heroku / Netlify alternative.
  - - meta
    - name: twitter:image
      content: https://cdn.coollabs.io/assets/coollabs/og-image-databases.png
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
      content: https://cdn.coollabs.io/assets/coollabs/og-image-databases.png
---
# Databases

Quickly deploy databases with a few clicks.

- [MongoDB](https://mongodb.com) -
  [AMD64](https://hub.docker.com/r/bitnami/mongodb/)/[ARM](https://hub.docker.com/_/mongo/)
- [MariaDB](https://mariadb.org/) -
  [AMD64](https://hub.docker.com/r/bitnami/mariadb/)/[ARM](https://hub.docker.com/_/mariadb/)
- [MySQL](https://www.mysql.com/) -
  [AMD64](https://hub.docker.com/r/bitnami/mysql/)/[ARM](https://hub.docker.com/_/mysql/)
- [PostgreSQL](https://www.postgresql.org/) -
  [AMD64](https://hub.docker.com/r/bitnami/postgresql/)/[ARM](https://hub.docker.com/_/postgres/)
- [CouchDB](https://couchdb.apache.org/) -
  [AMD64](https://hub.docker.com/r/bitnami/couchdb/)/[ARM](https://hub.docker.com/_/couchdb/)
- [Redis](https://redis.io/) -
  [ AMD64](https://hub.docker.com/r/bitnami/redis/)/[ARM](https://hub.docker.com/_/redis/)

To see all the features you could set with environment variables, check the base
image links!

:::tip 
If you have a new database you would like to add, raise an idea
[here](https://github.com/orgs/coollabsio/discussions) to get feedback from the community! 
:::

## Features

### Change default random passwords

You can change all your passwords from the UI (the database should run).

### Set it public

You can make your database public. Default: `off`

> Useful for backup and restore, or to reach your database outside of your
> server.
