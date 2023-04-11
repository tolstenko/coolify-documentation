---
head:
  - - meta
    - name: description
      content: Coolify - Destinations
  - - meta
    - name: keywords
      content: destinations coollabs coolify 
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
# Secrets

You can add secrets (aka environment variables) to your application and to your previews. They are saved encrypted into Coolify's database.

If you would like to change one, you need to stop/start or restart (there is a separate button for it) your application.


## Preview Secrets (applications)

Preview secrets are different from normal secrets. They only used for PR deployments. With this, you can setup databases for PR deployments, like a staging environment.