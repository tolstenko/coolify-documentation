---
sidebar_position: 10
---

# Simple docker applications
Coolify let's use deploy docker images as applications as well.

## Important: it is temporary solutions, more robust version coming soon

## Sample with [Baserow](https://baserow.io/) or this -> [docker tutorial](https://baserow.io/docs/installation%2Finstall-with-docker)
I choose Baserow as an example application because the config can be tweaked to allow for different ways of running the application. You can for example try using a postgres and redis deployed with coolify and pass their urls as variables to Baserow application.

1. Create a repository on GitHub where you will keep only the Dockerfile
2. Create na push a simple dockerfile, than only mentions the image you want to use, like so:

        ```dockerfile
        FROM baserow/baserow:1.10.2
        ```

3. Create an application on coolify:
   1. Select Applications
   2. Click add Application (the green button in the top left corner)
   3. Select gitsource that has access to the repository you created in step 2
   4. Select you repository and appropriate branch
   5. Select docker target (be mindful of where you deploy if you have extra dependencies such as databases)
   6. Select Docker in Build Pack Selection screen
   7. Make sure the port selected in the form is the port your application exposes. (for example in the case of baserow it will be 80 instead of 3000)
   8. Save app - the next steps will only be possible once you save your configuration.
   9. Add any env variables that are required to start the container in the top right `Secrets` panel - in case of Baserow the only thing you need to add is `BASEROW_PUBLIC_URL` which should correspond to the url you've set for the application
   10. If your application needs volumes mounted / to persist data between runs safely add persistent storage in the bottom right `Persistent Storage` panel. In the case of Baserow you need to add only `/baserow/data` as a volume.
   11. Optionally switch on debug logs - should be the law option in the app settings panel.
4. Run / rebuild your application - it should start just fine.
