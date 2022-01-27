class Api::V1::UsersController < ApplicationController
  def index 
    if current_user
      render json: current_user 
    else 
      render json: {}
    end
    
  end
  def show
    user = current_user
    user.favorite_game = FavoriteGame.game
    render json: user.favorite_game
  end

  
end