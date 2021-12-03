class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.string :thumbnail
      t.string :genre
      t.text :short_description
      t.text :description
      t.text :game_url
      t.text :platform
      t.text :publisher
      t.text :developer
      t.text :release_date
      t.text :minimum_system_requirements
      t.text :screenshots
      t.string :api_id
      t.timestamps
    end
  end
end