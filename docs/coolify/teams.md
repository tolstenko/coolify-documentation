---
head:
  - - meta
    - name: description
      content: Coolify - Teams
  - - meta
    - name: keywords
      content: teams coollabs coolify 
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
# Teams
Each registered user has its own team automatically. Each team only has access to its own resources. 

You can register any number of teams and invite any number of users to it.

You can only access other team's resources if someone with an `admin` privilege invites you to that team.

## Privileges
Team members could have two kinds of privileges:

- `admin` has the same privileges as the `owner` of the team.

Admin can check, modify, delete any resources that are owned by the team.

- `read` can only read things.

## Root Team
With the first user, a `root team` is also created with id `0`. 

Users in this team have the same privileges as the first user so that they see and change all resources deployed, access system-wide configurations, initiate one-click update process, etc.
