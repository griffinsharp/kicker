# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# destroy smallest to biggest
# create biggest to smallest
require 'open-uri'

Backing.destroy_all
Reward.destroy_all
Project.destroy_all
Category.destroy_all
User.destroy_all

# USERS
demo = User.create!(email: 'demouser@demo.com', password: 'demo123', name: "Demo User")
allBirds = User.create!(email: 'allBirds@bob.com', password: 'allbirds123', name: "All Birds")
nike = User.create!(email: 'nike@bob.com', password: 'nike123', name: "Nike")
adidas = User.create!(email: 'adidas@bob.com', password: 'adidas123', name: "Adidas")
sandlot = User.create!(email: 'blazer@bob.com', password: 'blazer123', name: "The Sandlot")
golf = User.create!(email: 'golf@bob.com', password: 'golf123', name: "Golf")
offWhite = User.create!(email: 'offWhite@bob.com', password: 'offwhite123', name: "Off-White")
shoeCreator = User.create!(email: 'shoeCreator@bob.com', password: 'shoecreator123', name: "Alex Ports")
kickIt = User.create!(email: 'kickit@bob.com', password: 'kickit123', name: "Kick It")

# ART USERS
art1 = User.create!(email: 'demouser1@demo.com', password: 'demo123', name: "We Luv Art")
art2 = User.create!(email: 'demouser2@demo.com', password: 'demo123', name: "SF Art Students")
art3 = User.create!(email: 'demouser3@demo.com', password: 'demo123', name: "Pablo Picas Co.")

# COMICS USERS
ill1 = User.create!(email: 'demouser4@demo.com', password: 'demo123', name: "Draw R US")
ill2= User.create!(email: 'demouser5@demo.com', password: 'demo123', name: "Stencil It")
ill3 = User.create!(email: 'demouser6@demo.com', password: 'demo123', name: "Pencil N Pen")

# DESIGN
tech1 = User.create!(email: 'demouser7@demo.com', password: 'demo123', name: "Scrum")
tech2 = User.create!(email: 'demouser8@demo.com', password: 'demo123', name: "The UX Experience")
tech3 = User.create!(email: 'demouser9@demo.com', password: 'demo123', name: "2 Week Sprint")

# FILM
film1 = User.create!(email: 'demouser10@demo.com', password: 'demo123', name: "Artsy Film Guys")
film2 = User.create!(email: 'demouser11@demo.com', password: 'demo123', name: "Film Isn't Dead")
film3 = User.create!(email: 'demouser12@demo.com', password: 'demo123', name: "Movie Pass")

# FOOD
food1 = User.create!(email: 'demouser13@demo.com', password: 'demo123', name: "Flavor Town")
food2 = User.create!(email: 'demouser14@demo.com', password: 'demo123', name: "NomNom")
food3 = User.create!(email: 'demouser15@demo.com', password: 'demo123', name: "Let's Build Fam")

# GAMES
game1 = User.create!(email: 'demouser16@demo.com', password: 'demo123', name: "Twitchy")
game2 = User.create!(email: 'demouser17@demo.com', password: 'demo123', name: "500GB of RAM")
game3 = User.create!(email: 'demouser18@demo.com', password: 'demo123', name: "GTX 9000")

# MUSIC
music1 = User.create!(email: 'demouser19@demo.com', password: 'demo123', name: "The Old Kanye")
music2 = User.create!(email: 'demouser20@demo.com', password: 'demo123', name: "Feel Like Kobe")
music3 = User.create!(email: 'demouser21@demo.com', password: 'demo123', name: "Ultralight")

# PUBLISHING
pub1 = User.create!(email: 'demouser23@demo.com', password: 'demo123', name: "Old Times")
pub2 = User.create!(email: 'demouser24@demo.com', password: 'demo123', name: "Audioless Books")
pub3 = User.create!(email: 'demouser25@demo.com', password: 'demo123', name: "Need My Readers")


# CATEGORIES
art = Category.create!(category_name: 'Arts') 
comics_ill = Category.create!(category_name: 'Comics & Illustration') 
design_tech = Category.create!(category_name: 'Design & Tech')
film = Category.create!(category_name: 'Film')
food_craft = Category.create!(category_name: 'Food & Craft')
games = Category.create!(category_name: 'Games')
music = Category.create!(category_name: 'Music')
publishing = Category.create!(category_name: 'Publishing')

# GROUP 1

art7Project = Project.create!(title: 'We Draw It!',
        sub_title: "Give us a pen, two weeks, and a shoe. We'll send you a custom drawing back.",
        total_pledged: 500,
        goal_amount: 6000,
        num_backers: 12,
        days_left: 34,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: art.id,
        user_id: art2.id)

nikeProject = Project.create!(title: 'Nike: The Art Collection',
        sub_title: 'An iconic brand with even more iconic art. Just Do It. Summer 2020.',
        total_pledged: 123,
        goal_amount: 12345,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'Just Do It.',
        category_id: comics_ill.id,
        user_id: nike.id)

tech3Project = Project.create!(title: 'AirMag',
        sub_title: "No more laces. Just style.",
        total_pledged: 34,
        goal_amount: 23,
        num_backers: 12,
        days_left: 20,
        loved: true,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: design_tech.id,
        user_id: tech3.id)

