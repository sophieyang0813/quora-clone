class CreateComments < ActiveRecord::Migration[5.0]
	def change
        create_table :comments do |t|
            t.belongs_to :user, index: true
            t.belongs_to :answer, index: true
            t.string :comment

            t.timestamps
        end

        remove_column :answers, :comment
	end

end


