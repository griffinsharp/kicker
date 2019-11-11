@projects.each do |project|
    json.set! project.id do
        json.partial! 'project', project: project
        json.authorName project.user.name 
        json.photoUrl project.photo.map { |file| url_for(file) }
    end
end