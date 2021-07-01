---
sidebar_position: 2
---

# Question referencing


Copy-pasting code between one-off analyses will leave you a mountain of technical debt. Question referencing allows you abstract essential business logic, and reference it in future analysis. They are the LEGO blocks for your analysis.


Enter powerful questions references.


## What is a question reference?

Question reference is a lightweight modeling mechanism to grasp the nuances of your data. They have no different with any ordinary questions in Tellery, unless you can `select from` them directly in another question. 


To link things together, every block in Tellery has an address. We can reference a question by its address. One of the most useful case of question reference is to calculate a metric and reuse it in multiple places.


## How to reference questions?


### Copy their addresses



The easiest way to reference a question is by having it in front of you. Move your mouse to the block and the `⋮⋮` icon will appear to the left of it. Click this handle, and then click "Copy block ref" button in dropdown menu to copy its address to your clipboard.


If you paste the address in question editor, it will be automatically recognized by Tellery.


### Search for them


When editing SQL in the question editor, type double curly braces `{{` to invoke the question referencing.


Then start typing the name of the question you want to reference. Hit "Enter" to pull its address in your editor when you’ve found the question in the dropdown that appears.


## Navigate among linked questions


Each question reference will be rendered as a follow link. To open the referenced question with another editor tab, you can:


1. Click the question title above it
2. Press "Alt/Option" and click the link
3. Hover on the link, then click the question title in the popup that appears


On the right side of each question, Tellery also list downstream questions, showing all the questions that link to that question. You can navigate to them to see how use those questions reference that question.


## Behind the scene


Unlike persistent table in the data warehouse, referenced questions are interpolated as a common table expression [like dbt's ephemeral model](https://docs.getdbt.com/docs/building-a-dbt-project/building-models/materializations#ephemeral).


### Some Advice


If you have complex transformations. We recommend you govern them using a batch processing tool like dbt.
Because you can assure data quality and improve performance.


But If you have a series of metrics relying on different filtering logic to extract them. The lightweight question referencing will be more flexible. 

