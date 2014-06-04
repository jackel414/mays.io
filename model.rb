require 'rubygems'
require 'data_mapper'
require 'dm-sqlite-adapter'
require 'bcrypt'
DataMapper.setup(:default, "sqlite://#{Dir.pwd}/mays.sqlite")

class User
  include DataMapper::Resource
  include BCrypt

  property :id, Serial
  property :first_name, Text, :required => true
  property :last_name, Text, :required => true
  property :username, Text, :required => true
  property :email, Text, :required => true
  property :password, BCryptHash
  property :role, Text, :required => true
  property :created, DateTime
  property :last_logged_in, DateTime


  def authenticate(attempted_password)
    if self.password == attempted_password
      true
    else
      false
    end
  end
end

# Tell DataMapper the models are done being defined
DataMapper.finalize

# Update the database to match the properties of User.
DataMapper.auto_upgrade!