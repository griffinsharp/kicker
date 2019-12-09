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

demo = User.create!(email: 'demouser@demo.com', password: 'demo123', name: "Demo User")
allBirds = User.create!(email: 'allBirds@bob.com', password: 'allbirds123', name: "All Birds")
nike = User.create!(email: 'nike@bob.com', password: 'nike123', name: "Nike")
adidas = User.create!(email: 'adidas@bob.com', password: 'adidas123', name: "Adidas")
blazer = User.create!(email: 'blazer@bob.com', password: 'blazer123', name: "Blazer")
golf = User.create!(email: 'golf@bob.com', password: 'golf123', name: "Golf")
offWhite = User.create!(email: 'offWhite@bob.com', password: 'offwhite123', name: "Off-White")
shoeCreator = User.create!(email: 'shoeCreator@bob.com', password: 'shoecreator123', name: "Alex Ports")
kickIt = User.create!(email: 'kickit@bob.com', password: 'kickit123', name: "Kick It")
 
art = Category.create!(category_name: 'Art') 
comics_ill = Category.create!(category_name: 'Comics & Illustration') 
design_tech = Category.create!(category_name: 'Design & Tech')
film = Category.create!(category_name: 'Film')
food_craft = Category.create!(category_name: 'Food & Craft')
games = Category.create!(category_name: 'Games')
music = Category.create!(category_name: 'Music')
publishing = Category.create!(category_name: 'Publishing')


allBirdsProject = Project.create!(title: 'The Dark Verse, Vol. 5: Beneath the Crown of Chaos',
        sub_title: 'shoes',
        total_pledged: 123,
        goal_amount: 5000,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Sf',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile w some info.',
        category_id: art.id,
        user_id: allBirds.id)

nikeProject = Project.create!(title: 'Nike',
        sub_title: 'shoes',
        total_pledged: 123,
        goal_amount: 12345,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Eugene',
        campaign: 'test',
        about: 'This is a company profile w some info.',
        category_id: games.id,
        user_id: nike.id)

adidasProject = Project.create!(title: 'Adidas',
        sub_title: 'shoes',
        total_pledged: 123,
        goal_amount: 2500,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Japan',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile w some info.',
        category_id: film.id,
        user_id: adidas.id)

blazerProject = Project.create!(title: "Findster Home: Your Pets’ Location and Health Monitored 24/7",
        sub_title: "Findster Home tracks your pets’ GPS location and activity 24/7, letting you monitor them whether you're home or away. No data fees!",
        total_pledged: 123,
        goal_amount: 56740,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Chicago',
        campaign: 'test',
        about: 'This is a company profile w some info.',
        category_id: music.id,
        user_id: blazer.id)

golfProject = Project.create!(title: 'GOLF',
        sub_title: "Findster Home tracks your pets’ GPS location and activity 24/7, letting you monitor them whether you're home or away. No data fees!",
        total_pledged: 123,
        goal_amount: 7864,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Chicago',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile w some info.',
        category_id: music.id,
        user_id: golf.id)

offWhiteProject = Project.create!(title: 'Off-White',
        sub_title: "Findster Home tracks your pets’ GPS location and activity 24/7, letting you monitor them whether you're home or away. No data fees!",
        total_pledged: 123,
        goal_amount: 5000,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Chicago',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile w some info.',
        category_id: music.id,
        user_id: offWhite.id)

shoeCreatorProject = Project.create!(title: 'Alex Ports',
        sub_title: "Findster Home tracks your pets’ GPS location and activity 24/7, letting you monitor them whether you're home or away. No data fees!",
        total_pledged: 123,
        goal_amount: 8000,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Chicago',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile w some info.',
        category_id: music.id,
        user_id: shoeCreator.id)

kickItProject = Project.create!(title: 'Can I Kick It?',
        sub_title: "Yes, you can. Introducing, Kick It. The newest app for buying, selling, and trading your favorite sneakers all from your smartphone.",
        total_pledged: 123,
        goal_amount: 1234,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Chicago',
        campaign: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        about: 'This is a company profile w some info.',
        category_id: music.id,
        user_id: kickIt.id)


allBirdsPhoto = open("https://kicker-seed.s3-us-west-1.amazonaws.com/allBirds.png")
allBirdsProject.photo.attach(io: allBirdsPhoto, filename: 'allBirds.png')
nikePhoto = File.open('app/assets/images/nike.jpeg')
nikeProject.photo.attach(io: nikePhoto, filename: 'nike.jpeg')
adidasPhoto = File.open('app/assets/images/adidas.jpeg')
adidasProject.photo.attach(io: adidasPhoto, filename: 'adidas.jpeg')
blazerPhoto = File.open('app/assets/images/blazer.jpg')
blazerProject.photo.attach(io: blazerPhoto, filename: 'blazer.jpg')
golfPhoto = File.open('app/assets/images/golf.jpg')
golfProject.photo.attach(io: golfPhoto, filename: 'golf.jpg')
offWhitePhoto = File.open('app/assets/images/offwhite.jpg')
offWhiteProject.photo.attach(io: offWhitePhoto, filename: 'offwhite.jpg')
shoeCreatorPhoto = File.open('app/assets/images/shoecreator.jpg')
shoeCreatorProject.photo.attach(io: shoeCreatorPhoto, filename: 'shoecreator.jpg')
kickItPhoto = File.open('app/assets/images/featured.jpg')
kickItProject.photo.attach(io: kickItPhoto, filename: 'featured.jpg')

allBirdsProject.save!
nikeProject.save!
adidasProject.save!
blazerProject.save!
golfProject.save!
offWhiteProject.save!
shoeCreatorProject.save!

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

reward0Blazer = Reward.create!(amount: 10, desc: "test test test test", subdesc: "test test test test test", delivery: "Tomorrow", shipping: "International", num_backers: 30, project_id: blazerProject.id)  
reward1Blazer = Reward.create!(amount: 65, desc: "test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 5, project_id: blazerProject.id) 
reward2Blazer = Reward.create!(amount: 150, desc: "test test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 2, project_id: blazerProject.id)
reward3Blazer = Reward.create!(amount: 150, desc: "test test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 2, project_id: blazerProject.id)

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




