require 'sinatra/base'

class Makersbnb < Sinatra::Base
  get '/' do
    erb :index
  end

  get '/sign-up' do
    erb :sign_up
  end

  post '/sign-up' do
    #database stuff - creates user in database
    redirect '/'
  end

  get '/log-in' do
    erb :log_in
  end

  post '/log-in' do
    redirect '/'
  end

  get '/add-space' do
    erb :add_space
  end

  get '/property' do
    erb :property
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
