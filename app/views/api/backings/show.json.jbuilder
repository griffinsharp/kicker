json.backing do 
    json.partial! "/api/backings/backing", backing: @backing

end

json.project do
    json.partial! "/api/projects/project", project: @backing.project
end

json.rewards do 
    @backing.project.rewards.each do |reward|
        json.set! reward.id do 
            json.partial! "/api/rewards/reward", reward: reward
        end
    end
end