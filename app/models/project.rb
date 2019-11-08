class Project < ApplicationRecord

    validates :title, :sub_title, :total_pledged, :goal_amount, :num_backers, :days_left, :location, :campaign, :about, :category_id, :user_id, presence: true
    validates :title, uniqueness: true

    belongs_to :user,
    foreign_key: :user_id, 
    class_name: :User 

    belongs_to :category,
    foreign_key: :category_id,
    class_name: :Category

    has_many :backings,
    foreign_key: :project_id,
    class_name: :Backing

    has_many :rewards,
    foreign_key: :project_id,
    class_name: :Reward

    has_many :backers,
    through: :backings,
    source: :user

end
