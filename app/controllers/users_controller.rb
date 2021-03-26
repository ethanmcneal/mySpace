class UsersController < ApplicationController

    def index 
        @users = User.all
        render json: @users
    end

		def show
			@user = User.find(params[:id])
			posts = @user.posts
			render json: {user: @user, posts: posts}
		end
end