sandlotProject = Project.create!(title: "Run Faster, Jump Higher",
        sub_title: "Like it's 1993 all over again.",
        total_pledged: 123,
        goal_amount: 56740,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'Benny Was Here.',
        category_id: film.id,
        user_id: sandlot.id)

golfProject = Project.create!(title: 'GOLF',
        sub_title: "Help Tyler, the Creator launch his new Fall/Winter line.",
        total_pledged: 123,
        goal_amount: 7864,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'What an Odd Future we have.',
        category_id: music.id,
        user_id: golf.id)

game4Project = Project.create!(title: 'Modern Shoefare',
        sub_title: "The most shoe-centric Call of Duty yet. Watch your (Jordan) 6, solider.",
        total_pledged: 2400,
        goal_amount: 34000,
        num_backers: 23,
        days_left: 50,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: games.id,
        user_id: game1.id)

shoeCreatorProject = Project.create!(title: 'Crafty',
        sub_title: "Nobody likes generic clothing. Learn how to make your own with Crafty.",
        total_pledged: 123,
        goal_amount: 8000,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'Crafty is a U.S. fashion brand.',
        category_id: food_craft.id,
        user_id: shoeCreator.id)

kickItProject = Project.create!(title: 'Can I Kick It?',
        sub_title: "Yes, you can. Introducing, Kick It. The newest app for buying, selling, and trading your favorite sneakers all from your smartphone.",
        total_pledged: 123,
        goal_amount: 1234,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile w some info.',
        category_id: publishing.id,
        user_id: kickIt.id)

# GROUP ART -----------------------------------

art1Project = Project.create!(title: 'All the Colors',
        sub_title: "We love our sneakers. And so will you.",
        total_pledged: 23,
        goal_amount: 65,
        num_backers: 45,
        days_left: 3,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: art.id,
        user_id: art1.id)

art2Project = Project.create!(title: 'Struttin',
        sub_title: "Walk on down. Let's make dreams a reality.",
        total_pledged: 0,
        goal_amount: 500,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: art.id,
        user_id: art2.id)

art3Project = Project.create!(title: 'Comics for Your Feet',
        sub_title: "Our goal is to let you live out your childhood, forever.",
        total_pledged: 0,
        goal_amount: 4000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: art.id,
        user_id: art3.id)

art4Project = Project.create!(title: 'Just Another Art Project',
        sub_title: "Exit through the gift shop, please.",
        total_pledged: 0,
        goal_amount: 4000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: art.id,
        user_id: art1.id)

art5Project = Project.create!(title: 'Neon Dreams',
        sub_title: "We brighten up your day with your favorite sneakers, literally.",
        total_pledged: 0,
        goal_amount: 4000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: art.id,
        user_id: art2.id)

art6Project = Project.create!(title: 'Wall Hangers',
        sub_title: "Put something up in your apartment that even your Mom will be proud of.",
        total_pledged: 0,
        goal_amount: 4000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: art.id,
        user_id: art3.id)

allBirdsProject = Project.create!(title: 'All Birds',
        sub_title: 'Our first shoe was the Wool Runner, which is made from New Zealand superfine merino wool.',
        total_pledged: 123,
        goal_amount: 5000,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'Allbirds is a New Zealand-American footwear company which uses a direct-to-consumer approach and is aimed at designing environmentally friendly footwear.',
        category_id: art.id,
        user_id: allBirds.id)


# GROUP COMIC

ill1Project = Project.create!(title: 'Sneaker Sketch',
        sub_title: "Design your own sneakers, all from your tablet.",
        total_pledged: 0,
        goal_amount: 4000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: comics_ill.id,
        user_id: ill1.id)

ill2Project = Project.create!(title: 'Prototypal Inheritance',
        sub_title: "No need for a designer anymore. Do it all yourself. ",
        total_pledged: 0,
        goal_amount: 4000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: comics_ill.id,
        user_id: ill2.id)

ill3Project = Project.create!(title: 'Between The Lines',
        sub_title: "A new sketch book built for all ages.",
        total_pledged: 0,
        goal_amount: 4000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: comics_ill.id,
        user_id: ill3.id)

ill4Project = Project.create!(title: 'Crazy Ideas',
        sub_title: "Just a collection of sketches from a shoe artist. Hope you like it as much as I do.",
        total_pledged: 0,
        goal_amount: 4000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: comics_ill.id,
        user_id: ill1.id)
        
ill5Project = Project.create!(title: '1 Shoe, 2 Shoe',
        sub_title: "The 20 most iconic sneakers of the past 20 years sketched by famous artists.",
        total_pledged: 0,
        goal_amount: 4000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: comics_ill.id,
        user_id: ill2.id)

ill6Project = Project.create!(title: 'Two Brothers',
        sub_title: "Who Are Just Regular Brothers Running In A Van From An Asteroid.",
        total_pledged: 0,
        goal_amount: 4000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: comics_ill.id,
        user_id: ill3.id)

ill7Project = Project.create!(title: 'Sneaker Papers',
        sub_title: "Wallpaper generator for all your devices. Just upload a photo and watch the magic.",
        total_pledged: 0,
        goal_amount: 4000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: comics_ill.id,
        user_id: ill1.id)

# GROUP DESIGN

