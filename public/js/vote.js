//1. question upvote button

function log(){
var form = $('.q_upvote_up');
    form.on('submit',function(formSubmissionEvent){
        formSubmissionEvent.preventDefault();
        // console.log("Prevented default action!")

        var form = $(formSubmissionEvent.currentTarget)

        $.ajax({
            url: form.attr('action'),
            method: form.attr('method'),
            data: form.serialize(),
            dataType :'JSON',
            success: function(response){
                // debugger to check the following button upvoted
                if (response) {
                    form.find('.newQvtBtn').remove()
                    form.append(
                        "<button class='newQvtBtn'>"+ "upvoted | " + response +"</button>");
                }

            }
        })
    })


}


document.addEventListener("DOMContentLoaded", log);


//2. answer upvote button

function log2(){

    var form = $('.a_upvote_up');
        form.on('submit',function(formSubmissionEvent){
            formSubmissionEvent.preventDefault();
    var form = $(formSubmissionEvent.currentTarget)

    $.ajax({
        url: form.attr('action'),
        method: form.attr('method'),
        data: form.serialize(),
        dataType: 'JSON',
        success: function(response){
            // debugger
             if (response) {
                form.find('.newAnswrvtBtn').remove()
                form.append(
                    "<button class='newAnswrvtBtn'>" + "upvoted | " + response +  "</button>");
            }
        }

    })



        })
}


document.addEventListener("DOMContentLoaded", log2);