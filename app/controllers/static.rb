get '/' do
    if logged_in?
        erb :"static/main"
    else
        erb :"static/index"
    end
end

# get '/' do
#      if session[:user_id] == nil
#         redirect '/signup'
#     else
#         redirect 'userpage'
#     end

# end