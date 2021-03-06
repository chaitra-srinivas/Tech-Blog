# Tech Talk ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Overview

Tech Talk is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This application is built using JavaScript, Express.js, and Sequelize as the ORM to interact with MySQL. Handlebars.js is used as the templating engine. It follows the MVC paradigm in it's architectural structure.

## User Story

```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

```

## Acceptance Criteria

```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

```

## Table of Contents

- [Overview](#overview)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Deployed Application](#deployed-application)
- [Questions](#questions)
- [License](#license)

  ## Installation

  - Clone repository.
  - Should have access to Visual Studio and MySql
  - Run npm install to install packages/dependencies (Express, mysql2, sequelize,handlebars).

  ## Usage

  The deployed link will launch the application on a web browser. The user can sign-up and use the login credentials to login to the application to create, update, delete his own posts and is able to view and comment on other user's posts.

  ## Screenshots

  ![Home page](/public/assets/homepage.png)

  ![Login page](/public/assets/loginpage.png)
  
  ![Dashboard](/public/assets/dashboard.png)
 
 
  ## Deployed Application
 [Tech Talk](https://tech-talk-21.herokuapp.com/)

  ## Questions

  For any questions regarding the project please visit my
  GitHub Profile @
  [chaitra-srinivas](https://github.com/chaitra-srinivas)
  or you can reach me @ cmurthy.dev@gmail.com

  ## License

  [MIT](https://opensource.org/licenses/MIT)
  This application is convered under the MIT License.

  Copyright © 2021 Chaitra Srinivasamurthy
