class Question < ActiveRecord::Base
    belongs_to :user
    has_many :answers
    has_one :question_tag
end
