---
sidebar_position: 2
---

# Configure a database

To bring your own data into Tellery, You can add a profile to your connector server (by default it will be bootstrapped together with your deployment).

A profile consists of:

- connector type *(what kind of database you are connecting)*

- authentication *(username, password)*

- configurations & optionals *(host, port, etc. differs from each kind of connector. For more details, see sections below)*

## Snowflake

To connect with Snowflake, you need to provide:

|    Field    |                             Description                           |    Example    | Required |
|:-----------:|:-----------------------------------------------------------------:|:-------------:|:--------:|
| accountName |                    your Snowflake account name                    |    xy12345    |   yes    |
|   regionId  |                     your Snowflake region Id                      | us-ease-2.aws |   yes    |
|     role    |  the default access control role to use in the Snowflake session  |    SYSADMIN   |    no    |
|  warehouse  |                the virtual warehouse to run queries               |   COMPUTE_WH  |    no    |


Snowflake connector supports importing data from csv without any other configuration.

## Redshift

To connect with Redshift, you need to provide:

|    Field    |                           Description                          |                             Example                            | Required |
|:-----------:|:--------------------------------------------------------------:|:--------------------------------------------------------------:|:--------:|
|  endpoint  |               The hostname of your Redshift cluster             |  examplecluster.abc123xyz789.us-west-2.redshift.amazonaws.com  |   yes    |
|    port    | The port number that you specified when launched , usually 5439 |                               5439                             |   yes    |
|  database  |    The logical database to connect to and run queries against   |                               my_db                            |   yes*   |

:::note
Since the Redshift is based on PostgreSQL, the configuration of Redshift will be similar to that of PostgreSQL. If you are interested in this topic, please read the note in [PostgreSQL](#postgreSQL)
:::

### Optionals

To support importing csv to Redshift, you need to provide aws credentials for uploading csv file into your S3. Note that the region of S3 must be the same as your Redshift cluster.

## PostgreSQL

|    Field    |                           Description                          |   Example   | Required |
|:-----------:|:--------------------------------------------------------------:|:-----------:|:--------:|
|  endpoint  |          The hostname of your PostgreSQL database               |  localhost  |   yes    |
|    port    | The port number that you specified when launched , usually 5432 |    5432     |   yes    |
|  database  |    The logical database to connect to and run queries against   |    my_db    |   yes*   |

:::note
The database argument is mandatory for postgreSQL, by default it would be the same as your username.

In the setting of postgreSQL, databases stand for the topmost hierarchical level of organizing database objects, so you cannot do cross-database query without other plugins.

Therefore, our connector will restrict your accessibility into the database you configured, all of other databases are invisible even if you got the permission.

This settings will be also applied to Redshift.
:::
