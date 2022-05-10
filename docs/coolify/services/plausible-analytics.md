---
sidebar_position: 3
---

# Plausible Analytics

It is based on the official [Plausible Analytics image](https://hub.docker.com/r/plausible/analytics).

## Features
### Rename collector script
You can rename Plausible Analytics's collector script easily on the UI.
[Related discussion](https://github.com/plausible/analytics/discussions/387#discussioncomment-179933)

> Useful if you would like to rename the collector script to prevent it blocked by AdBlockers.


## Secrets
You can add all the official supported environment variables to customize your instance, like the followings:

```
DISABLE_REGISTRATION
DISABLE_AUTH

# For SMTP
MAILER_EMAIL
SMTP_HOST_ADDR
SMTP_HOST_PORT
SMTP_USER_NAME
SMTP_USER_PWD
SMTP_HOST_SSL_ENABLED
SMTP_RETRIES
MAILER_ADAPTER
POSTMARK_API_KEY

# For Google Search Integration
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
...
```
For more info, check [the official documentation](https://plausible.io/docs/self-hosting-configuration).