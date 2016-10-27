require 'sinatra/base'
require 'json'

class Thermostat_Server < Sinatra::Base

  enable :sessions

  get '/temperature' do
    session[:data].to_json
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    temperature = params[:temperature]
    p temperature

    # session[:data] = data
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
