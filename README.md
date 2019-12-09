## Introduction

[Kicker](https://kicker-app.herokuapp.com/#/), a [Kickstarter](https://www.kickstarter.com/) clone, is a crowdfunding application that allows users to collectively help get innovative sneaker related projects, products, and services to the market. If the project receives full funding by the end of its campaign, project backers receive a tiered reward contingent on the amount they pledged. Sneakerheads, rejoice!

## Features
Here are a few screenshots/gifs of Kicker. To experience the full functionality of the site, please create an account or login as a demo user!

**Site Landing/Home Page**

![HomePage](https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/kickerhome.gif)

**A Typical Project Page with Reward Tiers**

Contributing to a project should update the total amount pledged on the fly. If the project is featured on the home page, it should update there too. 
![ProjectPage](https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/KickerProjectPage.png)

**Search Results Page**

Users can tailor there search results by [insert reason here]. This is done by [insert how]. Problems faced here [insert problems'.

**Categories Page**

Users can explore projects by each category. This was done [blank]. 

**User Auth**

Kicker's user authentication utilizes the BCrypt gem to safely hash and salt password, avoiding the storage of password in a plain-text format. There are backend model and migration level validations, such as password length and email uniqueness, to require users to sign up with valid credentials, and the failure to do so results in the rendering of an associated error.

Many user actions on Kicker require an account, but I didn't want to make this a barrier to accessing all the site's features. That being said, the user signup/login pages have a 'demo user' option if one just wants to look around. 

## Code Snippets

- Code Snippets go here...
- Maybe: sample state, a cool react component, react router/protected route util, etc.

## Technologies Used

- `Ruby on Rails` 
- `React` 
- `Redux` 
- `PostgreSQL` 
- `jBuilder` 
- `Webpack` + `Babel` 

