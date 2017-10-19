class Answer < ActiveRecord::Base
    belongs_to :user
    belongs_to :question
    has_many :answervotes

    # This is Sinatra! Remember to create a migration!
end
