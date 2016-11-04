require_relative './data_mapper_setup.rb'

class Booking
  include DataMapper::Resource

  belongs_to :space

  property :id, Serial
  property :start_date, String
  property :end_date, String
  property :confirmed, Boolean

end
