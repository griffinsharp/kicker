class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :sub_title, null: false
      t.integer :total_pledged, null: false
      t.integer :goal_amount, null: false
      t.integer :num_backers, null: false
      t.integer :days_left,null: false
      t.boolean :loved, 
      t.string :location, null: false
      t.text :campaign, null: false
      t.text :about, null: false
      t.integer :category_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :projects, :title, unique: true
    add_index :projects, :category_id 
    add_index :projects, :user_id 
  end
end
