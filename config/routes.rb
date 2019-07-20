Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :videos do
      resources :comments
    end

    resources :comments
    get "user-info/:user_id/:id", to: "comments#userinfo"
  end
end
