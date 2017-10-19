post '/ask' do

    question1 = Question.new
    question1.user_id   = current_user.id
    question1.content = params[:user][:question]
    question1.save

    #if user
    # tag1 = Tag.new
    # tag1.name =params[:user][:tag] =>

    # tag => "electronic, apple"
    # tag => electronic
    # tag => apple

    # questiontag1 = QuestionTag.new
    # questiontag1.question_id = question1.id
    # questiontag1.tag_id = tag1.id



    # questiontag1.save
    erb :"static/question"
    redirect '/'

    # @questiontag = QuestionTag.find(params[:user][:tag])
end



get '/questions/:id' do
    @question = Question.find(params[:id])
    erb :"questions/show"
end


get '/questiontag/:tag_id' do
    @questiontag = QuestionTag.find(params[:tag_id])
    erb :"questions/tag"
end