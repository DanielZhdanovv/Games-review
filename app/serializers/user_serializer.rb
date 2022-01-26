class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :role

  has_many :reviews
  has_many :favorite_games

end
