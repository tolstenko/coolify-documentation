# Databases

Quickly deploy databases with a few clicks.

- [MongoDB](https://mongodb.com) - [Base image](https://hub.docker.com/r/bitnami/mongodb/)
- [MariaDB](https://mariadb.org/) - [Base image](https://hub.docker.com/r/bitnami/mariadb/)
- [MySQL](https://www.mysql.com/) - [Base image](https://hub.docker.com/r/bitnami/mysql/)
- [PostgreSQL](https://www.postgresql.org/) - [Base image](https://hub.docker.com/r/bitnami/postgresql/)
- [CouchDB](https://couchdb.apache.org/) - [Base image](https://hub.docker.com/r/bitnami/couchdb/)
- [Redis](https://redis.io/) - [Base image](https://hub.docker.com/r/bitnami/redis/)

To see all the features you could set with envinronment variable, check the base image links!

Open an issue if you would like to have a new version of the available databases [here](https://github.com/coollabsio/coolify/issues/new?assignees=andrasbacsai%2Cvasani-arpit&labels=Enhancement&template=--feature-request.yaml&title=%5BFeature%5D%3A+).


If you have a new database you would like to add, raise an idea [here](https://feedback.coolify.io/) to get feedback from the community!

## Features

### Change default random passwords
You can change all your passwords from the UI (the database should run).

### Set it public
You can make your database public. Default: `off`
> Useful for backup and restore, or to reach your database outside of your server.