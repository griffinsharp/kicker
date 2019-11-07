class Reward < ApplicationRecord

    validates :amount, :desc, :subdesc, :delivery, :shipping, :num_backers 

    belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project 

end
