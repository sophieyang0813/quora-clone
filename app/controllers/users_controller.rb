get '/signup' do

    erb :"static/signup"

end

post '/signup' do
    user1 = User.new(params[:user])
        #params[:user] extended version is below
    # user1.name     = params[:user][:name]
    # user1.email    = params[:user][:email]
    # user1.password = params[:user][:password]

    if user1.save #validate name,email, password before save
        # redirect ?
    else
        # redirect ?
    end

    erb :"static/signup"

end



post '/login' do
    @a = User.find_by(email: params[:user][:email])
    if !@a.nil? && @a.authenticate(params[:user][:password])
       session[:user_id] = @a.id   #### session cookie remembers you
       redirect '/'
    else
       erb :"static/signup"
    end

end


get '/users/:id' do
    erb :"static/profile"
end


post '/logout' do
    session[:user_id] = nil
     erb :"static/signup"
end


