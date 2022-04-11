---
sidebar_position: 7
---

# Databases

Quickly deploy databases to your applications.

## Types of databases supported
- MongoDB
- MySQL
- PostgreSQL
- Redis
- CouchDB

All supported version found [here](https://github.com/coollabsio/coolify/blob/main/src/lib/components/common.ts) at the `supportedDatabaseTypesAndVersions` function.

## Features

### Change default random passwords
You can change all your passwords from the UI. Database should be run to do so.

### Set it public
You can make your database. Default: `off`
> Useful for backup and restore, or to reach your database outside from your server.
