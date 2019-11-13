Rails.application.routes.draw do
  # API endpoints, controllers live under an API namespace (ex Api::ExamplenameController).
  # Response format are in json.
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :projects, only: [:index, :show, :create, :edit, :update, :destroy]
    resources :categories, only: [:index]
    resources :rewards, only: [:index, :create, :destroy]
    resources :backings, only: [:index, :create]
  end
  # Root route
    root "static_pages#root"
end
