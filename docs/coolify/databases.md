---
sidebar_position: 7
---

# Databases

Quickly deploy databases to your applications.

- [MongoDB](https://mongodb.com) - [Base image](https://hub.docker.com/r/bitnami/mongodb/)
- [MariaDB](https://mariadb.org/) - [Base image](https://hub.docker.com/r/bitnami/mariadb/)
- [MySQL](https://www.mysql.com/) - [Base image](https://hub.docker.com/r/bitnami/mysql/)
- [PostgreSQL](https://www.postgresql.org/) - [Base image](https://hub.docker.com/r/bitnami/postgresql/)
- [CouchDB](https://couchdb.apache.org/) - [Base image](https://hub.docker.com/r/bitnami/couchdb/)
- [Redis](https://redis.io/) - [Base image](https://hub.docker.com/r/bitnami/redis/)

To see all the features you could set with envinronment variable, check the base image links!

All supported version found [here](https://github.com/coollabsio/coolify/blob/main/src/lib/components/common.ts) at the `supportedDatabaseTypesAndVersions` function.

## Features

### Change default random passwords
You can change all your passwords from the UI (the database should run).

### Set it public
You can make your database. Default: `off`
> Useful for backup and restore, or to reach your database outside of your server.