tech1Project = Project.create!(title: 'YourID',
        sub_title: "The future of footwear. No more shopping in person. Customize and order all from your device.",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: design_tech.id,
        user_id: tech1.id)


tech2Project = Project.create!(title: 'Glow Up',
        sub_title: "It's time to glow up. Our hundreds of staff designers are here to match you with the perfect shoe for any occasion.",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: design_tech.id,
        user_id: tech2.id)


adidasProject = Project.create!(title: 'Adidas',
        sub_title: 'Stripes over checks.',
        total_pledged: 123,
        goal_amount: 2500,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'Stripes over checks.',
        category_id: design_tech.id,
        user_id: adidas.id)


tech4Project = Project.create!(title: 'RunTrackR',
        sub_title: "A new, discrete device that goes under the sole of your shoe. Track your speed, calories, distance, and more.",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: design_tech.id,
        user_id: tech1.id)


tech5Project = Project.create!(title: 'Back Nine',
        sub_title: "Golf shoes have always looked lame. We're here to change that forever. Considered the game changed.",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: design_tech.id,
        user_id: tech2.id)


tech6Project = Project.create!(title: 'Shoe App',
        sub_title: "The newest shoe App for mobile. Probably written in Swift or React Native. Check it out!",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: design_tech.id,
        user_id: tech3.id)


tech7Project = Project.create!(title: 'Blocked',
        sub_title: "We are not really sure what it does yet, but it does look pretty cool.",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: design_tech.id,
        user_id: tech1.id)



# GROUP FILM

film1Project = Project.create!(title: 'Jump',
        sub_title: "The shoes of the 1980's. Such an iconic time in sneaker history, so we're making a movie about it. ",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: film.id,
        user_id: film1.id)

film2Project = Project.create!(title: 'Gump',
        sub_title: "So I just started running...",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: film.id,
        user_id: film2.id)
        
film3Project = Project.create!(title: 'Back to the Future VR',
        sub_title: "We are going back. The old classic in virtual reality.",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: film.id,
        user_id: film3.id)

film4Project = Project.create!(title: 'Her',
        sub_title: "Help us get our start making this short film about Converse.",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: film.id,
        user_id: film1.id)

film5Project = Project.create!(title: 'Forrest',
        sub_title: "My Mama always said you've got to put the past behind you before you can move on.",
        total_pledged: 0,
        goal_amount: 27600,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: film.id,
        user_id: film2.id)

film6Project = Project.create!(title: 'The 90s',
        sub_title: "A movie about skater kids and the shoes that defined their era.",
        total_pledged: 0,
        goal_amount: 27600,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: film.id,
        user_id: film3.id)
        
film7Project = Project.create!(title: 'Ballin',
        sub_title: "It all started with that pair of shoes. Coming Summer 2020.",
        total_pledged: 0,
        goal_amount: 27600,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: film.id,
        user_id: film1.id)

# GROUP FOOD

food1Project = Project.create!(title: 'Yarn',
        sub_title: "Order shoe textiles to your door with free video tutorials to guide you through making your first shoe.",
        total_pledged: 0,
        goal_amount: 27600,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: food_craft.id,
        user_id: film1.id)

food2Project = Project.create!(title: 'Pete Zah',
        sub_title: "Pizza shoes for the win.",
        total_pledged: 0,
        goal_amount: 27600,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: food_craft.id,
        user_id: film2.id)

food3Project = Project.create!(title: 'Nom Nom Nom',
        sub_title: "One. Two. Three. Gone.",
        total_pledged: 0,
        goal_amount: 27600,
        num_backers: 0,
        days_left: 14,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: food_craft.id,
        user_id: film3.id)

food4Project = Project.create!(title: 'Treats and Sweets',
        sub_title: "Like Postmates for sneakers, but also food. Ever wanted to order from McDonalds and Nike at the same time? Us too.",
        total_pledged: 0,
        goal_amount: 27600,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: food_craft.id,
        user_id: film1.id)

food5Project = Project.create!(title: 'Sneaker Supply Co.',
        sub_title: "Handcrafted using only the finest ingredients. The finest. Only the best. Seriously, really good. Back us!",
        total_pledged: 0,
        goal_amount: 27600,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: food_craft.id,
        user_id: film2.id)

food6Project = Project.create!(title: 'Built To Last',
        sub_title: "They don't make them like this anymore. Except us. We make them like that still.",
        total_pledged: 0,
        goal_amount: 27600,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: food_craft.id,
        user_id: film3.id)

food7Project = Project.create!(title: 'Tools Etc.',
        sub_title: "A new monthly box delivery service. Shoe crafting items delivered to your door every 30 days.",
        total_pledged: 0,
        goal_amount: 27600,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: food_craft.id,
        user_id: film1.id)

# GROUP GAMES

game1Project = Project.create!(title: 'More Colors',
        sub_title: "Create your own designs. Post them to inspire others. Meet clients. Profit!",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: games.id,
        user_id: game1.id)

game2Project = Project.create!(title: 'TRON Runner',
        sub_title: "Run through dimensions.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: games.id,
        user_id: game2.id)

game3Project = Project.create!(title: 'Up Down Punch Kick',
        sub_title: "Only on Playstation.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: games.id,
        user_id: game3.id)

