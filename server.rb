require 'sinatra/base'

class Client < Sinatra::Base
  set :public_folder, proc { File.join(root) }

  get '/' do
    File.read('index.html')
  end

  run! if app_file == $0
end  
