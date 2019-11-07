class Category < ApplicationRecord

    has_many :projects,
    foreign_key: :category_id,
    class_name: :Project
    
end
