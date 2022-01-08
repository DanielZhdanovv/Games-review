class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :user, :upvotes, :downvotes
  
  belongs_to :user
  belongs_to :game
end
