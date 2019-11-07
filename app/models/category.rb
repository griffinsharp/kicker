class Category < ApplicationRecord

    validates :category_name, presence: true

    has_many :projects,
    foreign_key: :category_id,
    class_name: :Project

end
