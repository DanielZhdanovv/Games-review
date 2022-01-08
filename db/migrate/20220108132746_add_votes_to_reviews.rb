class AddVotesToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :upvotes, :integer, default: 0
    add_column :reviews, :downvotes, :integer, default: 0
  end
end
