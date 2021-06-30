---
sidebar_position: 2
id: available-connectors
---

# Available Connectors

Right at the time a Tellery workspace were initialized, the first thing comes to mind would be how to bring your own data into Tellery.

We provides connector of mainstream cloud data warehouses to help you explore your own data in a easy and almost zero-configuration way. All you need to do is just clicking into workspace settings and adding a profile to connect with your data warehouse.

Meanwhile, if your data warehouse were deployed on-premise or even in an isolated environment, you could also bridge it to Tellery by deploying a connector by yourself with simple configuration. For more details, check [detailed connector configurations](/docs/connector/deployment)

So far we supports the following:

## Snowflake

profile type: `jdbc:snowflake`

connection string format: `jdbc:snowflake://<account_name>.snowflakecomputing.com/?<connection_params>`

e.g. `jdbc:snowflake://xy12345.eu-central-1.snowflakecomputing.com/?warehouse=mywh&db=mydb&schema=public`

For detailed guidance, see [Here](https://docs.snowflake.com/en/user-guide/jdbc-configure.html)

*Note*: This connector supports importing data from csv without any other configuration.
## Redshift

profile type `jdbc:redshift`

connection string format: `jdbc:redshift://endpoint:port/database`

e.g. `jdbc:redshift://examplecluster.abc123xyz789.us-west-2.redshift.amazonaws.com:5439/dev`

For detailed guidance, see [Here](https://docs.aws.amazon.com/redshift/latest/mgmt/jdbc20-install.html)

*Note:*

To support importing csv to Redshift, the following optionals should be fulfilled

- `S3_ACCESS_KEY`
- `S3_SECRET_KEY`
- `S3_REGION`
- `S3_BUCKET`
- `S3_KEY_PREFIX`

The given s3 region should be the same as your Redshift instance.

### Postgresql

profile type: `jdbc:postgresql`

connection string format: `jdbc:postgresql://endpoint:port/database`

For detailed guidance, see [Here](https://jdbc.postgresql.org/documentation/head/connect.html)

**Note**: The database argument is mandatory for postgresql, by default it would be the same as your username.

In the setting of postgresql, databases stand for the topmost hierarchical level of organizing database objects, so you cannot do cross-database query without other plugins.

Therefore, our connector will restrict your accessibility into the database you configured, all of other databases are invisible even if you got the permission.
