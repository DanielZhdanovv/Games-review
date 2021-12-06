class Review < ApplicationRecord
  validates :body, presence: true

  belongs_to :game
  belongs_to :user

end