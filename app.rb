ENV['RACK_ENV'] ||= 'development'
require 'json'
require 'sinatra/base'
require './models/data_mapper_setup.rb'

class Makersbnb < Sinatra::Base
  enable :sessions
  set :session_secret, 'super secret'

  helpers do
    def current_user
      @current_user ||=User.get(session[:user_id])
    end
  end

  get '/' do
    erb :index
  end

  get '/sign-up' do
    @user = User.new
    erb :sign_up
  end

  post '/sign-up' do
    @user = User.create(full_name: params[:Name],
    user_name: params[:Username],
    email: params[:Email],
    password: params[:Password])
    session[:user_id] = @user.id
    redirect '/'
  end

  get '/log-in' do
    erb :log_in
  end

  post '/log-in' do
    user = User.authenticate(params[:username], params[:password])
    user.nil? ? session[:user_id] = nil : session[:user_id] = user.id
    redirect '/'
  end

  get '/add-space' do
    erb :add_space
  end

  post '/add-space' do
    space = Space.create(space_name: params[:name], address: params[:address], desc: params[:description], price: params[:price], user_id: session[:user_id])
    session[:space_id] = space.id
    redirect '/space'
  end

  get '/space' do
    erb :space
  end

  get '/currentUser.json' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    user = User.get(session[:user_id])
    { user: user }.to_json
  end

  get '/currentSpace.json' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    space = Space.get(session[:space_id])
    { space: space }.to_json
  end

  get '/allSpaces.json' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    spaces = Space.all
    { spaces: spaces }.to_json
  end

  get '/user' do
    erb :user
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
