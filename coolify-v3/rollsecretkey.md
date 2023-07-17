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
      content: "@heyandras"
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

# Roll Secret Key

In `v3.12.33` a new feature has been added. You can now roll your secret key.

This is useful if you think your secret key has been compromised.

::: warning
It is introduced because there was a security issue with the secret key. If you are using a version below v3.12.33, please update your Coolify instance.

Technical details: The secret key was generated with the installation date used as a random seed. This means that if someone knows the installation date, they can generate the secret key. This is not a problem if you are using a recent version of Coolify, because the installation date is not used anymore since 2023.07.14.

:::

## How to roll the secret key

If you are upgrading form a version below `v3.12.33`, you will be automatically rolled to a new secret key.

If you are just installing Coolify, you do not need to do anything.

## Force roll secret key

1. Login to your Coolify instance via SSH.
2. Run the following command: `docker exec -ti coolify bash`. Now you are in the Coolify container.
3. You will work in the `/app/.env` file. You can edit it with `vi .env`.
4. Delete `COOLIFY_SECRET_KEY_BETTER`.
5. Login to your Coolify instance on the web interface.
6. Go to `Settings` and fill the `Rollback` input field with `3.12.33` (or the latest version - you can check it [here](https://get.coollabs.io/versions.json)) and click on `Rollback`.

If you have any questions, please [contact us](../contact.md).

## Rollback to old secret key

If you want to rollback to the old secret key, you need to do the followings:

1. Login to your Coolify instance via SSH.
2. Run the following command: `docker exec -ti coolify bash`. Now you are in the Coolify container.
3. You will work in the `/app/.env` file. You can edit it with `vi .env`.
4. Delete `COOLIFY_SECRET_KEY_BETTER`.
5. Rename `COOLIFY_SECRET_KEY` to `COOLIFY_SECRET_KEY_OLD`. This OLD secret is the newly generated secret key. Just keep it in case you want to rollback again.
6. Rename `COOLIFY_SECRET_KEY_OLD_<date>` to `COOLIFY_SECRET_KEY`. `<date>` is the timestamp when you upgraded to `v3.12.33`. This is the old secret key, that you want to rollback to.
7. Create `COOLIFY_SECRET_KEY_BETTER` with the same as `COOLIFY_SECRET_KEY` value, created in step 6.
8. Save the file: `:wq`.
9. Go to `/app/db` and overwrite the `prod.db` file with the `prod.db_<date` file. `<date>` is the timestamp when you upgraded to `v3.12.33`: `cp prod.db_<date> prod.db`.
10. Login to your Coolify instance on the web interface.
11. Go to `Settings` and fill the `Rollback` input field with `3.12.33` (or the latest version - you can check it [here](https://get.coollabs.io/versions.json)) and click on `Rollback`.

If you have any questions, please [contact us](../contact.md).
