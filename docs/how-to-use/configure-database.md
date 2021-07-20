---
sidebar_position: 2
---

# Configure a database

To bring your own data into Tellery, You can set up your database profile on Settings > Databases.

A database profile, which is the necessary configurations we have to made to connect to your data warehouse, consists of:

- Name *(the unique identifier of your profile)*

- Connector type *(what kind of database you are connecting)*

- Configurations & Optionals *(host, port, etc. differs from each kind of connector. For more details, see sections below)*

## Snowflake

To connect with Snowflake, you need to provide:

|     Field    |                             Description                           |    Example    | Required |
|:------------:|:-----------------------------------------------------------------:|:-------------:|:--------:|
| Account Name |                    Your Snowflake account name                    |    xy12345    |   yes    |
|  Region Id   |                     Your Snowflake region Id                      | us-ease-2.aws |   yes    |
|   Username   |                     Your Snowflake username                       |   login_name  |   yes    |
|   Password   |                     Your Snowflake password                       | your_password |   yes    |
|     Role     |  The default access control role to use in the Snowflake session  |    SYSADMIN   |    no    |
|  Warehouse   |                The virtual warehouse to run queries               |   COMPUTE_WH  |    no    |

Snowflake connector supports importing data from csv without any other configuration.

## Redshift

To connect with Redshift, you need to provide:

|   Field    |                          Description                           |                             Example                            | Required |
|:----------:|:--------------------------------------------------------------:|:--------------------------------------------------------------:|:--------:|
|  Endpoint  |              The hostname of your Redshift cluster             |  examplecluster.abc123xyz789.us-west-2.redshift.amazonaws.com  |   yes    |
|    Port    | The port number that you specified when launched, usually 5439 |                               5439                             |   yes    |
|  Username  |   The username you created when initializing cluster           |                           your_username                        |   yes    |
|  Password  |   The password your created when initializing cluster          |                           your_password                        |   yes    |
|  Database  |   The logical database to connect to and run queries against   |                               my_db                            |   yes*   |

:::note
Since the Redshift is based on PostgreSQL, the configuration of Redshift will be similar to that of PostgreSQL. If you are interested in this topic, please read the note in [PostgreSQL](#postgreSQL)
:::

### Optionals

To support importing csv to Redshift, you need to provide aws credentials for uploading csv file into your S3. Note that the region of S3 must be the same as your Redshift cluster.

## PostgreSQL

|    Field   |                           Description                          |    Example    | Required |
|:----------:|:--------------------------------------------------------------:|:-------------:|:--------:|
|  Endpoint  |         The hostname of your PostgreSQL database               |   localhost   |   yes    |
|    Port    | The port number that you specified when launched, usually 5432 |     5432      |   yes    |
|  Username  |     The user / role that granted access to your database       | your_username |   yes    |
|  Password  |                      Your password                             | your_password |   yes    |
|  Database  |   The logical database to connect to and run queries against   |     my_db     |   yes*   |

:::note
The database argument is mandatory for postgreSQL, by default it would be the same as your username.

In the setting of postgreSQL, databases stand for the topmost hierarchical level of organizing database objects, so you cannot do cross-database queries without other plugins.

Therefore, our connector will restrict your accessibility into the database you configured, all of the other databases are invisible even if you got the permission.

This setting will be also applied to Redshift.
:::

## BigQuery

The only thing you need to connect your BigQuery is your key file, which can be generated following the instruction [here](https://cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)

The uploaded json file should populate the following fields:

- Project id
- Private key id
- Private key
- Client email
- Client id
- Auth uri
- Token uri
- Auth provider x509 cert url
- Client x509 cert url
