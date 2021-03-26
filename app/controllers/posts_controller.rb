class PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user

  def index
    @posts = @user.posts.all
    render json: @posts
  end

  def show
    posts = @user.posts.find(params[:user_id])
    render json: posts
  end

  def create
    @post = @user.posts.new(post_params)

    if @post.save
      render json: @post
    else
      render json: {errors: @post.errors}, status: 422
    end    
  end

  def update
    @post = @user.posts.find(params[:id])

    if @post.update(post_params)
      render json: @post
    else
      render json: {errors: @post.errors}, status: 422
    end  

  end

  def destroy
    @post = @user.posts.find(params[:id])
    @post.destroy
    render json: @post

  end

  # def all_post
  # posts = Post.all
  #   render json: @posts
  
  # # end


  private

  def post_params
    params.require(:post).permit(:subject, :body, :image)
  end

  def set_user
    @user = User.find(params[:user_id])
  end

end
