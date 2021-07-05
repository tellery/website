---
sidebar_position: 2
---

# Quick Setup

Setup Tellery quickly using docker compose.

## Prerequisites

- [Docker Compose](https://docs.docker.com/compose/install/) +v1.28
- 3GB of free memory
- 5GB of disk space

## Set up

Open your terminal, and run:

```shell
# Clone the Tellery repo
git clone https://github.com/tellery/tellery.git

# Change directories into the demo directory
cd tellery/deploy/compose

# Run docker compose
docker-compose up
```

You can now access it on [http://localhost:80](http://localhost:80).

Check out the [general configuration guide](https://github.com/tellery/tellery/tree/master/deploy/compose#environments) for more detailed info.


## Next step


Learn how to start analysis with Tellery:

* [Configure a database](/docs/how-to-use/configure-database)
* [Create a new story](/docs/how-to-use/create-story)
