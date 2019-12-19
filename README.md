## Introduction

[Kicker](https://kicker-app.herokuapp.com/#/), a [Kickstarter](https://www.kickstarter.com/) clone, is a crowdfunding application that allows users to collectively help get innovative sneaker related projects, products, and services to the market. If the project receives full funding by the end of its campaign, project backers receive a tiered reward contingent on the amount they pledged. Sneakerheads, rejoice!

Kicker's design documents, such as database schema, sample state, and frontend/backend routes, can be found on the [Wiki](https://github.com/griffinsharp/Kicker/wiki).

## Features
Here are a few screenshots/gifs of Kicker. To experience the full functionality of the site, please create an account or login as a demo user!

**Site Landing/Home Page**

This is what users are greeted with upon navigating to the website. A navbar, one featured project, reccomended projects, call to action banners, and some curated projects.

<p align="center"> 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/kickerhome.gif">
</p>

**A Typical Project Page with Reward Tiers**

Contributing to a project should update the total amount pledged immediately. If the project is featured on the home page or its category's page, it should update there too. 

<p align="center"> 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/KickerProjectPage.png">
</p>

**Search Results**

Users can filter projects by category and location, and sort by company favorites, newest, nearly funded, end date, most backed, and random.

**Categories**

Essentially, each category has its own 'home' page with its own featured, reccomended, and handpicked projects to dipslay. Here I was able to reuse the home page components with varying content, keeping my code DRY and reusable, while dynamically rendering different header descriptions based on the url `/category/:categoryId` thanks to `React Router`. 

**User Auth**

Many user actions on Kicker require an account (creating or backing a project, for example), but I didn't want to make this a barrier to accessing all the site's features. To get around this, the user signup/login pages have a 'demo user' option if one wants to get the full experience without taking the time to sign up. 

## Code Snippets

**Session Component**

This component renders both the login and sign up forms. This was done via using two different `Redux` containers for `/signup` or `/login`, and providing the proper state (form type, links, errors, etc.) and actions (login or logout) accordingly. `React` components should only really be concerned with the rendering of information, but one is able to change what this information via props. 

<p align="center"> 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/sessioncomponent.png">
</p>

**Projects Reducer**

This `Redux` reducer is reponsible for listening for various actions, such as when a single project's information is requested or a project is backed, and updates the [project slice of state](https://github.com/griffinsharp/Kicker/wiki/Sample-State) accordingly. If an action is executed, and the project reducer doesn't have a case to execute a reponse (such as logging out the current user), it will return the previous state.

<p align="center"> 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/projectsreducer.png">
</p>

**Backings Controller**

Here is a fairly straightforward `Rails` controller. When an ajax `POST` request is made to `/api/backings` to create a new backing for a project, if given the right parameters with a logged in user, the backing will be saved to the database with the proper reward, project, and user associations. A `api/backings/show` view is rendered and presented via jBuilder, specifying what information is needed on the frontend to account for this change. 

<p align="center"> 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/backingscontroller.png">
</p>

**User Model**

Kicker's user authentication utilizes the `BCrypt` gem to safely hash and salt password, avoiding the storage of password in a plain-text format. There are `Rails` backend model and migration level validations, such as password length and email uniqueness, to require users to sign up with valid credentials, and the failure to do so results in the rendering of an associated error.

<p align="center"> 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/usermodel.png">
</p>
		

## Technologies Used

- `Ruby on Rails` 
- `React` 
- `Redux` 
- `PostgreSQL` 
- `jBuilder` 
- `Webpack` + `Babel` 

## Future Plans

- I have plans to make Kicker mobile responsive and fully avaiable to users with web accessibility issues.
