class Api::V1::ReviewsController < ApplicationController
  def create
    game = Game.find_by(api_id: params[:game_id])
    review = Review.new(review_params)
    review.user = current_user
    review.game = game
    if review.save
      render json: review
    else
      render json: {errors: review.errors.full_messages.to_sentence}
    end
  end

  def edit


  end
  private
  def review_params
    params.require(:review).permit(:rating, :body)
  end
end