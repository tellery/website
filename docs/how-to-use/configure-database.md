---
sidebar_position: 2
---

# Configure a database

To bring your own data into Tellery, You can add a profile to your connector server (by default it will be bootstrapped together with your deployment).

A profile consists of:

- connector type *(what kind of database you are connecting)*

- connection string *(basically the remote address of your database, along with some configuration)*

- authentication *(username, password)*

- optionals *(some miscellaneous configurations, differs from each kind of connector. For more details, see sections below)*

:::note
Since our connectors are based on JDBC, you can always put extra configuration on the connection string.

Nonetheless, the connection string will be returned to the frontend as plain text. Hence, for the security of your own data, **do not put the authentication into connection string**.
:::

## Snowflake

To connect with Snowflake, you need to provide:

- username
- password
- a [JDBC connection string](https://docs.snowflake.com/en/user-guide/jdbc-configure.html#jdbc-driver-connection-string)

Snowflake connector supports importing data from csv without any other configuration.

## Redshift

To connect with Redshift, you need to provide:

- username
- password
- a [JDBC connection string](https://docs.aws.amazon.com/redshift/latest/mgmt/jdbc20-obtain-url.html) (database required)

:::note
Since the Redshift is based on PostgreSQL, the configuration of Redshift will be similar to that of PostgreSQL. If you are interested in this topic, please read the note in [PostgreSQL](#postgreSQL)
:::

### Optionals

To support importing csv to Redshift, you need to provide aws credentials for uploading csv file into your S3. Note that the region of S3 must be the same as your Redshift cluster.

## PostgreSQL

- username
- password
- a [JDBC connection string](https://jdbc.postgresql.org/documentation/head/connect.html) (database required)

:::note
The database argument is mandatory for postgreSQL, by default it would be the same as your username.

In the setting of postgreSQL, databases stand for the topmost hierarchical level of organizing database objects, so you cannot do cross-database query without other plugins.

Therefore, our connector will restrict your accessibility into the database you configured, all of other databases are invisible even if you got the permission.

This settings will be also applied to Redshift.
:::
