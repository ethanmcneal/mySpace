Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users do
  resources :posts 
  end
    get '/all_posts', to: 'posts#all_posts'
    
    
  end

