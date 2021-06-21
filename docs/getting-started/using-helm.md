---
sidebar_position: 3
---

# Production Setup

Running your own Tellery with Kubernetes

## Prerequisites

- [Helm](https://docs.helm.sh/docs/intro/install/) 3.0+
- Kubernetes 1.10+

## Installing the Chart

First of all, add the repo

```shell
helm repo add tellery https://xxxxxx
```

To install the helm chart with release name `release-name`:

```shell
helm install release-name tellery \
--set redis.enabled=true \
--set postgresql.enabled=true
```

If you want to provide advanced parameters with your installation you can check the full [Configuration](#configuration).

### Installing with Postgresql and Redis

```shell
helm install release-name tellery \
--set redis.enabled=true \
--set postgresql.enabled=true
```

See [Redis Helm Chart](https://artifacthub.io/packages/helm/bitnami/redis/14.3.3#parameters) and [Postgresql Helm Chart](https://artifacthub.io/packages/helm/bitnami/postgresql/10.4.8#parameters) for more configurations

### Installing with external Postgresql and Redis

```shell
helm install release-name tellery \
--set externalPostgresql.host=postgresqlAddress \
--set externalPostgresql.port=5432 \
--set externalPostgresql.username=postgres \
--set externalPostgresql.password=password \
--set externalPostgresql.database=tellery \
--set externalRedis.enabled=true \
--set externalRedis.host=redisAddress \
--set externalRedis.port=6379
```

> Redis is optional, it will be allowed not to set `redis.enabled=true` and `externalRedis.enabled=true`

## Uninstall the Chart

```shell
helm uninstall release-name
```

## Configuration

The following table lists the configurable parameters of the Tellery chart and their default values.

| Parameter                   | Description                                                | Default                |
| --------------------------- | ---------------------------------------------------------- | ---------------------- |
| ingress.enabled             | Enable ingress controller resource                         | false                  |
| ingress.annotations         | Ingress annotations configuration                          | null                   |
| ingress.hostname            | Ingress resource hostname                                  | null                   |
| ingress.tls                 | Ingress TLS configuration                                  | null                   |
| postgresql.enabled          | Enable postgresql deployed by helm                         | false                  |
| externalPostgresql.host     | External postgresql host                                   | postgresql             |
| externalPostgresql.port     | External postgresql port                                   | 5432                   |
| externalPostgresql.database | External postgresql Database name                          | tellery                |
| externalPostgresql.username | External postgresql username                               | postgres               |
| externalPostgresql.password | External postgresql password                               | ''                     |
| redis.enabled               | Enable redis deployed by helm                              | false                  |
| externalRedis.enabled       | Enable external redis                                      | false                  |
| externalRedis.host          | External redis host                                        | redis                  |
| externalRedis.port          | External redis port                                        | 6379                   |
| externalRedis.password      | External redis password                                    | null                   |
| system.secretKey            | Secret key for encrypt sensitive information into database | pjfJ2Cbe3sv0Gtz32Krr4A |
| system.search.language      | Language for full-text search                              | en                     |
| system.search.plugin        | Pixel plug-in for full-text search                         | null                   |
| system.web.port             | Web server port                                            | 80                     |
| system.web.protocol         | Web server protocol                                        | https                  |
| system.web.host             | Web server host                                            | null                   |
| system.server.port          | Backend server port                                        | 8000                   |
| email.host                  | Mail server host                                           | ''                     |
| email.port                  | Mail server port                                           | 587                    |
| email.username              | Mail server username                                       | ''                     |
| email.password              | Mail server password                                       | ''                     |
| email.tls                   | Enable TLS                                                 | false                  |
| email.from                  | System mail sender's email address                         | ''                     |
| oss.bucket                  | Oss bucket                                                 | tellery-uploads        |
| oss.region                  | Oss region                                                 | ''                     |
| oss.accessKey               | Oss access key                                             | ''                     |
| oss.secretKey               | Oss secret key                                             | ''                     |

The following configuration is configured for each service, the following uses `$NAME` instead of `(web | api | connector)`

| Parameter                                        | Description                                     | Default       |
| ------------------------------------------------ | ----------------------------------------------- | ------------- |
| images.$NAME.repository                          | Container image repository                      | tellery/web   |
| images.$NAME.tag                                 | Container image tag                             | 0.1.0         |
| images.$NAME.pullPolicy                          | Container image pullPolicy                      | IfNotPresent  |
| images.$NAME.imagePullSecrets                    | Container image image pull secrets              | []            |
| $NAME.replicas                                   | desired number of pods                          | 1             |
| $NAME.probeInitialDelaySeconds                   | Delay before liveness probe is initiated        | 10            |
| $NAME.resources                                  | Server resource requests and limits             | {}            |
| $NAME.affinity                                   | Affinity settings for pod assignment            | {}            |
| $NAME.nodeSelector                               | Node labels for pod assignment                  | {}            |
| $NAME.tolerations                                | Toleration labels for pod assignment            | {}            |
| $NAME.podLabels                                  | Ingress labels configuration                    | {}            |
| $NAME.autoscaling.enabled                        | Enable auto scaling                             | false         |
| $NAME.autoscaling.minReplicas                    | Minimum number of pods                          | 1             |
| $NAME.autoscaling.maxReplicas                    | Maximum number of pods                          | 2             |
| $NAME.autoscaling.targetCPUUtilizationPercentage | Define the CPU trigger value of the expansion   | 50            |
| $NAME.service.name                               | Server's port name defined in Service           | http          |
| $NAME.service.type                               | Service Type                                    | ClusterIP     |
| $NAME.service.externalPort                       | Service port                                    | 80,8000,50051 |
| $NAME.service.annotations                        | Annotations for service assignment              | {}            |
| $NAME.service.externalIPs                        | ExternalIPs for service assignment              | null          |
| $NAME.service.loadBalancerSourceRanges           | LoadBalancerSourceRanges for service assignment | null          |

Using the `--set key\value[,key=value]` argument to specify each parameter

```shell
helm install release-name . --set system.secretKey=xxx --set web.replicas=2
```

Or using the yaml to specify each parameter

```yaml
# config.yaml
system:
  secretKey: xxx
web:
  replicas: 2
```

```shell
helm install release-name tellery -f config.yaml
```
