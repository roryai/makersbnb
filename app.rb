ENV['RACK_ENV'] ||= 'development'
require 'json'
require 'sinatra/base'
require './models/data_mapper_setup.rb'

class Makersbnb < Sinatra::Base
  enable :sessions
  set :session_secret, 'super secret'

  get '/' do
    erb :index
  end

  get '/sign-up' do
    erb :sign_up
  end

  post '/sign-up' do
    user = User.create(full_name: params[:Name],
    user_name: params[:Username],
    email: params[:Email],
    password: params[:Password])
    p user
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

  get '/space' do
    erb :space
  end


  get '/test.json' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    user = User.first.full_name
    p User.first
    { fullName: user }.to_json
  end

  get '/user' do
    erb :user
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
