class Api::RewardsController < ApplicationController

    def index
        @rewards = Reward.all
        render 'api/rewards/index'
    end

    def create
        @reward = Reward.new(reward_params)
        @reward.project.user_id = current_user.id

        if @reward.save!
            render 'api/rewards/show'
        else
            # 422 - syntactically correct but semantically incorrect 
            # 400 - bad request to server
            render json: @reward.errors.full_messages, status: 422
        end
    end

    def destroy
        @reward = current_user.projects.rewards.find(params[:id])
        if @reward
            @reward = nil
            render 'api/rewards/show'
        else
            render json: ["No reward currently selected."], status: 404
        end
    end

    private

    def reward_params
        params.require(:reward).permit( vv)
    end
end
