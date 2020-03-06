require 'open-uri'
class Api::ProjectsController < ApplicationController

    # Must be signed in to create, edit, or destroy a project.
    # Have access to before_action via rails and require_signed_in!
    # via the application controller method. 
    # before_action :require_signed_in!, only: [:create, :edit, :destroy]

    def index
        @projects = Project.all 
        # Will eventually add some constraints here for search functionality (see BenchBnB)
        render :index
    end

    def show 
        @project = Project.find(params[:id])
    end

    def create
        @project = Project.new(project_params)
        
        @project.user_id = current_user.id
            newphoto = open("https://kicker-seed.s3-us-west-1.amazonaws.com/allBirds.png")
            @project.photo.attach(io: newphoto, filename: 'allBirds.png')

        if @project.save
            render "api/projects/show"
        else
            render json: ["The email address and password you entered do not match."], status: 401
        end
    end

    def edit
        @project = Project.find(params[:id])
    end

    def update
        # find via the has_many projects association on the :user model
        render json: current_user.projects.find_by(id: params[:id])
        # @project = current_user.projects.find_by(id: params[:id])

        # if @project.update(project_params)
        #     render "api/projects/show"
        # else
        #     render json: @project.errors.full_messages, status: 422
        # end

    end

    # def destroy
        
    # end

    private

    def project_params
        params.require(:project).permit(:title,
        :sub_title,
        :total_pledged,
        :goal_amount,
        :num_backers,
        :days_left,
        :loved,
        :location,
        :campaign,
        :about,
        :category_id,
        :user_id,
        :photo
        )
    end

end
