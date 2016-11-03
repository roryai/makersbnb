require_relative './data_mapper_setup.rb'

class Booking
  include DataMapper::Resource

  belongs_to :space

  property :id, Serial
  property :start_date, Date
  property :end_date, Date
  property :confirmed, Boolean

end
