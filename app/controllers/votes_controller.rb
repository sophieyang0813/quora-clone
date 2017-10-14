# see

get '/q_upvote' do

    q_upvote1 = Questionvote.new
    q_upvote1.user_id = current_user.id
    q_upvote1.question_id = params[:question_id]
    # when upvote button submitted, then the weblink => http://localhost:9393/:question_id or http://localhost:9393/16
    q_upvote1.upvote = true

    q_upvote1.save

    # erb :"static/main"
    erb :"votes/q_vote"
end





# see show.erb line 15 /a_upvote

get '/a_upvote' do

 a_upvote1 = Answervote.new
 a_upvote1.user_id = current_user.id
 a_upvote1.answer_id = params[:answer_id]
 a_upvote1.upvote = true

 a_upvote1.save

question_id = params[:question_id]



redirect '/questions/' + question_id  #redirect to i.e. '/questions/60

end



