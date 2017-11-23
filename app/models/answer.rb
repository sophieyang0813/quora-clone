class Answer < ActiveRecord::Base
    belongs_to :user


    # def user
    #     return User.find(self.user_id)   #self here is Answer
    # end
    belongs_to :question
    has_many :answervotes

    # This is Sinatra! Remember to create a migration!
end

