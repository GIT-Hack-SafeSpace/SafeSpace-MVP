# SafeSpace
[![Netlify Status](https://api.netlify.com/api/v1/badges/85440566-24b0-4ff8-bdb2-81771e75dd15/deploy-status)](https://app.netlify.com/sites/safespacemvp/deploys)

Built in conjunction with the **Girls in Tech Mental Health for All Hackathon**:
Building an inclusive future requires mental health and wellbeing technologies that cater to all

- [Deployed App](https://safespacemvp.netlify.app/)
- [Project Board](https://github.com/GIT-Hack-SafeSpace/SafeSpace-MVP/projects/1)

---
## Getting Started
```
$ git clone git@github.com:GIT-Hack-SafeSpace/SafeSpace-MVP.git
$ cd SafeSpace-MVP
$ npm i
$ npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## TODO:
- Introduction
- Purpose & Motivation
- How does the application work?
- How was the application developed?
- How to use the application
- Difficulties & Challenges faced during the design and/or development process.
- Go-to-Market (How will the application be available to the public, and is it scalable?)


## Introduction
According to an independent study by [McKinsey and Company](https://wiw-report.s3.amazonaws.com/Women_in_the_Workplace_2021.pdf), “women of color are more likely to face disrespectful and ‘othering’ microaggressions”, which perpetuate workplace trauma. Black women are facing these issues at an alarmingly disproportionate rate.

We are often still expected to produce excellent work throughout these violent experiences and there is not a place for us to be free of judgement to share with other Black women who are also on the healing journey through workplace trauma, which can make us feel alone and lead to depression. 

During the trauma, we may not realize that we need to track these instances or need a community. As such, these events often go unreported and our source for proof is defined based on memory alone.

We need a place that we can feel safe to share, or at the very least, keep track of these occurrences so that when the time comes, we will have a list of these things ready for us to make our case.

SafeSpace. also collects data on these issues for the world to see the impacts on Black women and how it hits companies’ bottom line. By tracking and fighting back in this way, we can help ourselves and other Black women know that they are not alone and that something must be done to stop workplace violence. 


## Purpose & Motivation
According to the McKinsey and Company study and our own constant personal experiences, as Black women, we experience more microaggressions than other groups of women, and are three to four times as likely as white women to be subjected to disrespectful and “othering” comments and behavior. We are also less likely to report that our managers check in on our well-being or help us balance priorities and deadlines.

The motivation behind this application is two-fold. To provide a SafeSpace. for us to go in the midst of the violent behaviors we endure as a place for relief and centering and to document the incidents. In recording the incidents, not only do we name our trauma and record how we have handled and grown through our healing, but it also provides us with the documentation we need when we decide enough is enough and need to report the behavior. 

## How does the application work?
Users are able to join and sign into SafeSpace. anonymously by using their email address, which sends them a link to the email address they used to login to the application.

When a user logs in for the first time, they are prompted to set up their username, password, and if they are a member of the LGBTQA+ community. Then, they are taken to a Conflict Assessment that tells them a little more about themselves. This also allows other users to see the type of the person with whom they are interacting so, when giving advice, commenters can frame the advice in a way that meets the requester’s style.

For every subsequent login, users are prompted to tell SafeSpace. how they are feeling after which, they enter the journal view where they can very quickly add an entry to their log to keep as reference for private use or to share with the community for advice.

The Journal is the central feature of this application because it allows Black women to keep track of work related trauma associated with different types of microaggressions and work through those at their own pace or have as a recorded reference for future use. 

There are options for the user to check out the community posts, recommend stellar companies, add or find inspiration, and/or look through resources for support in their area.


## How was the application developed?
As a team, we planned the application by creating user flows, a low-fidelity wireframe and data relationships. Then, we created a prototype in Figma. We built SafeSpace. using Next JS, styled-components, supabase as the database, React Bootstrap, Bootstrap 5, and React Select.

We followed accessibility (a11y) guidelines using the WAVE Web Accessibility Evaluation Tool Chrome Extension and Web Content Accessibility Guidelines (WCAG) a11y guidelines. 


## How to use the application
Users can login to SafeSpace. on any device with an internet connection, create journal entries of workplace microaggressions, follow, comment, and react to community posts, view resources and inspiration, and recommend companies that are doing diversity, equity and inclusion right.


## Difficulties & Challenges faced during the design and/or development process
Ensuring that we all were on the right path for the outcomes of the app because it is easy to slip into the social media path, but we intentionally worked as a team to define who and why the app exists and the how and what was easily obtained.


## Go-to-Market (How will the application be available to the public, and is it scalable?)
*NEEDS INFO

## ENV Vars
In order for the project to run locally, you will need to set up your `.env` file. There is a sample file. DUPLICATE it and rename it `.env` and reach out to another team member for the keys.

## Add Industries
navigate to `data/industries.js` and add new key value pairs

## How to contribute
The `main` branch is protected. All development work should be against the `development` branch.

PRs against both the `main` and `development` branches require at least one approval from the organization owners

# App Details
As a team of fullstack software engineers, our team decided on technologies that could produce a usable, scalable MVP version of the prototype.

## Tech Stack
- [Next JS](https://nextjs.org/)
- [Supabase](https://supabase.io/)
- [Styled Components](https://styled-components.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Boostrap 5](https://getbootstrap.com/)
- [React Select](https://react-select.com/home)
- [React Player](https://www.npmjs.com/package/react-player)

## Design Tools
- [Figma](https://www.figma.com/)
- [Bootstrap UI Kit](https://www.figma.com/file/b7uhIbsiy3tTGFJbDzKcWg/Bootstrap-UI-Kit-Community)
- [WAVE Web Accessibility Evaluation Tool Chrome Extension](https://webaim.org/)
- [Web a11y guidelines - design and color](http://web-accessibility.carnegiemuseums.org/design/color/)
