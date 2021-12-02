class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :user

  belongs_to :user
end
