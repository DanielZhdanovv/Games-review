class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumbnail, :genre, :reviews
  has_many :reviews

end