class User < ActiveRecord::Base
    has_secure_password #its a method inside gem bcrypt that will encrypt your input password into password_digest
    validates :name, presence: true, length: { minimum:2}
    validates :email, uniqueness: { message: "this email is already taken" }
    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i}

    has_many :questions

    # def questions
    #     return Question.where(user_id: user)
    # end
    has_many :answers
    has_many :questionvotes
    has_many :answervotes



# http://guides.rubyonrails.org/association_basics.html#the-belongs-to-association


	# This is Sinatra! Remember to create a migration!


end


# store passwords in console