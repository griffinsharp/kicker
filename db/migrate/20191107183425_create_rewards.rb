class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.integer :amount, null: false
      t.text :desc, null: false
      t.text :subdesc
      t.string :delivery, null: false
      t.string :shipping
      t.integer :num_backers, null: false
      t.integer :project_id, null: false
      t.timestamps
    end
    add_index :rewards, :project_id
  end
end
