class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :reviews, :thumbnail, :short_description, :description, :game_url, :platform, :publisher, :developer, :release_date, :minimum_system_requirements, :screenshots, :genre
  
  has_many :reviews

end
