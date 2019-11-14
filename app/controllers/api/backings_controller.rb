class Api::BackingsController < ApplicationController

    def index
        @backings = Backing.all
        render 'api/rewards/index'
    end

    def create
        @backing = Backing.new(backing_params)
        @backing.user_id = current_user.id
        
        if @backing.save
            render 'api/backings/show'
        else
            render json: ["You have already pledged for this reward. Please choose another tier to contribute to this project."], status: 401
        end

    end

    private

    def backing_params
        params.require(:backing).permit(:user_id, :reward_id, :project_id, :backing_amount)
    end


end
