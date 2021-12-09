Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "homes#index"

  get "/games", to: "homes#index"
  get "/games/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :show]
      resources :reviews, only: [:show, :create, :edit, :update, :destroy]
      resources :users, only: [:index]
    end
  end

end
