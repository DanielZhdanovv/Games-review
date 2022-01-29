class FavoriteGameSerializer < ActiveModel::Serializer
  attributes :game
  
  belongs_to :user
  belongs_to :game
end
