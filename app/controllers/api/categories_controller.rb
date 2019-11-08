class Api::CategoriesController < ApplicationController

def index
    @categories = Category.all
    render 'api/categories/index'
end

end
