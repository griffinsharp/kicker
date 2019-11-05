class Api::SessionsController < ApplicationController

    # Create session (login logic)
    # If we are trying to sign in the user, they should already have credentials to find them by.
    def create
        user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if user
            sign_in(user)
            render "static_pages/root.html.erb"
        else 
            render json: ["The email address and password you entered do not match."]
        end
    end

    # Destroy session (logout logic)
    # Have access to sign_out here because inheriting from Application Controller where it is defined. 
    # The else part of this conditional isn't technically necessary, but is a good precaution/practice.
    def destroy
        @user = current_user
        if @user
            sign_out
            render "static_pages/root.html.erb"
        else
            render json: ["Nobody is currently signed in"], status: 404
        end
    end
end
