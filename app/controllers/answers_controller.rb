post '/answer' do

    answer1 = Answer.new
    answer1.user_id = current_user.id
    answer1.question_id = params[:user][:question_id]
    answer1.response = params[:user][:answer]

    answer1.save

    ##why @instance variable? for q_a.erb
    @question_id = params[:user][:question_id]
    @answer = params[:user][:answer]
    erb:"questions/q_a"  #redirect q_a erb

end


get '/q_a2' do



erb :"static/q_a2"
end


post '/comment' do

    comment1 = Comment.new
    comment1.user_id = current_user.id
    comment1.answer_id = params[:answer_id]
    comment1.comment = params[:user][:comment]

    comment1.save

end