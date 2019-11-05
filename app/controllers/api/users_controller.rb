class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            sign_in(@user)
            render "static_pages/root.html.erb"
        else 
            render json: @user.errors.full_messages, status: 422
        end
            
    end

    # always make your params private
    private
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end

end
