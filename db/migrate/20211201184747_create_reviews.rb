class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :body, null: false

      t.belongs_to :game, null: false
      t.belongs_to :user, null: false
      
      t.timestamps null: false
    end
  end
end
