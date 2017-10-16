class RemoveComment < ActiveRecord::Migration[5.0]
	def change
        remove_column :answervotes, :comment
	end
end
