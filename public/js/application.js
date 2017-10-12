// when someone click answer button in question erb page, then only that one uploads;

//find #answer-form in question.erb

function log(){
    var form = $('#answer-form');
    form.on('submit',function(formSubmissionEvent){
        formSubmissionEvent.preventDefault();


    $.ajax({
        url: form.attr('action'),
        method: form.attr('method'),
        data: form.serialize(),
        dataType: 'JSON',
        success: function(response) {
            (response.id) {}
            if (response.id) {
                $('#yay').append(

            '<form method="post" action="/submit_answer" id ="answer-form">
             <input type="text" placeholder="what is your answer" name="user[answer]">
            <input type="submit" value="submit">
            </form>'
)
               }

        }

    })

    })
}

function attachform() {
    create a varible and put the answer form into it
    then when form on submit
        i will prevent default (why?)
        append the form after this form
}



document.addEventListener("DOMContentLoaded",attachform);