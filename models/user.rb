require 'bcrypt'
require_relative './data_mapper_setup.rb'

class User
  include DataMapper::Resource

  attr_reader :password, :count
  attr_accessor :password_confirmation

  has n, :spaces, :through => Resource
  has n, :bookings, :through => Resource

  property :id, Serial
  property :full_name, String
  property :user_name, String, unique: true
  property :email, String
  property :password_digest, Text
  validates_confirmation_of :password


  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.authenticate(user_name, password)
    user = first(user_name: user_name)
    if user && BCrypt::Password.new(user.password_digest) == password
      user
    else
      nil
    end
  end

end
