---
sidebar_position: 2
---

# Registration

The first registered user will be the `admin` user of the Coolify instance. Every other users won't access to system wide configurations, such as Coolify settings, one-click update, etc.. 

> By default, **registration is disabled** after the first user is created. 
> 
> You can enable registration in the `Settings` menu.

## Users
Users can register if it's enabled. Currently only email/password registration is available.

## Teams
Each registered user have it's own team automatically. Each team only have access to their own resources. 

## Privileges
Team members could have 2 kinds of privileges:

- `admin` has the same privileges as the `owner` of the team.
- `read` can only read things - obviously.

## Root Team
With the first user, a `root team` is also created. Users in this team have the same privileges as the first user, so they can access system wide configurations.

The root team cannot access other team's resources atm.
