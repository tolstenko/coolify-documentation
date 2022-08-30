---
head:
  - - meta
    - name: description
      content: Sponsorship coolLabs
  - - meta
    - name: keywords
      content: sponsorship coollabs coolify 
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