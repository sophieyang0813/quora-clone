get '/' do
    if logged_in?
        erb :"static/main"
    else
        erb :"static/signup"
    end
end

