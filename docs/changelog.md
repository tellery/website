---
sidebar_position: 5

---

import Lightbox from "@site/src/components/lightbox/index.js"

# Changelog

:::note
New updates and improvements to Tellery.

Tellery is still in Beta stage. [Follow us on twitter](https://twitter.com/telleryhq) to find out when features are released.
:::


## v0.8.0 (Sept 2, 2021)


Last week brings some great improvements to data assets. A business user now can extract metrics from a data asset without the assistance of analysts.

1. First, drag and drop a data asset from the left side of your story.
2. Second, choose at least one **Metric** as well as a couple of **Dimensions** to summarize.
3. Bang! All metrics you wanted will be there for you.


<Lightbox src='/img/changelog/smart-query.png' title='Data asset' />


To achieve that, you need to add metrics to the data asset first. Currently, Tellery supports two types of metric:

- Aggregated metric: calculate the metric by aggregating values within a column
- Custom SQL metric: calculate the metric by a custom SQL

We've also rolled out a number of UI improvements including visualization block menu, Thoughts preview in the past couple of weeks. 


#### Enhancements

- Tooltips will open instantly if you have another tooltip open
- Generate random avatars for anonymous users
- Optimized the responsive layout for small screens
- Redirect user to the original page where he landed after he logged in
- Inline formula can be modified by clicking it
- Optimized the navigation logic for references in editor
- Hyperlinks/inline formulas have tooltips now 


#### Fixed

- Fixed an issue of the popover menu when editing text
- Fixed an bug when moving the cursor in the nested block
- Fixed an issue when displaying the title of thoughts in the downstream list
- Fixed an bug of calculating width for the line/bar/area charts
- Fixed an bug of cursor when hitting an enter within a paragraph



## v0.7.0 (Aug 18, 2021)

Wow, a half month has passed, here's a quick update on what's changed since the last version.


### Dbt integration

We've added the dbt integration in this version to make the modelling process more smooth. Set up your dbt repository, Tellery now imports all your dbt sources and models as data assets. You can inspect their dbt metadata while editing SQL in Tellery. 


<Lightbox src='/img/changelog/dbt-integration.png' title='Data assets for dbt models' />


### Inline formula


We added inline formula to reference a single number in your story. The inline formula allows you to mention important numbers in charts/tables. It connects your data and words more tightly. It also supports simple arithmetic. 


#### Enhancements

- Metric is renamed to **Data asset**
- Introduce two new block types: Code block/Math equation block
- Improve the appearance & styles of visualization blocks
- A visualization block can be configured to "frozen" to avoid its data being refreshed by mistake
- Optimize the position of the tooltip when hovering over data points in visualizations
- Add linear display mode to X-axis for line/bar/area chart


#### Fixed

- Fixed an issue when copying data within visualization block
- Fixed a mouse/keyboard navigation conflict issue in the slash command popup
- Resizing visualization block width will not affect its height now 
- Fixed a bug when typing asterisk before a bi-directional link
- Fixed an issue when pressing the backspace key (will delete two blocks)



## v0.6.0 (Aug 4, 2021)

We’re excited to introduce Metric in Tellery. A metric is essentially a wrapper that lets you embed a piece of SQL from one question into other questions. It's based on the mechanism of referencing question. 


You can convert any question into Metric and explore it in any stories with drag-and-drop ease. All available metrics in the system will be listed on the left side of your story. 🕶

<Lightbox src='/img/changelog/all-metrics.png' title='All metrics' />


Last but not least, we shipped an online demo at [https://demo.tellery.io/](https://demo.tellery.io/) this week!


#### Enhancements

- Improve the appearance of scrollbar in multiple places
- Support anonymous login mode
- Better error messages for saving transactions
- Optimize the inserting experience of toggle list
- Discard the reminder for slash commands after start typing
- Avatars of recent visitors now have tooltips
- Open thoughts from left sidebar


#### Fixed

- Resolved alias conflicts when constructing SQL
- Fixed an issue when there are too many tabs in SQL editor
- Fixed an issue when undoing/redoing operations
- Fixed an issue when opening story in right sidebar
- Fixed several text styling issues
- Fixed an collaboration issue when serval ppl editing the same story


## v0.5.0 (Jul 21, 2021)

<Lightbox src='/img/changelog/question-reference-popover.png' title='Question reference popover' />


This week we've shipped lots of little improvements, one thing you might notice is that question references now have popover UI indicators. You can preview the SQL of a question ref easily without navigating to it.

You can make a story refresh all its questions on open. This feature makes dashboard more intuitive. And Tellery now supports [BigQuery](https://tellery.io/docs/how-to-use/configure-database#bigquery)! 🎉


#### Enhancements

- Display the execution status for each question
- Improved the layout of question block and UX of selecting it
- Improved the database configuration UX
- Improved the performance of loading tooltip for legends
- A block will be highlighted when being navigated to


#### Fixed

- Invited new users now can change their passwords
- Fixed an issue when users upload avatars
- Fixed an issue when adding new bi-directional links
- Fixed an issue when coloring data points in scatter visualization
- Fixed several text styling issues