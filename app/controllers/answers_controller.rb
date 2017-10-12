post '/answer' do

erb :"static/answer"

end

# post '/submit_answer' do

# answer1 = Answer.new
# answer1.user_id = current_user.user_id
# # answer1.question_id =
# answer1.response = params[:user][:answer]

# erb:"static/q_a"  #redirect q_a erb

# end