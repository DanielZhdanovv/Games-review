class CreateReviewUserVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :review_user_votes do |t|
        t.belongs_to :user, null: false
        t.belongs_to :review, null: false
      t.timestamps
    end
  end
end
