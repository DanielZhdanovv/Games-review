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
    json_data = response.read_body
    data = JSON.parse(json_data)
    

  render json: { data: data }
  end
  def show

    game = Game.find_by(api_id: params[:id])
    if !Game.exists?(api_id: params[:id])
      url = URI("https://free-to-play-games-database.p.rapidapi.com/api/game?id=#{params["id"]}")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      http.verify_mode = OpenSSL::SSL::VERIFY_NONE
      
      request = Net::HTTP::Get.new(url)
      request["x-rapidapi-host"] = 'free-to-play-games-database.p.rapidapi.com'
      request["x-rapidapi-key"] = 'aec551c9b7msh5a61fd88e0d4ccbp1d8828jsn959d761e2a14'
      
      response = http.request(request)
      json_data = response.read_body
      data = JSON.parse(json_data)

      Game.create(api_id: data["id"], title: data["title"], thumbnail: data["thumbnail"], genre: data["genre"], short_description: data["short_description"], description: data["description"], platform: data["platform"], publisher: data["publisher"], developer: data["developer"], release_date: data["release_date"], minimum_system_requirements: data["minimum_system_requirements"], screenshots: data["screenshots"])

      render json: data
    else 
      render json: game
    end
  end
end

