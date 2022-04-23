---
sidebar_position: 2
---

# Registration

After installation, the first registered user will be the `root/admin` user of your Coolify instance. It will see/change all resources deployed, access system-wide configurations, one-click update process, etc.

> By default, **registration is disabled** afterward. You can enable registration in the `Settings` menu.

Every other user won't access system-wide configurations and only see their team's resources.

## Type of authentication
Currently, `email/password` registration is supported.


## Reset Password

Admins can reset the passwords of team members in the `Settings` menu. If a password reset is requested, the user has 10 minutes to do it. 

Password reset is done through the login process. The user's new password will be the one used on the login form. 

After 10 minutes, the old password can be used to log in, and the password reset process is stopped. 

(This will be improved with email/link mechanisms)
