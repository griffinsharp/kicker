# README

[Kicker](https://kicker-app.herokuapp.com/#/), a [Kickstarter](https://www.kickstarter.com/) clone, is a crowdfunding application that allows users to collectively help get innovative sneaker related projects, products, and services to the market. If the project receives full funding by the end of its campaign, project backers receive a tiered reward contingent on the amount they pledged. Sneakerheads, rejoice!

## Backend Routes
## HTML
* `GET /` `StaticPagesController#root`
## API Endpoints
### `session`
* `POST /api/session` - logs in
* `DELETE /api/session` - logs out
### `users`
* `GET /api/users/:user_id` - specific user's profile show page
* `POST /api/users` - sign up
### `projects`
* `GET /api/projects` - project index
* `GET /api/projects/:project_id` - specific project's show page
* `POST /api/projects` - create project
* `PATCH /api/projects/:project_id` - edits/update project 
* `DELETE /api/projects/:project_id` - delete project
### `categories`
* `GET /api/categories/:category_id` - all projects from a specific category
### `rewards`
* `POST /api/rewards` - creates a reward for a project
* `DELETE /api/rewards/reward_id` - deletes a reward from a project

## Frontend Routes
Our components are organized as follows:
* `Root`
  * `App`
    * `NavBar`
    * (main component goes here)
    * `Footer`

The following routes, defined in `App`, will render components between `NavBar` and `Footer`.

### Home
* `/`
  * `HomeContainer`
    * `Home`
      * `ProjectIndexContainer`
        * `ProjectIndex`
          * `ProjectIndexItem`
      * `CategoryBar` (Nav bar for categories)

### Log In
* `/login`
  * `SessionFormContainer`
    * `SessionForm` (Log In Page)

### Sign Up
* `/signup`
  * `SessionFormContainer`
    * `SessionForm` (Sign Up Page)

### Project Show
* `/projects/:projectId`
  * `ProjectShowContainer` 
    * `ProjectShow`
      * `Video`
      * `BackingInfo`
      * `Campaign`
      * `Pledge Options`

### Project Create
* `/projects/new`
  * `NewProjectFormContainer` 
    * `NewProjectForm` 

### Project Edit
* `/projects/:projectId/edit`
  * `EditProjectFormContainer` 
    * `EditProjectForm` 

### Pledge (New Pledge for a Specific Project)
* `/projects/:projectId/pledge` 
  * `PledgeFormContainer`
    * `PledgeForm` 

### Category (All Projects Belonging to A Category)
* `/category/:category_name`
  * `HomeContainer`
    * `Home`
      * `ProjectIndexContainer`
        * `ProjectIndex`
          * `ProjectIndexItem`
      * `CategoryBar` (Nav bar for categories)

### Discover
* `/discover`
  * `DiscoverIndexContainer`
    * `DiscoverIndex`
      * `ProjectIndexContainer`
        * `ProjectIndex` (Project Index Page for All)
          * `ProjectIndexItem`
      * `FilterForm` (Filter Discover results)

### Search 
* `/search`
  * `SearchBarContainer`
    * `SearchBar` (Search Bar drop down)

### User
* `/profile/:userId`
  * `UserShowContainer`
    * `UserShow` (User Profile Show Page)


