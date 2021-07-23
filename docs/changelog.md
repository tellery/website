---
sidebar_position: 5

---

import Lightbox from "@site/src/components/lightbox/index.js"

# Changelog

:::note
New updates and improvements to Tellery.

[Follow us on twitter](https://twitter.com/telleryhq) to find out when features are released.
:::


## v0.5.0 (Jul 21, 2021)


<Lightbox src='/img/tutorial/question-reference-popover.png' title='Question reference popover' />


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