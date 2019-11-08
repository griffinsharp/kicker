@projects.each do |project|
    json.set! project.id do
        json.partial! 'project', project: project
        # json.authorName project.user.name 
    end
end