offWhiteProject = Project.create!(title: 'Off-White',
        sub_title: "Not black. Not White. Somewhere in the middle. Help us create the future.",
        total_pledged: 123,
        goal_amount: 5000,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile w some info.',
        category_id: games.id,
        user_id: offWhite.id)

game5Project = Project.create!(title: '2K Kicks',
        sub_title: "The new mobile app to accompany NBA 2K. Get your players look right before you hit the court.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: games.id,
        user_id: game2.id)

game6Project = Project.create!(title: 'Miami Vice 2020',
        sub_title: "Drifting into the new year. In this new MMO, you're an international shoe dealer.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: games.id,
        user_id: game3.id)

game7Project = Project.create!(title: 'Active Gaming Footwear',
        sub_title: "The first shoes exclusively for gamers by Puma.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: games.id,
        user_id: game1.id)

# GROUP MUSIC

music1Project = Project.create!(title: 'Sunshine in a Bag',
        sub_title: "Gorillaz on your feet. Get them while they last.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: music.id,
        user_id: music1.id)

music2Project = Project.create!(title: 'Notified',
        sub_title: "The best sneakers for musicians.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: music.id,
        user_id: music2.id)

music3Project = Project.create!(title: 'Red October',
        sub_title: "Kanye Kanye Kanye Kanye",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: music.id,
        user_id: music3.id)

music4Project = Project.create!(title: 'Cold World',
        sub_title: "An American rapper, singer, songwriter, producer, and record executive. Help us bring out a new album.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: music.id,
        user_id: music1.id)

music5Project = Project.create!(title: 'Fire Pt. 2',
        sub_title: "Just straight up fire. The best freestyles and more.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: music.id,
        user_id: music2.id)

music6Project = Project.create!(title: 'I Miss the Old Kanye',
        sub_title: "A fan-made mixtape of the Yeezy creator's best hits.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: music.id,
        user_id: music3.id)

music7Project = Project.create!(title: 'New Fashion',
        sub_title: "This is the new wave. Let's ride.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: music.id,
        user_id: music1.id)

# GROUP PUBLISHING

pub1Project = Project.create!(title: 'Shoe Times',
        sub_title: "A new subscription plan. No more online. Only print.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: publishing.id,
        user_id: pub1.id)

pub2Project = Project.create!(title: 'Print is Alive',
        sub_title: "And it is here to stay.",
        total_pledged: 0,
        goal_amount: 60000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: publishing.id,
        user_id: pub2.id)

pub3Project = Project.create!(title: 'Shoes Master',
        sub_title: "We love our sneakers. And so will you.",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: publishing.id,
        user_id: pub3.id)

pub4Project = Project.create!(title: 'The Ultimate Sneaker Book!',
        sub_title: "All the most iconic speakers, all in one book.",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: publishing.id,
        user_id: pub1.id)

pub5Project = Project.create!(title: 'GP Shoes',
        sub_title: "See how modern sneakers came to be. From the early 1900s to now, all documented for the first time ever.",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: publishing.id,
        user_id: pub2.id)

pub6Project = Project.create!(title: 'Air Maxed Out',
        sub_title: "The extension book to The Ultimate Sneaker Book. Even more shoes and sneakers.",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: publishing.id,
        user_id: pub3.id)

pub7Project = Project.create!(title: 'The Dunk Book',
        sub_title: "Nike's most iconic silhouette. Interviews, pictures, and more.",
        total_pledged: 0,
        goal_amount: 30000,
        num_backers: 0,
        days_left: 32,
        loved: false,
        location: 'the United States',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile with some info.',
        category_id: publishing.id,
        user_id: pub1.id)

# PHOTOS

allBirdsPhoto = open("https://kicker-seed.s3-us-west-1.amazonaws.com/allBirds.png")
allBirdsProject.photo.attach(io: allBirdsPhoto, filename: 'allBirds.png')
nikePhoto = File.open('app/assets/images/nike.jpeg')
nikeProject.photo.attach(io: nikePhoto, filename: 'nike.jpeg')
adidasPhoto = File.open('app/assets/images/adidas.jpeg')
adidasProject.photo.attach(io: adidasPhoto, filename: 'adidas.jpeg')
sandlotPhoto = open("https://kicker-seed.s3-us-west-1.amazonaws.com/pf.jpg")
sandlotProject.photo.attach(io: sandlotPhoto, filename: 'pf.jpg')
golfPhoto = File.open('app/assets/images/golf.jpg')
golfProject.photo.attach(io: golfPhoto, filename: 'golf.jpg')
offWhitePhoto = File.open('app/assets/images/offwhite.jpg')
offWhiteProject.photo.attach(io: offWhitePhoto, filename: 'offwhite.jpg')
shoeCreatorPhoto = File.open('app/assets/images/shoecreator.jpg')
shoeCreatorProject.photo.attach(io: shoeCreatorPhoto, filename: 'shoecreator.jpg')
kickItPhoto = File.open('app/assets/images/featured.jpg')
kickItProject.photo.attach(io: kickItPhoto, filename: 'featured.jpg')

# PHOTOS ART ---------------

art1Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/art1.jpg")
art1Project.photo.attach(io: art1Photo, filename: 'art1.jpg')

art2Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/art2.jpg")
art2Project.photo.attach(io: art2Photo, filename: 'art2.jpg')

art3Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/art3.jpg")
art3Project.photo.attach(io: art3Photo, filename: 'art3.jpg')

