class AddBooleanToProjects < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :loved
    add_column :projects, :loved, :boolean, null: false, default: false
  end
end
