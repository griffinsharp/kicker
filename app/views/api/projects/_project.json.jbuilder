json.extract! project, :id, :title, :sub_title, :loved, :total_pledged, :goal_amount, :num_backers, :days_left, :location, :campaign, :about, :category_id, :user_id
json.photoURL url_for(project.photo)
json.category project.category.category_name

sum = project.total_pledged
totalBackers = project.num_backers

project.backings.each do |backing|
    sum += backing.backing_amount
    totalBackers += 1
end


json.newPledgeAmount sum 
json.newTotalBackers totalBackers