art4Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/art4.jpg")
art4Project.photo.attach(io: art4Photo, filename: 'art4.jpg')

art5Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/art5.jpg")
art5Project.photo.attach(io: art5Photo, filename: 'art5.jpg')

art6Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/art6.jpg")
art6Project.photo.attach(io: art6Photo, filename: 'art6.jpg')

art7Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/art7.png")
art7Project.photo.attach(io: art7Photo, filename: 'art7.png')

# PHOTOS COMICS ------------------

ill1Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/ill1.jpg")
ill1Project.photo.attach(io: ill1Photo, filename: 'ill1.jpg')

ill2Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/ill2.jpg")
ill2Project.photo.attach(io: ill2Photo, filename: 'ill2.jpg')

ill3Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/ill3.jpg")
ill3Project.photo.attach(io: ill3Photo, filename: 'ill3.jpg')

ill4Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/ill4.jpg")
ill4Project.photo.attach(io: ill4Photo, filename: 'ill4.jpg')

ill5Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/ill5.jpg")
ill5Project.photo.attach(io: ill5Photo, filename: 'ill5.jpg')

ill6Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/ill6.jpeg")
ill6Project.photo.attach(io: ill6Photo, filename: 'ill6.jpeg')

ill7Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/ill7.jpg")
ill7Project.photo.attach(io: ill7Photo, filename: 'ill7.jpg')

# PHOTOS TECH

tech1Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/tech1.png")
tech1Project.photo.attach(io: tech1Photo, filename: 'tech1.png')

tech2Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/tech2.jpg")
tech2Project.photo.attach(io: tech2Photo, filename: 'tech2.jpg')

tech3Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/tech3.jpeg")
tech3Project.photo.attach(io: tech3Photo, filename: 'tech3.jpeg')

tech4Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/tech4.jpg")
tech4Project.photo.attach(io: tech4Photo, filename: 'tech4.jpg')

tech5Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/tech5.jpg")
tech5Project.photo.attach(io: tech5Photo, filename: 'tech5.jpg')

tech6Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/tech6.jpg")
tech6Project.photo.attach(io: tech6Photo, filename: 'tech6.jpg')

tech7Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/tech7.jpg")
tech7Project.photo.attach(io: tech7Photo, filename: 'tech7.jpg')

# PHOTOS FILM

film1Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/film1.jpeg")
film1Project.photo.attach(io: film1Photo, filename: 'film1.jpeg')

film2Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/film2.png")
film2Project.photo.attach(io: film2Photo, filename: 'film2.png')

film3Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/film3.jpg")
film3Project.photo.attach(io: film3Photo, filename: 'film3.jpg')

film4Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/film4.jpg")
film4Project.photo.attach(io: film4Photo, filename: 'film4.jpg')

film5Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/film5.jpg")
film5Project.photo.attach(io: film5Photo, filename: 'film5.jpg')

film6Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/film6.jpg")
film6Project.photo.attach(io: film6Photo, filename: 'film6.jpg')

film7Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/film7.jpg")
film7Project.photo.attach(io: film7Photo, filename: 'film7.jpg')

# PHOTOS FOOD

food1Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/food1.jpg")
food1Project.photo.attach(io: food1Photo, filename: 'food1.jpg')

food2Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/food2.jpeg")
food2Project.photo.attach(io: food2Photo, filename: 'food2.jpeg')

food3Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/food3.jpeg")
food3Project.photo.attach(io: food3Photo, filename: 'food3.jpeg')

food4Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/food4.jpg")
food4Project.photo.attach(io: food4Photo, filename: 'food4.jpg')

food5Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/food5.jpg")
food5Project.photo.attach(io: food5Photo, filename: 'food5.jpg')

food6Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/food6.jpeg")
food6Project.photo.attach(io: food6Photo, filename: 'food6.jpeg')

food7Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/food7.jpg")
food7Project.photo.attach(io: food7Photo, filename: 'food7.jpg')

# PHOTOS GAME

game1Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/game1.jpeg")
game1Project.photo.attach(io: game1Photo, filename: 'game1.jpeg')

game2Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/game2.jpg")
game2Project.photo.attach(io: game2Photo, filename: 'game2.jpg')

game3Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/game3.jpg")
game3Project.photo.attach(io: game3Photo, filename: 'game3.jpg')

game4Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/game4.jpg")
game4Project.photo.attach(io: game4Photo, filename: 'game4.jpg')

game5Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/game5.jpg")
game5Project.photo.attach(io: game5Photo, filename: 'game5.jpg')

game6Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/game6.jpg")
game6Project.photo.attach(io: game6Photo, filename: 'game6.jpg')

game7Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/game7.jpg")
game7Project.photo.attach(io: game7Photo, filename: 'game7.jpg')

# PHOTO MUSIC

music1Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/music1.jpg")
music1Project.photo.attach(io: music1Photo, filename: 'music1.jpg')

music2Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/music2.jpg")
music2Project.photo.attach(io: music2Photo, filename: 'music2.jpg')

music3Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/music3.jpg")
music3Project.photo.attach(io: music3Photo, filename: 'music3.jpg')

music4Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/music4.jpg")
music4Project.photo.attach(io: music4Photo, filename: 'music4.jpg')

music5Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/music5.jpg")
music5Project.photo.attach(io: music5Photo, filename: 'music5.jpg')

