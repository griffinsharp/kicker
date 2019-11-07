class Backing < ApplicationRecord
    
    validates :user_id, uniqueness: {scope: :reward_id}

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :reward,
    foreign_key: :reward_id,
    class_name: :Reward

    has_one :project,
    through: :reward,
    source: :project
end
