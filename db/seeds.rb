# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# destroy smallest to biggest
# create biggest to smallest

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
        goal_amount: 1234,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Sf',
        campaign: 'test',
        about: 'test',
        category_id: art.id,
        user_id: allBirds.id)

nikeProject = Project.create!(title: 'Nike',
        sub_title: 'shoes',
        total_pledged: 123,
        goal_amount: 1234,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Eugene',
        campaign: 'test',
        about: 'test',
        category_id: games.id,
        user_id: nike.id)

adidasProject = Project.create!(title: 'Adidas',
        sub_title: 'shoes',
        total_pledged: 123,
        goal_amount: 1234,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Japan',
        campaign: 'test',
        about: 'test',
        category_id: film.id,
        user_id: adidas.id)

blazerProject = Project.create!(title: "Findster Home: Your Pets’ Location and Health Monitored 24/7",
        sub_title: "Findster Home tracks your pets’ GPS location and activity 24/7, letting you monitor them whether you're home or away. No data fees!",
        total_pledged: 123,
        goal_amount: 1234,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Chicago',
        campaign: 'test',
        about: 'test',
        category_id: music.id,
        user_id: blazer.id)

golfProject = Project.create!(title: 'GOLF',
        sub_title: "Findster Home tracks your pets’ GPS location and activity 24/7, letting you monitor them whether you're home or away. No data fees!",
        total_pledged: 123,
        goal_amount: 1234,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Chicago',
        campaign: 'test',
        about: 'test',
        category_id: music.id,
        user_id: golf.id)

offWhiteProject = Project.create!(title: 'Off-White',
        sub_title: "Findster Home tracks your pets’ GPS location and activity 24/7, letting you monitor them whether you're home or away. No data fees!",
        total_pledged: 123,
        goal_amount: 1234,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Chicago',
        campaign: 'test',
        about: 'test',
        category_id: music.id,
        user_id: offWhite.id)

shoeCreatorProject = Project.create!(title: 'Alex Ports',
        sub_title: "Findster Home tracks your pets’ GPS location and activity 24/7, letting you monitor them whether you're home or away. No data fees!",
        total_pledged: 123,
        goal_amount: 1234,
        num_backers: 1,
        days_left: 2,
        loved: true,
        location: 'Chicago',
        campaign: 'test',
        about: 'test',
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
        campaign: 'test',
        about: 'test',
        category_id: music.id,
        user_id: kickIt.id)


allBirdsPhoto = File.open('app/assets/images/allBirds.png')
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

reward1KickIt = Reward.create!(amount: 20, desc: "test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 45, project_id: 8) 
reward2KickIt = Reward.create!(amount: 50, desc: "test test test test", subdesc: "test test test", delivery: "Tomorrow", shipping: "International", num_backers: 90, project_id: 8) 