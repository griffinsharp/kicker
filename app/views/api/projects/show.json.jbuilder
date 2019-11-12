json.project do 
    json.partial! "/api/projects/project", project: @project
    json.authorName @project.user.name 
    json.category @project.category.category_name
    json.rewardsIds @project.rewards.pluck(:id)
end

json.rewards do 
    @project.rewards.each do |reward|
        json.set! reward.id do 
            json.partial! "/api/rewards/reward", reward: reward
        end
    end
end
