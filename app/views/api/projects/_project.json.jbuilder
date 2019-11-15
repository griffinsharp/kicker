json.extract! project, :id, :title, :sub_title, :loved, :total_pledged, :goal_amount, :num_backers, :days_left, :location, :campaign, :about, :category_id, :user_id
json.photoURL url_for(project.photo)
json.category project.category.category_name
json.authorName project.user.name 

starting_amount = 0
project.rewards.each do |reward|
    starting_amount += (reward.num_backers * reward.amount)
end

sum = starting_amount
totalBackers = project.num_backers

project.backings.each do |backing|
    sum += backing.backing_amount
    totalBackers += 1
end


json.newPledgeAmount sum 
json.newTotalBackers totalBackers