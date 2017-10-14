class CreateQuestionvotes < ActiveRecord::Migration[5.0]
	def change
        create_table :questionvotes do |t|
            t.belongs_to :user, index: true
            t.belongs_to :question, index: true
            t.boolean  :upvote

            t.timestamps
            end
	end
end
