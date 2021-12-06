class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :user
  
  belongs_to :user
  belongs_to :game
end
