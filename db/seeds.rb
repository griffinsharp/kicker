# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
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



art = Category.create!(category_name: 'Art') 
comics_ill = Category.create!(category_name: 'Comics & Illustration') 
design_tech = Category.create!(category_name: 'Design & Tech')
film = Category.create!(category_name: 'Film')
food_craft = Category.create!(category_name: 'Food & Craft')
games = Category.create!(category_name: 'Games')
music = Category.create!(category_name: 'Music')
publishing = Category.create!(category_name: 'Publishing')


allBirdsProject = Project.create!(title: 'AllBirds',
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

blazerProject = Project.create!(title: 'Blazer',
        sub_title: 'shoes',
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
        sub_title: 'shoes',
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
        sub_title: 'shoes',
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
        sub_title: 'shoes',
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


allBirdsPhoto = open('https://kicker-seed.s3-us-west-1.amazonaws.com/allBirds.png')
allBirdsProject.photo.attach(io: allBirdsPhoto, filename: 'allBirds.png')
nikePhoto = open('https://kicker-seed.s3-us-west-1.amazonaws.com/nike.jpeg')
nikeProject.photo.attach(io: nikePhoto, filename: 'nike.jpeg')
adidasPhoto = open('https://kicker-seed.s3-us-west-1.amazonaws.com/adidas.jpeg')
adidasProject.photo.attach(io: adidasPhoto, filename: 'adidas.jpeg')
blazerPhoto = open('https://kicker-seed.s3-us-west-1.amazonaws.com/blazer.jpg')
blazerProject.photo.attach(io: blazerPhoto, filename: 'blazer.jpg')
golfPhoto = open('https://kicker-seed.s3-us-west-1.amazonaws.com/golf.jpg')
golfProject.photo.attach(io: golfPhoto, filename: 'golf.jpg')
offWhitePhoto = open('https://kicker-seed.s3-us-west-1.amazonaws.com/offwhite.jpg')
offWhiteProject.photo.attach(io: offWhitePhoto, filename: 'offwhite.jpg')
shoeCreatorPhoto = open('https://kicker-seed.s3-us-west-1.amazonaws.com/shoecreator.jpg')
shoeCreatorProject.photo.attach(io: shoeCreatorPhoto, filename: 'shoecreator.jpg')