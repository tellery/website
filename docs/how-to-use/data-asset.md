---
sidebar_position: 3
---


# Data asset

This guide will teach you everything you need to know about using data assets and give you some ideas for using them.


## What is a Data asset in Tellery?

Data assets are well-maintained models configured with a dozen of pre-defined metrics.  You can find all available data assets on the right-hand sidebar in your workspace. 

The benefit of using data assets is two-fold:

* **Easy-to-use**: Data assets let business users extract metrics without knowing SQL.
* **Collaborative**: Using data asset across dashboards & reports instead of copy-pasting SQL snippets make your business logic more consistent and easier to maintain. 


## How to create a data asset?

You can create a data asset from any existing question. 

1. Click the "Create as data asset" button in the "Modeling" tab on the right-hand sidebar.
2. Click the + button to add a metric. Currently, Tellery supports two types of metrics:

    * Aggregated metric: calculate the metric by aggregating values within a column
    * Custom SQL metric: calculate the metric by a custom SQL

Don't forget to give it a meaningful name.

**Example**: You can inspect the following data asset Order to see the SQL behind it and its metrics. 


## How to explore a data asset?

* First, drag and drop a data asset from the right-hand sidebar to your story.
* Second, choose at least one metric as well as a couple of dimensions to summarize.


You can also add any visualizations to understand the summarized data better.


## How to use data assets in SQL?

You can open the smart query in the editor to see how to use data assets in SQL. 

Tellery allows you to [embed a piece of SQL (through CTE)](/docs/how-to-use/configure-database) from one question into another.
