class ReDoAddNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string, default: false
    change_column_null :users, :name, false
  end
end
