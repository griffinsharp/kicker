json.extract! project, :id, :title, :sub_title, :total_pledged, :goal_amount, :num_backers, :days_left, :location, :campaign, :about, :category_id, :user_id
json.photoURL url_for(project.photo)