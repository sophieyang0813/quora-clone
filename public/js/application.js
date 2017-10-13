
///instead of fadeOut? just disappear?

$(document).ready(function(){
    $('.answerbutton').click(function(e){
        var clickedBtn = e.currentTarget
        $(clickedBtn).fadeOut('fast');
        $(clickedBtn.parentElement).append('<p><form method="post" action="/answer"><input type="text" placeholder="what is your answer"><input type="submit" value="answer"></form></p>');

    });
});





//////////////////////////////////////   attempt



// function log(){
//     var form = $('#answer-form');
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