---
sidebar_position: 3
---

# Production Setup

Running your own Tellery with Kubernetes

[![Artifact Hub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/tellery)](https://artifacthub.io/packages/search?repo=tellery)

## Prerequisites

- [Helm](https://docs.helm.sh/docs/intro/install/) 3.0+
- Kubernetes 1.10+

## Infrastructure

- **(Required)** Postgresql 10.0+
- (Optional) Redis 5.0+
- (Optional) Object Storage Service ( `AWS S3`, `Aliyun OSS` or others compatible with `S3` protocol)
- For notifications, you would need
  - Email: An email address and an email server

## Installing the Chart

First of all, add the repo

```shell
helm repo add tellery-stable https://tellery.github.io/charts
helm repo update
```

To install the helm chart with release name e.g. `tellery` (replace this by your need, the following commands will all use the name `tellery`):

```shell
helm install tellery tellery-stable/tellery \
--set system.web.host=YOUR_HOST \
--set postgresql.enabled=true
```

If you want to provide advanced parameters with your installation you can check the full [Configuration](#configuration).

### Installing with external Postgresql

```shell
helm install tellery tellery-stable/tellery \
--set system.web.host=YOUR_HOST \
--set externalPostgresql.host=postgresqlAddress \
--set externalPostgresql.port=5432 \
--set externalPostgresql.username=postgres \
--set externalPostgresql.password=password \
--set externalPostgresql.database=tellery
```

## Uninstall the Chart

```shell
helm uninstall tellery
```

## Notes

So far the connector can be only deployed with single replica.

For tellery main service, if you wanna go with multiple replicas, you have to configure a redis storage for the state synchronization.
To Configure the redis storage, see [Redis Configuration](#redis-configuration).

The only mandatory config that have to be given by user is `system.web.host`, see [System Configuration](#system-configuration) for more details.

## Configuration

The following table lists the configurable parameters of the Tellery chart and their default values.

### Postgresql Configuration

You can choose `PostgreSQL deployed by Helm` by `--set postgresql.enabled=true` or `External PostgreSQL` by `--set externalPostgresql.host=xxx`, if both are configured, `PostgreSQL deployed by Helm` will be used.

`PostgreSQL deployed by Helm` is base on [Postgresql Helm Chart](https://artifacthub.io/packages/helm/bitnami/postgresql/10.4.8#parameters), you can see it for more configurations.

| Parameter                   | Description                        | Default  |
| --------------------------- | ---------------------------------- | -------- |
| postgresql.enabled          | Enable postgresql deployed by helm | false    |
| externalPostgresql.host     | External postgresql host           | null     |
| externalPostgresql.port     | External postgresql port           | 5432     |
| externalPostgresql.database | External postgresql Database name  | tellery  |
| externalPostgresql.username | External postgresql username       | postgres |
| externalPostgresql.password | External postgresql password       | null     |

### Object Storage Configuration

If you use PG as object storage, you only need to set `objectStorage.type=postgres`.

`objectStorage.endpoint` is optional when you are using `AWS S3`.

| Parameter               | Description               | Default  |
| ----------------------- | ------------------------- | -------- |
| objectStorage.type      | Object storage type       | postgres |
| objectStorage.endpoint  | Object storage endpoint   | null     |
| objectStorage.bucket    | Object storage bucket     | null     |
| objectStorage.region    | Object storage region     | null     |
| objectStorage.accessKey | Object storage access key | null     |
| objectStorage.secretKey | Object storage secret key | null     |

### Redis Configuration

You can choose `Redis deployed by Helm` by `--set redis.enabled=true` or `External Redis` by `--set externalRedis.enabled=true`, if both are configured, `Redis deployed by Helm` will be used.

`Redis deployed by Helm` is base on [Redis Helm Chart](https://artifacthub.io/packages/helm/bitnami/redis/14.3.3#parameters), you can see it for more configurations

| Parameter              | Description                   | Default |
| ---------------------- | ----------------------------- | ------- |
| redis.enabled          | Enable redis deployed by helm | false   |
| externalRedis.enabled  | Enable external redis         | false   |
| externalRedis.host     | External redis host           | redis   |
| externalRedis.port     | External redis port           | 6379    |
| externalRedis.password | External redis password       | null    |

### Email Server Configuration

| Parameter      | Description                        | Default |
| -------------- | ---------------------------------- | ------- |
| email.host     | Mail server host                   | ''      |
| email.port     | Mail server port                   | 587     |
| email.username | Mail server username               | ''      |
| email.password | Mail server password               | ''      |
| email.tls      | Enable TLS                         | false   |
| email.from     | System mail sender's email address | ''      |

### System Configuration

`system.web.host` is required, setting it, to specify the access domain of Tellery service

If your written language is not English, you can modify your search plugin through [this document](https://github.com/tellery/tellery) to get a better search experience.

| Parameter              | Description                                                | Default                |
| ---------------------- | ---------------------------------------------------------- | ---------------------- |
| system.secretKey       | Secret key for encrypt sensitive information into database | pjfJ2Cbe3sv0Gtz32Krr4A |
| system.search.language | Language for full-text search                              | en                     |
| system.search.plugin   | Pixel plug-in for full-text search                         | null                   |
| system.web.port        | Web server port                                            | 80                     |
| system.web.protocol    | Web server protocol                                        | https                  |
| system.web.host        | Web server host                                            | null                   |

### Initialization Configuration

| Parameter             | Description                       | Default             |
| --------------------- | --------------------------------- | ------------------- |
| init.user.create      | Whether to create first user      | true                |
| init.user.name        | Name of created user              | admin               |
| init.user.email       | Email of created user             | admin@tellery.local |
| init.user.password    | Password of created user          | admin               |
| init.workspace.create | Whether to create first workspace | true                |
| init.workspace.name   | Name of created workspace         | Default             |

### Basic Configuration

| Parameter           | Description                        | Default |
| ------------------- | ---------------------------------- | ------- |
| ingress.enabled     | Enable ingress controller resource | false   |
| ingress.annotations | Ingress annotations configuration  | null    |
| ingress.hostname    | Ingress resource hostname          | null    |
| ingress.tls         | Ingress TLS configuration          | null    |

### Server Configuration

| Parameter                                         | Description                                     | Default        |
| ------------------------------------------------- | ----------------------------------------------- | -------------- |
| images.server.repository                          | Container image repository                      | tellery/server |
| images.server.tag                                 | Container image tag                             | 0.5.0          |
| images.server.pullPolicy                          | Container image pullPolicy                      | IfNotPresent   |
| images.server.imagePullSecrets                    | Container image image pull secrets              | []             |
| server.replicas                                   | desired number of pods                          | 1              |
| server.probeInitialDelaySeconds                   | Delay before liveness probe is initiated        | 10             |
| server.resources                                  | Container resource requests and limits          | {}             |
| server.affinity                                   | Affinity settings for pod assignment            | {}             |
| server.nodeSelector                               | Node labels for pod assignment                  | {}             |
| server.tolerations                                | Toleration labels for pod assignment            | {}             |
| server.podLabels                                  | Ingress labels configuration                    | {}             |
| server.autoscaling.enabled                        | Enable auto scaling                             | false          |
| server.autoscaling.minReplicas                    | Minimum number of pods                          | 1              |
| server.autoscaling.maxReplicas                    | Maximum number of pods                          | 2              |
| server.autoscaling.targetCPUUtilizationPercentage | Define the CPU trigger value of the expansion   | 50             |
| server.service.name                               | Server's port name defined in Service           | http           |
| server.service.type                               | Service Type                                    | ClusterIP      |
| server.service.externalPort                       | Service port                                    | 8000           |
| server.service.annotations                        | Annotations for service assignment              | {}             |
| server.service.externalIPs                        | ExternalIPs for service assignment              | null           |
| server.service.loadBalancerSourceRanges           | LoadBalancerSourceRanges for service assignment | null           |

### Connector Configuration

| Parameter                                            | Description                                     | Default           |
| ---------------------------------------------------- | ----------------------------------------------- | ----------------- |
| images.connector.repository                          | Container image repository                      | tellery/connector |
| images.connector.tag                                 | Container image tag                             | 0.5.0             |
| images.connector.pullPolicy                          | Container image pullPolicy                      | IfNotPresent      |
| images.connector.imagePullSecrets                    | Container image image pull secrets              | []                |
| connector.probeInitialDelaySeconds                   | Delay before liveness probe is initiated        | 10                |
| connector.resources                                  | Container resource requests and limits          | {}                |
| connector.affinity                                   | Affinity settings for pod assignment            | {}                |
| connector.nodeSelector                               | Node labels for pod assignment                  | {}                |
| connector.tolerations                                | Toleration labels for pod assignment            | {}                |
| connector.podLabels                                  | Ingress labels configuration                    | {}                |
| connector.autoscaling.enabled                        | Enable auto scaling                             | false             |
| connector.autoscaling.minReplicas                    | Minimum number of pods                          | 1                 |
| connector.autoscaling.maxReplicas                    | Maximum number of pods                          | 2                 |
| connector.autoscaling.targetCPUUtilizationPercentage | Define the CPU trigger value of the expansion   | 50                |
| connector.service.name                               | Server's port name defined in Service           | http              |
| connector.service.type                               | Service Type                                    | ClusterIP         |
| connector.service.externalPort                       | Service port                                    | 50051             |
| connector.service.annotations                        | Annotations for service assignment              | {}                |
| connector.service.externalIPs                        | ExternalIPs for service assignment              | null              |
| connector.service.loadBalancerSourceRanges           | LoadBalancerSourceRanges for service assignment | null              |
| connector.persistence.enabled                        | Persistence volume for storing configurations   | true              |
| connector.persistence.size                           | Size of Persistence volume                      | 1Gi               |

Using the `--set key\value[,key=value]` argument to specify each parameter

```shell
helm install tellery tellery-stable/tellery --set system.secretKey=xxx --set web.replicas=2
```

Or using the yaml to specify each parameter

Copy these [default configuration](https://github.com/tellery/tellery/blob/master/deploy/helm/values.yaml) into a new file named tellery-config.yaml, then modify as your need.

```shell
helm install tellery tellery-stable/tellery -f tellery-config.yaml
```
