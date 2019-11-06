class ApplicationController < ActionController::Base
    protect_from_forgery prepend: true

# This class will hold the logic for assigning the current user, checking if they are signed in, require they be signed in, signing in, and signing out.
# The helper methods are set below to be used in the other controllers. 
    helper_method :current_user, :signed_in?

    private

    def current_user
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    # If current_user exists, will return truthy value via !!. If there is no current_user, will return falsey value via !!. 
    def signed_in?
        !!current_user
    end

    # When signed_in returns falsey values (no current user), render an error message. When signed_in returns a truthy value, do not render the error message.
    def require_signed_in!
        render json: { base: ['invalid credentials'] }, status: 401 unless signed_in?
    end

    # Set current_user to user. Reset the value of session_token within the session hash.
    def sign_in(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    # Following my sign_in(user) logic, reset the current user's session token and set the session_token key within the session has to nil.
    def sign_out
        @current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

end

