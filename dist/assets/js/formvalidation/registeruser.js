// Jquery validations for create usser form
$.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
});

$.validator.addMethod("onlyalphanumric", function (value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
});


$('#register_user').validate({

    rules: {
        post_code: {
            required: true,
        },
        building_name_no: {
            required: true,
        },
        street: {
            required: true,
        },
        town: {
            required: true,
        },
        first_name: {
            required: true,
            lettersonly: true
        },
        last_name: {
            required: true,
            lettersonly: true
        },
        email: {
            required: true,
            email: true
        },
        phone_number: {
            required: true,
            onlyalphanumric: false

        },
        password: {
            required: true,
            minlength: 5

        },
        password_confirmation : {
            minlength : 5,
            equalTo : "#password"
        }
    },
    messages: {
        post_code: {
            required: '* Please enter post code.',
        },
        building_name_no: {
            required: '* Please enter building name or number.',
        },
        street: {
            required: '* Please enter street name.',
        },
        town: {
            required: '* Please enter town.',
        },
        first_name: {
            required: '* Please enter first name.',
            lettersonly: '* First name should be only alphabet'
        },
        last_name: {
            required: '* Please enter last name.',
            lettersonly: '* Last name should be only alphabet'
        },
        email: {
            required: "* Please enter a email address.",
            email: "* Please enter valid email address."
        },
        phone_number: {
            required: "* Please enter phone number.",
        },
        password: {
            required: "* Please enter a password.",
            minlength: "* Password must have atleast 5 characters."

        },
        password_confirmation: {
            required: "* Please enter confirm password.",
            equalTo: "Password and confirm password does not match."
        }
    },
    submitHandler: function (form) {
        form.submit();
    }
});
