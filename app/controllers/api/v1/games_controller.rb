class Api::V1::GamesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }


  def index

    url = URI("https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc")
  
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  
    request = Net::HTTP::Get.new(url)
    request["x-rapidapi-host"] = 'free-to-play-games-database.p.rapidapi.com'
    request["x-rapidapi-key"] = 'aec551c9b7msh5a61fd88e0d4ccbp1d8828jsn959d761e2a14'
  
    response = http.request(request)
    data = response.read_body
    

  render json: { data: data }
  end
  def show
    id = ""
    url = URI("https://free-to-play-games-database.p.rapidapi.com/api/game?id=#{params["id"]}")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    
    request = Net::HTTP::Get.new(url)
    request["x-rapidapi-host"] = 'free-to-play-games-database.p.rapidapi.com'
    request["x-rapidapi-key"] = 'aec551c9b7msh5a61fd88e0d4ccbp1d8828jsn959d761e2a14'
    
    response = http.request(request)
    data = response.read_body

    render json: { data: data }

    
end
end
