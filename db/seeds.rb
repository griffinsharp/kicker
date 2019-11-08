# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Project.destroy_all
Category.destroy_all
User.destroy_all

bob = User.create!(email: 'bob@bob.com', password: 'bob123')


art = Category.create!(category_name: 'Art')
comics_ill = Category.create!(category_name: 'Comics & Illustration') 
design_tech = Category.create!(category_name: 'Design & Tech')
film = Category.create!(category_name: 'Film')
food_craft = Category.create!(category_name: 'Food & Craft')
games = Category.create!(category_name: 'Games')
music = Category.create!(category_name: 'Music')
publishing = Category.create!(category_name: 'Publishing')



allBirds = Project.create!(title: 'AllBirds',
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
        user_id: bob.id)

nike = Project.create!(title: 'Nike',
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
        user_id: bob.id)

adidas = Project.create!(title: 'Adidas',
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
        user_id: bob.id)

jordan = Project.create!(title: 'Jordan',
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
        user_id: bob.id)