require 'sinatra/base'

class Makersbnb < Sinatra::Base
  get '/' do
    erb :index
  end

  get '/sign-up' do
    erb :sign_up
  end

  get '/log-in' do
    erb :log_in
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
