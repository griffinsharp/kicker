class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.integer,
      t.text,
      t.text,
      t.string,
      t.string,
      t.integer,
      t.integer,
      t.timestamps
    end
  end
end
