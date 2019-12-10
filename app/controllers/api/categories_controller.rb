class Api::CategoriesController < ApplicationController

def index
    @categories = Category.all
    render 'api/projects/index'
end

end