music6Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/music6.jpg")
music6Project.photo.attach(io: music6Photo, filename: 'music6.jpg')

music7Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/music7.png")
music7Project.photo.attach(io: music7Photo, filename: 'music7.png')

# PHOTO PUBLISHING

pub1Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/pub1.jpg")
pub1Project.photo.attach(io: pub1Photo, filename: 'pub1.jpg')

pub2Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/pub2.jpg")
pub2Project.photo.attach(io: pub2Photo, filename: 'pub2.jpg')

pub3Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/pub3.jpg")
pub3Project.photo.attach(io: pub3Photo, filename: 'pub3.jpg')

pub4Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/pub4.jpeg")
pub4Project.photo.attach(io: pub4Photo, filename: 'pub4.jpeg')

pub5Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/pub5.jpg")
pub5Project.photo.attach(io: pub5Photo, filename: 'pub5.jpg')

pub6Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/pub6.jpg")
pub6Project.photo.attach(io: pub6Photo, filename: 'pub6.jpg')

pub7Photo = open("https://kicker-seed.s3-us-west-1.amazonaws.com/pub7.jpg")
pub7Project.photo.attach(io: pub7Photo, filename: 'pub7.jpg')


# SAVE
allBirdsProject.save!
nikeProject.save!
adidasProject.save!
sandlotProject.save!
golfProject.save!
offWhiteProject.save!
shoeCreatorProject.save!

art1Project.save!
art2Project.save!
art3Project.save!
art4Project.save!
art5Project.save!
art6Project.save!
art7Project.save!

ill1Project.save!
ill2Project.save!
ill3Project.save!
ill4Project.save!
ill5Project.save!
ill6Project.save!
ill7Project.save!

tech1Project.save!
tech2Project.save!
tech3Project.save!
tech4Project.save!
tech5Project.save!
tech6Project.save!
tech7Project.save!

film1Project.save!
film2Project.save!
film3Project.save!
film4Project.save!
film5Project.save!
film6Project.save!
film7Project.save!

food1Project.save!
food2Project.save!
food3Project.save!
food4Project.save!
food5Project.save!
food6Project.save!
food7Project.save!

game1Project.save!
game2Project.save!
game3Project.save!
game4Project.save!
game5Project.save!
game6Project.save!
game7Project.save!

music1Project.save!
music2Project.save!
music3Project.save!
music4Project.save!
music5Project.save!
music6Project.save!
music7Project.save!

pub1Project.save!
pub2Project.save!
pub3Project.save!
pub4Project.save!
pub5Project.save!
pub6Project.save!
pub7Project.save!


# Each first reward out of the 4 rewards per project is a dummy reward that I replace with "Make a pledge without a reward."

reward0KickIt = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: kickItProject.id)  
reward1KickIt = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: kickItProject.id) 
reward2KickIt = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: kickItProject.id)
reward3KickIt = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: kickItProject.id)

reward0AllBirds = Reward.create!(amount: 10, desc: "test test test test", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 30, project_id: allBirdsProject.id)  
reward1AllBirds = Reward.create!(amount: 40, desc: "test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: allBirdsProject.id) 
reward2AllBirds = Reward.create!(amount: 60, desc: "test test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 3, project_id: allBirdsProject.id)
reward3AllBirds = Reward.create!(amount: 60, desc: "test test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 3, project_id: allBirdsProject.id)

reward0Nike = Reward.create!(amount: 10, desc: "test test test test", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 25, project_id: nikeProject.id)  
reward1Nike = Reward.create!(amount: 25, desc: "test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 13, project_id: nikeProject.id) 
reward2Nike = Reward.create!(amount: 80, desc: "test test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 4, project_id: nikeProject.id)
reward3Nike = Reward.create!(amount: 80, desc: "test test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 4, project_id: nikeProject.id)

reward0Adidas = Reward.create!(amount: 10, desc: "adidas1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 25, project_id: adidasProject.id)  
reward1Adidas = Reward.create!(amount: 100, desc: "adidas2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 5, project_id: adidasProject.id) 
reward2Adidas = Reward.create!(amount: 150, desc: "adidas3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 2, project_id: adidasProject.id)
reward3Adidas = Reward.create!(amount: 150, desc: "adidas3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 2, project_id: adidasProject.id)

reward0Blazer = Reward.create!(amount: 10, desc: "test test test test", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 30, project_id: sandlotProject.id)  
reward1Blazer = Reward.create!(amount: 65, desc: "test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 5, project_id: sandlotProject.id) 
reward2Blazer = Reward.create!(amount: 150, desc: "test test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 2, project_id: sandlotProject.id)
reward3Blazer = Reward.create!(amount: 150, desc: "test test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 2, project_id: sandlotProject.id)

reward0Golf = Reward.create!(amount: 10, desc: "test test test test", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 25, project_id: golfProject.id)  
reward1Golf = Reward.create!(amount: 90, desc: "test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 3, project_id: golfProject.id) 
reward2Golf = Reward.create!(amount: 160, desc: "test test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 2, project_id: golfProject.id)
reward3Golf = Reward.create!(amount: 160, desc: "test test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 2, project_id: golfProject.id)

reward0OffWhite = Reward.create!(amount: 10, desc: "offwhite1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 25, project_id: offWhiteProject.id)  
reward1OffWhite = Reward.create!(amount: 100, desc: "offwhite2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 50, project_id: offWhiteProject.id) 
reward2OffWhite = Reward.create!(amount: 200, desc: "offwhite3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 20, project_id: offWhiteProject.id)
reward3OffWhite = Reward.create!(amount: 200, desc: "offwhite3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 20, project_id: offWhiteProject.id)

reward0ShoeCreator = Reward.create!(amount: 10, desc: "shoecreator1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 20, project_id: shoeCreatorProject.id)  
reward1ShoeCreator = Reward.create!(amount: 100, desc: "shoecreator2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 5, project_id: shoeCreatorProject.id) 
reward2ShoeCreator = Reward.create!(amount: 150, desc: "shoecreator3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 2, project_id: shoeCreatorProject.id)
reward3ShoeCreator = Reward.create!(amount: 150, desc: "shoecreator3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 2, project_id: shoeCreatorProject.id)

# ART REWARDS

reward0art1 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: art1Project.id)  
reward1art1 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: art1Project.id) 
reward2art1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art1Project.id)
reward3art1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art1Project.id)

reward0art2 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: art2Project.id)  
reward1art2 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: art2Project.id) 
reward2art2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art2Project.id)
reward3art2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art2Project.id)

reward0art3 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: art3Project.id)  
reward1art3 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: art3Project.id) 
reward2art3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art3Project.id)
reward3art3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art3Project.id)

reward0art4 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: art4Project.id)  
reward1art4 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: art4Project.id) 
reward2art4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art4Project.id)
reward3art4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art4Project.id)

reward0art5 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: art5Project.id)  
reward1art5 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: art5Project.id) 
reward2art5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art5Project.id)
reward3art5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art5Project.id)

reward0art6 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: art6Project.id)  
reward1art6 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: art6Project.id) 
reward2art6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art6Project.id)
reward3art6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art6Project.id)

