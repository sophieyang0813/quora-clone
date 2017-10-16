
// main.erb answer button

$(document).ready(function(){
    $('.answerbutton').click(function(e){
        var clickedBtn = e.currentTarget
        var questionId = $(e.currentTarget).data('question-id')
        $(clickedBtn).fadeOut('fast');
        $(clickedBtn.parentElement).append('<p><form method="post" action="/answer"><input type="text" placeholder="what is your answer" name="user[answer]"><input type="submit" value="answer"><input type="hidden" name="user[question_id]" value="' + questionId + '"></form></p>');

    });
});





// past attempt not using AJAX (question & answer upvote button; now see vote.js  )



// case 1. answer upvote button
// $(document).ready(function(){
//     $('.newAnswrvtBtn').click(function(e){
//         var clickedBtn = e.currentTarget
//         var voteCount =  $(e.currentTarget).data('answervote-count')
//         $(clickedBtn).hide('slow', function(){
//         $(clickedBtn.parentElement).append('<button>upvote2 | "'+ voteCount +'" yay</button>');
//         });
//     });
// });


//case 2. question upvote click

// $(document).ready(function(){
//     $('.newQvtBtn').click(function(e){
//         // e.preventDefault() => if you do this, then this prevents refreshing page (default). this means that this would not submit the data of user clicking upvote  -> you need to use Ajax; not javascript
//         var clickedBtn = e.currentTarget
//         var voteCount =  $(e.currentTarget).data('questionvote-count')
//         $(clickedBtn).hide('slow', function(){
//         $(clickedBtn.parentElement).append('<button>upvote2 | "'+ voteCount +'" yay</button>');
//          });
//     });
// });













