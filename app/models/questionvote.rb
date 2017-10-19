class Questionvote < ActiveRecord::Base
     belongs_to :user
     belongs_to :question

     validates :user_id, uniqueness: { scope: :question_id }
	# validation => make sure that one user cast only one vote for one question. no two votes for one question
end
