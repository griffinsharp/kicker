json.project do 
    json.partial! "/api/projects/project", project: @project
    json.authorName @project.user.name 
    json.category @project.category.category_name
end
