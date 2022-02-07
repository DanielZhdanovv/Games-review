class Game < ApplicationRecord

  has_many :reviews
  has_many :favorite_games
  has_many :users, through: :favorite_games
end