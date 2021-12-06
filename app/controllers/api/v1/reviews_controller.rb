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
    render json: Review.find(params[:id])
  end

  def update
    review = Review.find(params[:id])
    if review.update(review_params)
      flash[:notification] = "Review updated"
      render json: review 
    else
      flash.now[:error] = @review.errors.full_messages.to_sentence
      render json: review
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
      flash.now[:notification] = "Review has been deleted"
      redirect_to root_path
    end
    
  end

  private 

  def review_params
    params[:review].permit(:rating, :body)
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body)
  end
end