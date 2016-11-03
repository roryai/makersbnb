require_relative './data_mapper_setup.rb'

class Space
  include DataMapper::Resource

  has n, :bookings, :through => Resource

  property :id, Serial
  property :space_name, String
  property :address, String
  property :desc, Text
  property :price, Integer
  property :owner, String


end
