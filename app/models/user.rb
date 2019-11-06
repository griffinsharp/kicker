class User < ApplicationRecord

# confirm our 'null: false' database constraint on the model level
validates :email, :session_token, :password_digest, presence: true
# confirm our 'unique: true' database constraint on the model level
validates :email, uniqueness: true
validates :password, length: {minimum: 6}, allow_nil: true

attr_reader :password 

before_validation :ensure_session_token

has_many :projects,
foreign_key: :user_id,
class_name: :Project

has_many :backings,
foreign_key: :user_id,
class_name: :Backing

has_many :rewards,
through: :backings,
source: :rewards

def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
end

# Make our password digest equal to a bcrypt object we generated using the user's password.
def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
end


def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
end

# If we have a session token already, use that value. If we do not, create a new session token, thus ensuring one exists.
def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
end

def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
end



end
