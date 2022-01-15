class AddOsToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :os1, :string
    add_column :games, :os2, :string
    add_column :games, :os3, :string
    add_column :games, :os4, :string
    add_column :games, :os5, :string
  end
end
