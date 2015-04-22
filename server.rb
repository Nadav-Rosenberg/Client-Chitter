require 'sinatra/base'

class Client < Sinatra::Base
  set :public_folder, proc { File.join(root) }

  run! if app_file == $0
end  
