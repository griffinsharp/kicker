class AddColToBackings < ActiveRecord::Migration[5.2]
  def change
    add_column :backings, :backing_amount, :integer
    remove_index :backings, [:user_id, :reward_id]
  end
end
