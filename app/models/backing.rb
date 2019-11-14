class Backing < ApplicationRecord

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
