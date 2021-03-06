---
sidebar_position: 5

---

import Lightbox from "@site/src/components/lightbox/index.js"

# Changelog

:::note
New updates and improvements to Tellery.

Tellery is still in Beta stage. [Follow us on twitter](https://twitter.com/telleryhq) to find out when features are released.
:::

## v0.8.4 (Nov 3, 2021)

We created a dedicated page for metric exploration. It allows you to ask any questions on existing metrics for your business! Just drag and drop to start!

<Lightbox src='/img/changelog/metric-explore.png' title='Explore' />


After exploring it, you can either move the visualization to a story or copy it into your clipboard. Yes! We've supported "Move to story" to move your block from one story to another. Click ⋮⋮ on a block and select "Move to story". You can search for the name of your target story or create a new one.



#### 💎Enhancements

- Data asset can be canceled without affecting the downstream Smart Query
- `between` operator is supported for specifying a time period in Filters
- Add a `Save` button in the Filter form
- Add syntax highlighting and validation for SQL expression in SQL metric form
- Performance improvements to the SQL editor

#### 🐞Fixed

- Fix a data conflict issue in multiplayer mode
- Fix a bug when copy and paste text within a block
- Match default web port and default protocol
- Fix some minor issues for visualization
- Fix an issue when initializing the config of a chart


## v0.8.3 (Oct 20, 2021)

Another month has passed; here's a quick update on what's changed since October. 
We've been working on a lot of little details.

We finally have **Filter** for metric explorations!
This feature lets you explore a metric against one specific segmentation combined with a series of conditions,
such as (`Version=2.3.0` AND `OS=Android` AND `event=Login`).

<Lightbox src='/img/changelog/filter.png' title='Filter' />


#### 💎Enhancements


- It's now possible to see more information about data assets when selecting them from the right sidebar
- Added 4 type icons for dimensions when querying Data Asset
- Optimized the dropdown menu for choosing dimensions
- Onboarding page of docker-compose deployment
- Data assets now can be searched through their names


#### 🐞Fixed

- Fixed an issue of adding LIMIT into a non-select clause of SQL query (e.g., SHOW TABLES)
- Fixed an issue of importing a CSV file with null fields
- Fixed an issue of copy-pasting question's URLs in the SQL editor
- Error message will be cleared after one successful execution
- Referenced questions will now be refreshed in the "Refresh on open" story
- Fixed an issue of syncing data and visualization in Pie chart



## v0.8.2 (Sept 29, 2021)


For the last two weeks, we've been focused on polishing the interaction of metrics exploration and visualization settings.

We'll soon be working on adding filters to allow segmenting data and comparing measures across different dimensions.


#### 💎Enhancements

- Redesign the icon for data asset🧱🧱🧱
- The left side menu has a new appearance when triggered
- File could be imported into the data warehouse if it uploaded to Postgres storage
- Data assets can be navigated to their block in the original stories
- The right-hand sidebar can be optionally closed by clicking the X at the top right of the tab


#### 🐞Fixed

- Fixed a bug of refreshing data in a visualization
- Fixed a bug of scrolling to query block
- Correct the argument of importing from CSV
- Fixed an overflow issue when hovering code block



## v0.8.1 (Sept 15, 2021)


<Lightbox src='/img/changelog/sidebar.png' title='Sidebar' />


We've been hard at work on improvements to the whole experience of metric exploration. 


We create a brand new sidebar in this release. Not only is this more excellent to look at, but it also makes metrics exploration and visualization settings more convenient! The sidebar will be displayed if you select a question block. It contains three parts:


- **Data:** You can configure the measures and dimensions of a smart query. Changing the measures and dimensions of the smart query will immediately refresh its data and reflect on the story block. We will bring the data configuration of a custom SQL query to this tab in the following release.
- **Visualization:** In this tab, you can pick a visualization type to represent the data returned by the question. Tellery gives a variety of choices: Table/Line/Bar/Area/Scatter/Number/Combo. The changes will take immediate action and sync to the story block.
- **Modeling**: This tab is for data producers. We now display the metrics and the downstream in this tab.


#### ✨New

- Changing the measures and dimensions of the smart query will refresh its data 
- The SQL editor has a new appearance
- All available data assets are now displayed in the sidebar
- Display visualization arrangements, data asset settings, and downstream in the sidebar
- Pasting a link to a question will automatically create a linked question 
- Pasting an URL will automatically generate a hyperlink 
- Code block supported a few more languages syntax highlighting


#### 💎Enhancements

- Change the cursor of dragging blocks within a story
- Improve the performance when scrolled in a story
- Images are now cached for stories 
- Images are now deformed after resizing


#### 🐞Fixed

- Fixed an issue that set cookies expiration by mistake
- Fixed a visualization issue in the chart
- Fixed a display issue of error message when it's too long


## v0.8.0 (Sept 2, 2021)


<Lightbox src='/img/changelog/smart-query.png' title='Data asset' />


Last week brought some significant improvements to data assets. A business user can now extract metrics from a data asset without the assistance of analysts.

1. First, drag and drop a data asset from the left side of your story.
2. Second, choose at least one ** metric** as well as a couple of **dimensions** to summarize.
3. Bang! All metrics you want will be there for you.

To achieve that, you need to add metrics to the data asset first. Currently, Tellery supports two types of metrics:

- Aggregated metrics: calculate the metric by aggregating values within a column
- Custom SQL metrics: calculate the metric by a custom SQL

In the past couple of weeks, we've also rolled out many UI improvements, including visualization block menu and Thoughts preview. 


#### 💎Enhancements

- Tooltips will open instantly if you have another tooltip open
- Generate random avatars for anonymous users
- Optimized the responsive layout for small screens
- Redirect user to the original page where he landed after he logged in
- Inline formula can be modified by clicking it
- Optimized the navigation logic for references in editor
- Hyperlinks/inline formulas have tooltips now 


#### 🐞Fixed

- Fixed an issue of the popover menu when editing text
- Fixed an bug when moving the cursor in the nested block
- Fixed an issue when displaying the title of thoughts in the downstream list
- Fixed an bug of calculating width for the line/bar/area charts
- Fixed an bug of cursor when hitting an enter within a paragraph



## v0.7.0 (Aug 18, 2021)

<Lightbox src='/img/changelog/dbt-integration.png' title='Data assets for dbt models' />


Wow, a half month has passed. Here's a quick update on what's changed since the last version.


#### 🔌Dbt integration

We've added the dbt integration in this version to make the modeling process more smooth. Set up your dbt repository. Tellery now imports all your dbt sources and models as data assets. You can inspect their dbt metadata while editing SQL in Tellery. 


#### 🔢Inline formula


We added inline formula to reference a single number in your story. The inline formula allows you to mention essential numbers in charts/tables. It connects your data and words more tightly. It also supports simple arithmetic. 


#### 💎Enhancements

- Metric is renamed to **Data asset**
- Introduce two new block types: Code block/Math equation block
- Improve the appearance & styles of visualization blocks
- A visualization block can be configured to "frozen" to avoid its data being refreshed by mistake
- Optimize the position of the tooltip when hovering over data points in visualizations
- Add linear display mode to X-axis for line/bar/area chart


#### 🐞Fixed

- Fixed an issue when copying data within visualization block
- Fixed a mouse/keyboard navigation conflict issue in the slash command popup
- Resizing visualization block width will not affect its height now 
- Fixed a bug when typing asterisk before a bi-directional link
- Fixed an issue when pressing the backspace key (will delete two blocks)



## v0.6.0 (Aug 4, 2021)

<Lightbox src='/img/changelog/all-metrics.png' title='All metrics' />


We're excited to introduce Metric in Tellery. A metric is essentially a wrapper that lets you embed a piece of SQL from one question into other questions. It's based on the mechanism of referencing question. 


You can convert any question into Metric and explore it in any story with drag-and-drop ease. All available metrics in the system will be listed on the left side of your story. 🕶


Last but not least, we shipped an online demo at [https://demo.tellery.io/](https://demo.tellery.io/) this week!


#### 💎Enhancements

- Improve the appearance of scrollbar in multiple places
- Support anonymous login mode
- Better error messages for saving transactions
- Optimize the inserting experience of toggle list
- Discard the reminder for slash commands after start typing
- Avatars of recent visitors now have tooltips
- Open thoughts from left sidebar


#### 🐞Fixed

- Resolved alias conflicts when constructing SQL
- Fixed an issue when there are too many tabs in SQL editor
- Fixed an issue when undoing/redoing operations
- Fixed an issue when opening story in right sidebar
- Fixed several text styling issues
- Fixed an collaboration issue when serval ppl editing the same story


## v0.5.0 (Jul 21, 2021)

<Lightbox src='/img/changelog/question-reference-popover.png' title='Question reference popover' />


TThis week we've shipped lots of slight improvements. One thing you might notice is that question references now have popover UI indicators. You can preview the SQL of a question ref easily without navigating to it.

You can make a story refresh all its questions on open. This feature makes the dashboard more intuitive. And Tellery now supports [BigQuery](https://tellery.io/docs/how-to-use/configure-database#bigquery)! 🎉


#### 💎Enhancements

- Display the execution status for each question
- Improved the layout of question block and UX of selecting it
- Improved the database configuration UX
- Improved the performance of loading tooltip for legends
- A block will be highlighted when being navigated to


#### 🐞Fixed

- Invited new users now can change their passwords
- Fixed an issue when users upload avatars
- Fixed an issue when adding new bi-directional links
- Fixed an issue when coloring data points in scatter visualization
- Fixed several text styling issues