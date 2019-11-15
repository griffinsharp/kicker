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
            render json: ["You need to be signed in to pledge to a project."], status: 401
        end

    end

    private

    def backing_params
        params.require(:backing).permit(:user_id, :reward_id, :project_id, :backing_amount)
    end


end
