Rails.application.routes.draw do
  # API endpoints, controllers live under API namespace
  # Response format should be in json.
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :projects, only: [:index, :show, :create, :edit, :destroy]
    resources :categories, only: [:index]
    resources :rewards, only: [:create, :destroy]

  end
  # Root route
    root "static_pages#root"
end
