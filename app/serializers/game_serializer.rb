class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :reviews, :favorite_games, :thumbnail,  :screenshot2, :screenshot3, :short_description, :description, :game_url, :platform, :publisher, :developer, :release_date, :minimum_system_requirements, :screenshot1, :genre, :os1, :os2, :os3, :os4, :os5
  
  has_many :reviews
  has_many :favorite_games
end