reward0art7 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: art7Project.id)  
reward1art7 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: art7Project.id) 
reward2art7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art7Project.id)
reward3art7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: art7Project.id)

# COMIC/ILL REWARDS

reward0ill1 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: ill1Project.id)  
reward1ill1 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: ill1Project.id) 
reward2ill1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill1Project.id)
reward3ill1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill1Project.id)

reward0ill2 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: ill2Project.id)  
reward1ill2 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: ill2Project.id) 
reward2ill2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill2Project.id)
reward3ill2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill2Project.id)

reward0ill3 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: ill3Project.id)  
reward1ill3 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: ill3Project.id) 
reward2ill3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill3Project.id)
reward3ill3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill3Project.id)

reward0ill4 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: ill4Project.id)  
reward1ill4 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: ill4Project.id) 
reward2ill4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill4Project.id)
reward3ill4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill4Project.id)

reward0ill5 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: ill5Project.id)  
reward1ill5 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: ill5Project.id) 
reward2ill5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill5Project.id)
reward3ill5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill5Project.id)

reward0ill6 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: ill6Project.id)  
reward1ill6 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: ill6Project.id) 
reward2ill6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill6Project.id)
reward3ill6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill6Project.id)

reward0ill7 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: ill7Project.id)  
reward1ill7 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: ill7Project.id) 
reward2ill7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill7Project.id)
reward3ill7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: ill7Project.id)


# DESIGN/TECH REWARDS

reward0tech1 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: tech1Project.id)  
reward1tech1 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: tech1Project.id) 
reward2tech1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech1Project.id)
reward3tech1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech1Project.id)

reward0tech2 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: tech2Project.id)  
reward1tech2 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: tech2Project.id) 
reward2tech2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech2Project.id)
reward3tech2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech2Project.id)

reward0tech3 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: tech3Project.id)  
reward1tech3 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: tech3Project.id) 
reward2tech3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech3Project.id)
reward3tech3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech3Project.id)

reward0tech4 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: tech4Project.id)  
reward1tech4 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: tech4Project.id) 
reward2tech4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech4Project.id)
reward3tech4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech4Project.id)

reward0tech5 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: tech5Project.id)  
reward1tech5 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: tech5Project.id) 
reward2tech5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech5Project.id)
reward3tech5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech5Project.id)

reward0tech6 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: tech6Project.id)  
reward1tech6 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: tech6Project.id) 
reward2tech6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech6Project.id)
reward3tech6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech6Project.id)

reward0tech7 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: tech7Project.id)  
reward1tech7 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: tech7Project.id) 
reward2tech7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech7Project.id)
reward3tech7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: tech7Project.id)

# FILM REWARDS

reward0film1 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: film1Project.id)  
reward1film1 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: film1Project.id) 
reward2film1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film1Project.id)
reward3film1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film1Project.id)

reward0film2 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: film2Project.id)  
reward1film2 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: film2Project.id) 
reward2film2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film2Project.id)
reward3film2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film2Project.id)

reward0film3 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: film3Project.id)  
reward1film3 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: film3Project.id) 
reward2film3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film3Project.id)
reward3film3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film3Project.id)

reward0film4 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: film4Project.id)  
reward1film4 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: film4Project.id) 
reward2film4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film4Project.id)
reward3film4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film4Project.id)

reward0film5 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: film5Project.id)  
reward1film5 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: film5Project.id) 
reward2film5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film5Project.id)
reward3film5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film5Project.id)

