post '/ask' do


    question1 = Question.new
    question1.user_id   = current_user.id
    question1.content = params[:user][:question]
    # end
       question1.save
       # params.inspect
    erb :"static/question"
# question1 =Question.new(params[])
#1) put this to database
#1a) session id into user id  #2) question

#2) direct this to the page where other users answer (textbox)
# includes the question that this user asks

end



#