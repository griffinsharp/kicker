@rewards.each do |reward|
    json.set! reward.id do
        json.partial! 'reward', reward: reward
    end
end