class FavoriteGameSerializer < ActiveModel::Serializer
  attributes :game, :user
  
  belongs_to :user
  belongs_to :game



end
