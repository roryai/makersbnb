require 'bcrypt'
require_relative './data_mapper_setup.rb'

class User
  include DataMapper::Resource

  property :id, Serial
  property :fullname, String
  property :username, String
  property :email, String
  property :password_digest, Text

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

end
