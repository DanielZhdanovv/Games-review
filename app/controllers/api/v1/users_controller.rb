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
    render json: user
  end

  
end