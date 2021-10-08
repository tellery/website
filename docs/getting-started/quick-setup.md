---
sidebar_position: 2
---

# Quick Setup

Setup Tellery quickly on your local machine. We prepare some sample data for you to play with. The final result will look exactly like [https://demo.tellery.io](https://demo.tellery.io).

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

# Pull the latest image (to ensure that you are using the latest image we provided)
docker-compose pull

# View or edit config file (optional)
# vim .env

# Run docker compose
docker-compose up
```

You can now access it on [http://localhost:8000](http://localhost:8000).

The default account is `admin@tellery.local` and password is `tellery`.

Check out the [general configuration guide](https://github.com/tellery/tellery/tree/master/deploy/compose#environments) for more detailed info.


## Next step


Learn how to start analysis with Tellery:

* [Configure a database](/docs/how-to-use/configure-database) to connect to your own dataset
* [Create a new story](/docs/how-to-use/create-story)
