class Api::BackingsController < ApplicationController

    def index
        @backings = Backing.all
        render 'api/rewards/index'
    end

    def create
        @backing = Backing.new(backing_params)
        @backing.user_id = current_user.id
        
        if @backing.save!
            render '/api/backings/show'
        else
            render json: @backing.errors.full_messages, status: 422
        end

    end

    private

    def backing_params
        params.require(:backing).permit(:user_id, :reward_id, :project_id)
    end


end
