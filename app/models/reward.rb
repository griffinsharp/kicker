class Reward < ApplicationRecord

    validates :amount, :desc, :subdesc, :delivery, :shipping, :num_backers, :project_id, presence: true 

    belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project 

    has_many :backings,
    foreign_key: :reward_id,
    class_name: :Backing

end
