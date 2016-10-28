require 'sinatra/base'
require 'json'

class Thermostat_Server < Sinatra::Base

  enable :sessions

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    temperature = session[:temperature] || 20.to_s

    content_type :json
    { temperature: temperature }.to_json
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    session[:temperature] = params[:temperature]
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