reward0film6 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: film6Project.id)  
reward1film6 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: film6Project.id) 
reward2film6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film6Project.id)
reward3film6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film6Project.id)

reward0film7 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: film7Project.id)  
reward1film7 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: film7Project.id) 
reward2film7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film7Project.id)
reward3film7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: film7Project.id)

# FOOD/CRAFT REWARDS

reward0food1 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: food1Project.id)  
reward1food1 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: food1Project.id) 
reward2food1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food1Project.id)
reward3food1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food1Project.id)

reward0food2 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: food2Project.id)  
reward1food2 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: food2Project.id) 
reward2food2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food2Project.id)
reward3food2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food2Project.id)

reward0food3 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: food3Project.id)  
reward1food3 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: food3Project.id) 
reward2food3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food3Project.id)
reward3food3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food3Project.id)

reward0food4 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: food4Project.id)  
reward1food4 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: food4Project.id) 
reward2food4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food4Project.id)
reward3food4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food4Project.id)

reward0food5 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: food5Project.id)  
reward1food5 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: food5Project.id) 
reward2food5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food5Project.id)
reward3food5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food5Project.id)

reward0food6 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: food6Project.id)  
reward1food6 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: food6Project.id) 
reward2food6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food6Project.id)
reward3food6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food6Project.id)

reward0food7 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: food7Project.id)  
reward1food7 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: food7Project.id) 
reward2food7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food7Project.id)
reward3food7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: food7Project.id)

# GAMES REWARDS

reward0game1 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: game1Project.id)  
reward1game1 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: game1Project.id) 
reward2game1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game1Project.id)
reward3game1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game1Project.id)

reward0game2 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: game2Project.id)  
reward1game2 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: game2Project.id) 
reward2game2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game2Project.id)
reward3game2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game2Project.id)

reward0game3 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: game3Project.id)  
reward1game3 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: game3Project.id) 
reward2game3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game3Project.id)
reward3game3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game3Project.id)

reward0game4 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: game4Project.id)  
reward1game4 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: game4Project.id) 
reward2game4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game4Project.id)
reward3game4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game4Project.id)

reward0game5 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: game5Project.id)  
reward1game5 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: game5Project.id) 
reward2game5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game5Project.id)
reward3game5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game5Project.id)

reward0game6 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: game6Project.id)  
reward1game6 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: game6Project.id) 
reward2game6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game6Project.id)
reward3game6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game6Project.id)

reward0game7 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: game7Project.id)  
reward1game7 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: game7Project.id) 
reward2game7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game7Project.id)
reward3game7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: game7Project.id)

# MUSIC REWARDS

reward0music1 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: music1Project.id)  
reward1music1 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: music1Project.id) 
reward2music1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music1Project.id)
reward3music1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music1Project.id)

reward0music2 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: music2Project.id)  
reward1music2 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: music2Project.id) 
reward2music2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music2Project.id)
reward3music2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music2Project.id)

reward0music3 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: music3Project.id)  
reward1music3 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: music3Project.id) 
reward2music3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music3Project.id)
reward3music3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music3Project.id)

reward0music4 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: music4Project.id)  
reward1music4 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: music4Project.id) 
reward2music4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music4Project.id)
reward3music4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music4Project.id)

reward0music5 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: music5Project.id)  
reward1music5 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: music5Project.id) 
reward2music5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music5Project.id)
reward3music5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music5Project.id)

reward0music6 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: music6Project.id)  
reward1music6 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: music6Project.id) 
reward2music6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music6Project.id)
reward3music6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music6Project.id)

reward0music7 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: music7Project.id)  
reward1music7 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: music7Project.id) 
reward2music7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music7Project.id)
reward3music7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: music7Project.id)

# PUBLISHING REWARDS

reward0pub1 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: pub1Project.id)  
reward1pub1 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: pub1Project.id) 
reward2pub1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub1Project.id)
reward3pub1 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub1Project.id)

reward0pub2 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: pub2Project.id)  
reward1pub2 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: pub2Project.id) 
reward2pub2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub2Project.id)
reward3pub2 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub2Project.id)

reward0pub3 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: pub3Project.id)  
reward1pub3 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: pub3Project.id) 
reward2pub3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub3Project.id)
reward3pub3 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub3Project.id)

reward0pub4 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: pub4Project.id)  
reward1pub4 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: pub4Project.id) 
reward2pub4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub4Project.id)
reward3pub4 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub4Project.id)

reward0pub5 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: pub5Project.id)  
reward1pub5 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: pub5Project.id) 
reward2pub5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub5Project.id)
reward3pub5 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub5Project.id)

reward0pub6 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: pub6Project.id)  
reward1pub6 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: pub6Project.id) 
reward2pub6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub6Project.id)
reward3pub6 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub6Project.id)

reward0pub7 = Reward.create!(amount: 10, desc: "KickitReward1", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 10, project_id: pub7Project.id)  
reward1pub7 = Reward.create!(amount: 20, desc: "KickitReward2", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 22, project_id: pub7Project.id) 
reward2pub7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub7Project.id)
reward3pub7 = Reward.create!(amount: 50, desc: "KickitReward3", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 12, project_id: pub7Project.id)


