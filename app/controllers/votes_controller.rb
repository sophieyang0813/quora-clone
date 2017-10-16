# see

get '/q_upvote' do

    a = Questionvote.where(user_id: current_user.id, question_id: params[:question_id])
    if !(a.empty?)

        Questionvote.where(question_id: params[:question_id]).count.to_json   #=> this is the response in function(response) in ajax application.js

    else
        q_upvote1 = Questionvote.new
        q_upvote1.user_id = current_user.id
        q_upvote1.question_id = params[:question_id]
        q_upvote1.upvote = true
        q_upvote1.save

        Questionvote.where(question_id: params[:question_id]).count.to_json
    end

end


get '/a_upvote' do

    a = Answervote.where(user_id: current_user.id, answer_id: params[:answer_id])

    if !(a.empty?)
        Answervote.where(answer_id: params[:answer_id]).count.to_json

    else
         a_upvote1 = Answervote.new
         a_upvote1.user_id = current_user.id
         a_upvote1.answer_id = params[:answer_id]
         a_upvote1.upvote = true
         a_upvote1.save

         Answervote.where(answer_id: params[:answer_id]).count.to_json
    end


end



