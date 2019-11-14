json.extract! reward, :id, :amount, :desc, :subdesc, :delivery, :shipping, :num_backers, :project_id

totalRewardBackers = reward.num_backers

reward.backings.each do |backing|
    totalRewardBackers += 1
end

json.newRewardBackers totalRewardBackers

