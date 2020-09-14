function validateEmail(email) {
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email)) {
        return false;
    } else {
        return true;
    }
}

function sendAppLink() {
    console.log($("input[name=mobile_number]").val(), 'dsadddddddddd')
    // url: "{{ route('send-app-link') }}",
        $.ajax({
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            type: 'POST',
            url: 'send-app-link', //Make sure your URL is correct
            dataType: 'json', //Make sure your returning data type dffine as json
            data: {
                'mobile_number':$("input[name=mobile_number]").val()
            },
            beforeSend: function(){
                // Show image container
                $("#send_app_link").hide();
                $("#sending_msg_loader").show();
            },
    // success: function(response){
    //             $("#sending_msg_loader").html('<i class="fa fa-check-circle" aria-hidden="true" style="color:green" width:60px;height:60px;></i>\n');
    //     },
            done: function (data) {
                $("#sending_msg_loader").hide();
                $("#send_app_link").show();

            }
        });
}

$("input[name=new_letter]") .on('blur',function () {  
    const $email = this.value;
   const isValid = validateEmail($email);
    if(isValid == false){
        alert('not valid');
    }else{

    }
});

function subscribeNewsLetter() {
    const $email = this.value;
    const isValid = validateEmail($email);
     if(isValid == false){
        alert('not valid');
    }else{
        
    }
    console.log($("input[name=new_letter]").val(),'oouyiioiiiiiiiiiiiiiiiii');
     let route = "{{ route('subscribe-newsletter') }}";
     $.ajax({
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            type: 'POST',
            url: route, //Make sure your URL is correct
            dataType: 'json', //Make sure your returning data type dffine as json
            data: {
                'new_letter':$("input[name=new_letter]").val()
            },
            beforeSend: function(){
                // Show image container
                $("#new_letter_button").hide();
                $("#subscribe_newsletter_loader").show();
            },
    // success: function(response){
    //             $("#subscribe_newsletter_loader").html('<i class="fa fa-check-circle" aria-hidden="true" style="color:green" width:60px;height:60px;></i>\n');
    //     },
            done: function (data) {
                $("#subscribe_newsletter_loader").hide();
                $("#new_letter_button").show();

            }
        });
}
