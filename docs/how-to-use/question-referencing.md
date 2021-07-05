---
sidebar_position: 2
---

import Question from "@site/src/components/Question.js"


# Question referencing


Copy-pasting code between one-off analyses will leave you a mountain of technical debt. Question referencing allows you abstract essential business logic, and reference it in future analysis. They are the LEGO blocks for your analysis. 


Enter powerful question references.


## What is a question reference?


Question reference is a lightweight modeling mechanism to grasp the nuances of your data. Rather than select from existing tables and views in your data warehouse, you can select from another question. Tellery will pull the code from question reference into dependent questions as common table expression.


For example, consider a question which defines "active customers": 


<Question name="active customers">

```sql
select
    date_trunc('day', occurred_at) as dt,
    date_trunc('year', occurred_at) as year,
    region,
    gender,
    user_id
from fact_user_engagement
where event in ('add_to_cart', 'checkout')
```
</Question>


This question captures the nuances of datasets but still allows future analytics code make meaningful choices on appropriate granularity.


The following question references it, applies specific filtering and grouping, and asks "what's the number of daily active customers in 2021, by region":


<Question name="the number of daily active customers in 2021, by region">

```sql
select
    dt, region, count(distinct user_id) as dau
from {{active customers}}
where year = 2021 
group by 1,2
```

</Question>


Question references show the title of question by default. You can recognize a question reference by the highlight:



## How to reference questions?


### Copy their addresses


To link things together, every block in Tellery has an address. We can reference a question by its block address. 


The easiest way to reference a question is by having it in front of you. Move your mouse to the block and the `⋮⋮` icon will appear to the left of it. Click this handle, and then click "Copy block ref" button in dropdown menu to copy its address to your clipboard.


If you paste the address in the question editor, it will be automatically recognized by Tellery.


### Search for them


When editing SQL in the question editor, type double curly braces `{{` to invoke the question referencing.


Then start typing the name of the question you want to reference. Hit "Enter" to pull its address in your editor when you’ve found the question in the dropdown that appears.


## Navigate between questions


Each question reference in question is clickable. You can click it to open the question in another editor tab.


On the right side of each question, Tellery also list all the questions referencing that question
in the **Downstream** section. You can navigate to them to see how they use that question.


## Some Advice


Although transforming and re-shaping data can be very easy in Tellery, we recommend you govern transformations using a batch-based tool like [dbt](https://www.getdbt.com/). Because you can assure data quality and improve performance there.


You can start with question referencing to reduce clutter when answering questions on new datasets. But after the logic is mature, it's better to consolidate them in dbt to create a solid foundation that everyone can share.
