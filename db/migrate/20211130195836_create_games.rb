class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.string :thumbnail
      t.string :genre

      t.timestamps
    end
  end
end