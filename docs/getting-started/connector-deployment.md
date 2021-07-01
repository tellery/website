---
sidebar_position: 4
---

# Connector Deployment

To keep our backend service being ignorant of how users would connect to their database, the connector will store the profile of database connection in the side of connector.

To be specific, those profiles will be stored in a json file, in `/usr/app/profiles.json`.

If you want to maintain your own profile, you can mount it to this path.

We support third-party connectors, all you need to do is adding the jars of thrid-party connector into `/usr/app/extra`, this can be done by build your own docker image or mount a directory.
