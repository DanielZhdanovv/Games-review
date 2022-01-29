class Game < ApplicationRecord

  has_many :reviews
  has_many :favorite_games
end