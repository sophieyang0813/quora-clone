class CreateQuestionTags < ActiveRecord::Migration[5.0]
	def change
         create_table :question_tags do |t|
            t.belongs_to :question, index: true
            t.belongs_to :tag, index: true

            t.timestamps
        end
	end
end
