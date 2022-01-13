class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :reviews, :thumbnail,  :screenshot2, :screenshot3, :short_description, :description, :game_url, :platform, :publisher, :developer, :release_date, :minimum_system_requirements, :screenshot1, :genre
  
  has_many :reviews

end
