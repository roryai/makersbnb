require 'data_mapper'
require 'dm-postgres-adapter'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/makersbnb_#{ENV['RACK_ENV']}")

require_relative './models/user'
# require_relative './models/space'
# require_relative './models/bookings'

DataMapper.finalize
DataMapper.auto_upgrade!
