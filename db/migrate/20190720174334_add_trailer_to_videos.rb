class AddTrailerToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :trailer, :string
  end
end
