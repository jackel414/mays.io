require 'rubygems'
#require 'vendor/sinatra/lib/sinatra.rb'

require File.expand_path '../app.rb', __FILE__
require './env' if File.exists?('env.rb')

set :environment, :development
run ZacharyMays