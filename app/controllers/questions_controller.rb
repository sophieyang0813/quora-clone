post '/ask' do


    question1 = Question.new
    question1.user_id   = current_user.id
    question1.content = params[:user][:question]
    # end
       question1.save
       # params.inspect
    erb :"static/question"

end


get '/questions/:id' do
    @question = Question.find(params[:id])
    erb :"questions/show"
end