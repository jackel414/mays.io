require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'

get '/' do
  @title = 'Home'
	haml :index
end

get '/login' do
  @title = 'Login'
  haml :login
end

get '/admin' do
  @title = 'Admin Portal'
  haml :admin
end

get '/styles.css' do
  scss :styles
end