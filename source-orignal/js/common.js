$(document).ready(function() {
    $("#frm-login").on('submit', function(event) {
        event.preventDefault(); // block event submit

        // set default
        $('#email-error').removeClass('d-block').addClass('d-none');
        $('#password-error').removeClass('d-block').addClass('d-none');

        // set default oerror is null
        $('#email-error').html('');
        $('#password-error').html('');

        // validate email
        var email = $('#email').val();
        var password = $('#password').val();
        var isOK = true;

        console.log('email', email);
        console.log('password', password);
        // return;

        // check empty (email)
        if (!email) {
            $('#email-error').removeClass('d-none').addClass('d-block');
            $('#email-error').html('The email is required.');
            isOK = false;
        } else {
            console.log('check', validateEmail(email))
            if (!validateEmail(email)) { // email invalid
                $('#email-error').removeClass('d-none').addClass('d-block');
                $('#email-error').html('Please enter a valid email address.');
                isOK = false;
            }
        }

        // check password (email)
        if (!password) {
            $('#password-error').removeClass('d-none').addClass('d-block');
            $('#password-error').html('The password is required.');
            isOK = false;
        }

        if (isOK) {
            // $("#frm-login").submit();
            alert('Validate is OK.');
            return true;
        }
    });
});


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// modal

var modal = document.getElementById('section-second');
var btn = document.getElementById("submit");
var x = document.getElementsByClassName("m-rote")[0];



btn.onclick = function() {
    modal.style.display = "block";
}

x.onclick = function() {
    modal.style.display = "none";
}

// form- dang ki
$(document).ready(function (){
    $("#sign-up").on('submit', function(e){
        e.preventDefault();

        // set default 
        $('#first-name-error').removeClass('d-block').addClass('d-none');
        $('#sur-name-error').removeClass('d-block').addClass('d-none');
        $('#email-child-error').removeClass('d-block').addClass('d-none');
        $('#password-child-error').removeClass('d-block').addClass('d-none');
        // set default error is null

        $('#first-name-error').html('');
        $('#sur-name-error').html('');
        $('#email-child-error').html('');
        $('#password-child-error').html('');

        // set validate

        var first_name = $('#first_name').val();
        var sur_name = $('#sur_name').val();
        var email_child = $('#email_child').val();
        var password_child = $('#password_child').val();

        var isSignOk = true;

        // check empty  first name
        if (!first_name) {
            $('#first-name-error').removeClass('d-none').addClass('d-block');
            $('#first-name-error').html('The email is required.');
            isOK = false;
        } else {
            console.log('check', validateEmail(email))
            if (!validateEmail(email)) { // email invalid
                $('#first-name-error').removeClass('d-none').addClass('d-block');
                $('#first-name-error').html('Please enter a valid email address.');
                isOK = false;
            }
        }
        // check sur name
        if (!sur_name) {
            $('#sur-name-error').removeClass('d-none').addClass('d-block');
            $('#sur-name-error').html('The email is required.');
            isOK = false;
        } else {
            console.log('check', validateEmail(email))
            if (!validateEmail(email)) { // email invalid
                $('#sur-name-error').removeClass('d-none').addClass('d-block');
                $('#sur-name-error').html('Please enter a valid email address.');
                isOK = false;
            }
        }
        // check email
        if (!email_child) {
            $('#email-child-error').removeClass('d-none').addClass('d-block');
            $('#email-child-error').html('The email is required.');
            isOK = false;
        } else {
            console.log('check', validateEmail(email))
            if (!validateEmail(email)) { // email invalid
                $('#email-child-error').removeClass('d-none').addClass('d-block');
                $('#email-child-error').html('Please enter a valid email address.');
                isOK = false;
            }
        }
        // check pass
        if (!password_child) {
            $('#password-child-error').removeClass('d-none').addClass('d-block');
            $('#password-child-error').html('The email is required.');
            isOK = false;
        } else {
            console.log('check', validateEmail(email))
            if (!validateEmail(email)) { // email invalid
                $('#password-child-error').removeClass('d-none').addClass('d-block');
                $('#password-child-error').html('Please enter a valid email address.');
                isOK = false;
            }
        }
        



    })

})