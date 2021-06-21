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
git clone https://github.com/tellery/tellery.git
cd tellery/hack/compose
```

Then you can modify the configuration by modifying the variables in the [.env](https://github.com/tellery/tellery/blob/master/hack/compose/.env) or specifying the environment variable at startup.

```shell
POSTGRES_USERNAME=mosaic docker-compose up
```

## Environments

| Parameter                    | Description                                                | Default                 |
| ---------------------------- | ---------------------------------------------------------- | ----------------------- |
| MOSAIC_API_IMAGE             | API server image name                                      | mosaic/api:latest       |
| MOSAIC_WEB_IMAGE             | Web server image name                                      | mosaic/web:latest       |
| MOSAIC_CONNECTOR_IMAGE       | Connector server image name                                | mosaic/connector:latest |
| POSTGRES_USERNAME            | Postgresql username                                        | mosaic                  |
| POSTGRES_PASSWORD            | Postgresql password                                        | ZMnyXaVYm8ItOv+vhoh07Q  |
| POSTGRES_DB                  | Postgresql database name                                   | mosaic                  |
| SERVER_PROTO                 | Web server protocol                                        | http                    |
| SERVER_HOST                  | Web server host                                            | localhost               |
| SECRET_KEY                   | Secret key for encrypt sensitive information into database | pjfJ2Cbe3sv0Gtz32Krr4A  |
| EMAIL_USE_TLS                | Enable TLS                                                 | false                   |
| EMAIL_USERNAME               | Mail server username                                       | ""                      |
| EMAIL_PASSWORD               | Mail server password                                       | ""                      |
| EMAIL_PORT                   | Mail server port                                           | 587                     |
| EMAIL_HOST                   | Mail server host                                           | ""                      |
| EMAIL_FROM                   | System mail sender's email address                         | ""                      |
| OBJECT_STORAGE_BUCKET        | Object storage bucket                                      | tellery-uploads         |
| OBJECT_STORAGE_ACCESS_KEY_ID | Object storage access key                                  | minio_local             |
| OBJECT_STORAGE_ACCESS_SECRET | Object storage secret key                                  | Z9nYZsZpO5d7PZ1k0223aA  |
