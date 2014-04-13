require 'bundler'
Bundler.require

require './model'

class ZacharyMays < Sinatra::Base
  use Rack::Session::Cookie, :secret => "nothingissecretontheinternet"
  use Rack::Flash, :accessorize => [:error, :success]

  use Warden::Manager do |config|
    config.default_strategies :password
    config.serialize_into_session{|user| user.id }
    config.serialize_from_session {|id| User.find(id)}
    config.failure_app = ZacharyMays
  end

  Warden::Manager.before_failure do |env,opts|
    env['REQUEST_METHOD'] = 'POST'
  end

  Warden::Strategies.add(:password) do
    def valid?
      params["username"] || params["password"]
    end
   
    def authenticate!
      user = User.first(:username => params["username"])
      if user && user.authenticate(params["password"])
        #flash.success = "Successfully Logged In"
        if user.username == 'guest'
          Pony.mail :to => 'zackmays@gmail.com',
                    :from => 'me@zacharymays.com',
                    :subject => 'Guest Login',
                    :body => 'A guest just logged into zacharymays.com',
                    :via => :smtp,
                    :via_options => {
                      :address => 'smtp.gmail.com',
                      :port => 587,
                      :domain => 'flyingvines.com',
                      :user_name => ENV['email_username'],
                      :password => ENV['email_password'],
                      :authentication => 'plain',
                      :enable_starttls_auto => true                
                    }
        end          
        success!(user)
      else
        fail!("Could not log in")
      end
    end
  end
  
  def warden_handler
    env['warden']
  end
  
  def current_user
    warden_handler.user
  end
  
  def check_authentication
    redirect '/login' unless warden_handler.authenticated?
  end
  
  
  get '/' do
    @title = 'Zachary Mays - Home'
  	haml :index
  end
  
  get '/new' do
    @title = 'New User'
    env['warden'].authenticate!
    haml :new
  end

  post '/new' do
    @user = User.new(:first_name => params[:first_name], :last_name => params[:last_name], :username => params[:username], :email => params[:email], :password => params[:password], :site_admin => true, :created => Time.now)
    @user.save
    redirect '/'
  end

  get '/login' do
    @title = 'Login'
    if warden_handler.authenticated?
      redirect '/admin'
    end
    haml :login
  end

  post '/session' do
    warden_handler.authenticate!
    if warden_handler.authenticated?
      redirect '/admin'
    else
      redirect '/nogood'
    end
  end
 
  post '/unauthenticated' do
    haml :unauthenticated
  end
  
  get '/admin' do
    @title = 'Admin Portal'
    env['warden'].authenticate!
    haml :admin
  end
  
  get "/logout" do
    warden_handler.logout
    redirect '/'
  end

end