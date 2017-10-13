

$(document).ready(function(){
    $('.answerbutton').click(function(e){
        var clickedBtn = e.currentTarget
        var questionId = $(e.currentTarget).data('question-id')
        $(clickedBtn).fadeOut('fast');
        $(clickedBtn.parentElement).append('<p><form method="post" action="/answer"><input type="text" placeholder="what is your answer" name="user[answer]"><input type="submit" value="answer"><input type="hidden" name="user[question_id]" value="' + questionId + '"></form></p>');

    });
});



// #when you click on input specific type "submit"
// then only this specific answer pops out, not all the answer


// # problem -<input type="submit" value="answer"> inside the append as string. How do I set this as a class to do javascript?

// # answer? ajax?



// $(document).ready(function(){
//     $().click(function(){
//         $.ajax({url: ,
//             success: function(result){
//                 $("#para").html(result);
//             }
//         }
//     })
// })


// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_ajax_ajax


























//////////////////////////////////////   attempt

// function onlyonebox(){
//     var form = $(clickedBtn.parentElement);
//     form.on('submit',function(formSubmissionEvent){
//         formSubmissionEvent.preventDefault();


//     $.ajax({
//         url: form.attr('action'),
//         method: form.attr('method'),
//         data: form.serialize(),
//         dataType: 'JSON',
//         success: function(response){
//             (response.id) {}
//             if (response.id) {
//                 $('#yay').append(
// )
//                }

//         }

//     })

//     })
// }




// document.addEventListener("DOMContentLoaded",attachform);