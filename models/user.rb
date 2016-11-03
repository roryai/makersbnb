require 'bcrypt'
require_relative './data_mapper_setup.rb'

class User
  include DataMapper::Resource

  has n, :spaces, :through => Resource
  has n, :bookings, :through => Resource

  property :id, Serial
  property :full_name, String
  property :user_name, String
  property :email, String
  property :password_digest, Text

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

end
