class Reward < ApplicationRecord

    belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project 

    

end
