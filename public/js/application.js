
// main.erb answer button

$(document).ready(function(){
    $('.answerbutton').click(function(e){
        var clickedBtn = e.currentTarget
        var questionId = $(e.currentTarget).data('question-id')
        $(clickedBtn).fadeOut('fast');
        $(clickedBtn.parentElement).append('<p><form method="post" action="/answer"><input type="text" placeholder="what is your answer" name="user[answer]"><input type="submit" value="answer"><input type="hidden" name="user[question_id]" value="' + questionId + '"></form></p>');

    });
});



//click on upvote for answer => following problem
//PROBLEM4: Why upvote2 button disappear after I click upvote? why does it reload? it reloads even after I remove redirect? 2) please tell me how to use inspect console currentTarget ( or how do I see the list of these?)
//QUESTION: difference? adding data-answervote-count to input vs. to form


$(document).ready(function(){
    $('.newAnswrvtBtn').click(function(e){
        var clickedBtn = e.currentTarget
        var voteCount =  $(e.currentTarget).data('answervote-count')
        $(clickedBtn).hide('slow', function(){
        $(clickedBtn.parentElement).append('<button>upvote2 | "'+ voteCount +'" yay</button>');
        });
    });
});

//now created a new page for question vote, then this
//other than .click function, what are the option? I just want to show
//I need to click first to see upvote2-votecount button.
//before going to the new page, I want this to remember that I clicked on this, so that I dont have to click it again.

//tying callback jquery

$(document).ready(function(){
    $('.newQvtBtn').click(function(e){
        var clickedBtn = e.currentTarget
        var voteCount =  $(e.currentTarget).data('questionvote-count')
        $(clickedBtn).hide('slow', function(){
        $(clickedBtn.parentElement).append('<button>upvote2 | "'+ voteCount +'" yay</button>');
         });
    });
});






///////







// when I click on it it shows the current number of vote count (0),
// then vote for the second times, then it shows 1 vote count; \

//this indicates that when submit; button clicked, the sequences are following
//1) show the existing data, then 2) add to the database, then 3) refresh the page with the new database

//but the sequence I want is that 1) add to the database, 2) then show the existing data
//what you can try is that create the button inside of the form, as opposed to encompassing the form.






















