class Api::V1::FavoriteGamesController < ApplicationController


def create
  favorite = FavoriteGame.new(user: current_user, game_id: params[:game])
  if favorite.save
      render json: {success: "succeeded"}
      binding.pry
  else 
      render json: {errors: favorite.errors.full_messages.to_sentence}
  end
end
end
