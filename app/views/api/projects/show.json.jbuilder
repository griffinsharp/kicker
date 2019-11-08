
json.project do 
    json.partial! "/api/projects/project", project: @project
end

# user who created the project 
json.user do 
    json.partial! '/api/users/user', user: @project.user
end
