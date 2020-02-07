<p align="center" > 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/logo.png">
</p>

## Introduction 👟

[Kicker](https://kicker-app.herokuapp.com/#/), a [Kickstarter](https://www.kickstarter.com/) clone, is a crowdfunding application that allows users to collectively help get innovative sneaker related projects, products, and services to the market. If the project receives full funding by the end of its campaign, project backers receive a tiered reward contingent on the amount they pledged. Sneakerheads, rejoice!

Kicker's design documents, such as the [database schema](https://github.com/griffinsharp/Kicker/wiki/Database-Schema), [sample state](https://github.com/griffinsharp/Kicker/wiki/Sample-State), and [frontend](https://github.com/griffinsharp/Kicker/wiki/Frontend-Routes)/[backend](https://github.com/griffinsharp/Kicker/wiki/Backend-Routes) routes, can be found on the [Wiki](https://github.com/griffinsharp/Kicker/wiki).

## Features ⚡️
Here are a few screenshots/gifs of Kicker. **To experience the full functionality of the site (back projects, create projects, etc.), please create an account or login as a demo user!**

**Site Landing/Home Page**

This is what users are greeted with upon navigating to the website. A navbar, one featured project, reccomended projects, call to action banners, and some curated projects.

<p align="center"> 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/homepage.gif">
</p>

**Project Page with Reward Tiers**

Contributing to a project should update the total amount pledged immediately. If the project is featured on the home page or its category's page, it should update there too. 

<p align="center" > 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/projdonate.gif">
</p>

**Project Creation**

Users can create their own projects, able to customize their campaign by title, subtitle, description, company bio, category, project location, goal amount, and campaign duration. If you're in a rush and just want to see your project live, values for these fields will automaticaly be filled in for you. 

<p align="center" > 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/projcreate.gif">
</p>

**Search Results**

Users can filter projects by category and location, and sort by company favorites, newest, nearly funded, end date, most backed, and random.

<p align="center"> 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/search.gif">
</p>

**Categories**

Essentially, each category has its own 'home' page with its own featured, reccomended, and handpicked projects to dipslay. Here I was able to reuse the home page components with varying content, keeping my code DRY and reusable, while dynamically rendering different header descriptions based on the url `/category/:categoryId` thanks to `React Router`. 

<p align="center"> 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/categories.gif">
</p>

**Demo User**

Many user actions on Kicker require an account (creating or backing a project, for example), but I didn't want to make this a barrier to accessing all the site's features. To get around this, the user signup/login pages have a 'demo user' option if one wants to get the full experience without taking the time to sign up. Attempting one of these protected actions without being logged in will direct the user to the sign in page. A red error bar will appear, explaining why the redirection occured, and after signing in, the user will then be re-directed to whatever page they were enjoying previously. 

**Explore Modal**

Clicking "explore" on the navigation bar allows for quick access to many parts of the website via a pop-up modal. 

<p align="center" > 
<img src="https://github.com/griffinsharp/Kicker/blob/master/app/assets/images/newmodal.gif">
</p>

## Code Snippets ⚛️

**Session Component**

This component renders both the login and sign up forms. This was done via using two different `Redux` containers for `/signup` or `/login`, and providing the proper state (form type, links, errors, etc.) and actions (login or logout) accordingly. `React` components should only really be concerned with the rendering of information, but one is able to change what this information via props. 

```javascript
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      repeatPassword: "hidden",
      repeatEmail: "hidden"
    },
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.demoUserLogin = this.demoUserLogin.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.handleErrors());
  }

  handleClick() {
    if (this.props.location.pathname === "/signup") {
      this.setState({ repeatPassword: "session-type-input s-two" });
    }
  }
  
  // ...rest of component
}
```

**Projects Reducer**

This `Redux` reducer is reponsible for listening for various actions, such as when a single project's information is requested or a project is backed, and updates the [project slice of state](https://github.com/griffinsharp/Kicker/wiki/Sample-State) accordingly. If an action is executed, and the project reducer doesn't have a case to execute a reponse (such as logging out the current user), it will return the previous state.

```javascript
const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      newState[action.payload.project.id] = action.payload.project;
      return newState;
    case RECEIVE_BACKING:
      newState[action.payload.project.id] = action.payload.project;
      return newState;
    default:
      return oldState;
  }
};
```

**Backings Controller**

Here is a fairly straightforward `Rails` controller. When an ajax `POST` request is made to `/api/backings` to create a new backing for a project, if given the right parameters with a logged in user, the backing will be saved to the database with the proper reward, project, and user associations. A `api/backings/show` view is rendered and presented via jBuilder, specifying what information is needed on the frontend to account for this change. 

```ruby 
class Api::BackingsController < ApplicationController

    def index
        @backings = Backing.all
        render 'api/rewards/index'
    end

    def create
        @backing = Backing.new(backing_params)
        @backing.user_id = current_user.id
        
        if @backing.save
            render 'api/backings/show'
        else
            render json: ["You need to be signed in to pledge to a project."], status: 401
        end
    end

    private

    def backing_params
        params.require(:backing).permit(:user_id, :reward_id, :project_id, :backing_amount)
    end

end
```

**User Model + Authentication**

Kicker's user authentication utilizes the `BCrypt` gem to safely hash and salt password, avoiding the storage of password in a plain-text format. There are `Rails` backend model and migration level validations, such as password length and email uniqueness, to require users to sign up with valid credentials, and the failure to do so results in the rendering of an associated error.

```ruby
class User < ApplicationRecord

# confirm our 'null: false' database constraint on the model level
validates :email, :name, :session_token, :password_digest, presence: true
# confirm our 'unique: true' database constraint on the model level
validates :email, uniqueness: true
validates :password, length: {minimum: 6}, allow_nil: true

attr_reader :password 

before_validation :ensure_session_token

has_many :projects,
foreign_key: :user_id,
class_name: :Project

has_many :backings,
foreign_key: :user_id,
class_name: :Backing

has_many :rewards,
through: :backings,
source: :reward

def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
end

# Make our password digest equal to a bcrypt object we
# generated using the user's password.
def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
end

def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
end

# If we have a session token already, use that value.
# If we do not, create a new session token, thus ensuring one exists.
def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
end

def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
end

end
```
		
## Technologies Used 📟 

- `Ruby on Rails` 
- `React`
- `Redux`
- `PostgreSQL` 
- `jBuilder` 
- `Webpack` + `Babel` 

## Future Plans 🤷‍♂️

- I have plans to make Kicker mobile responsive and fully avaiable to users with web accessibility issues.
