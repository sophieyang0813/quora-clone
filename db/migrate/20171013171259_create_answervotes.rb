class CreateAnswervotes < ActiveRecord::Migration[5.0]
	def change
        create_table :answervotes do |t|
            t.belongs_to :user, index: true
            t.belongs_to :answer, index: true
            t.boolean  :upvote

            t.timestamps
            end
    end
end
