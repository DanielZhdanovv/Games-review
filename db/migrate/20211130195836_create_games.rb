class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :thumbnail
      t.string :genre
      t.string :api_id
      t.string :short_description
      t.string :description
      t.string :game_url
      t.string :platform
      t.string :publisher
      t.string :developer
      t.string :release_date
      t.string :minimum_system_requirements
      t.string :screenshots
      t.timestamps
    end
  end
end