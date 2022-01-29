class Api::V1::FavoriteGamesController < ApplicationController

def index
  user = current_user
  favorite = FavoriteGame.game
  render json: favorite
end

def create
  favorite = FavoriteGame.new(user: current_user, game_id: params[:game])
  if favorite.save
      render json: {success: "succeeded"}
  else 
      render json: {errors: favorite.errors.full_messages.to_sentence}
  end
end
end
