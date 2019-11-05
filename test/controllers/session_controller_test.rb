require 'test_helper'

class SessionControllerTest < ActionDispatch::IntegrationTest
  test "should get api/users" do
    get session_api/users_url
    assert_response :success
  end

end
