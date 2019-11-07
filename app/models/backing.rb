class Backing < ApplicationRecord

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :rewards,
    foreign_key: :reward_id,
    class_name: :Reward

    has_one :project,
    through: :rewards,
    source: :project
end
