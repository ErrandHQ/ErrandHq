/**** Password Reveal */

function passwordReveal() {
    let x = document.getElementById('password');
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

    x.style.width = "100%";
    x.style.padding ="10px";
    x.style.outline = "1px solid rgba(28, 55, 90, 0.16)";
    x.style.border = "1px solid rgba(28, 55, 90, 0.16)";
    x.style.borderRadius = "6px";
    x.style.fontSize = "16px";
    x.style.lineHeight = "22px"
}

/***** Confirm Password Reveal ******/
function confirmPassword() {
    let x = document.getElementById('confirm-password');
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

    x.style.width = "100%";
    x.style.padding = "10px";
    x.style.outline = "1px solid rgba(28, 55, 90, 0.16)";
    x.style.border = "1px solid rgba(28, 55, 90, 0.16)";
    x.style.borderRadius = "6px";
    x.style.fontSize = "16px";
    x.style.lineHeight = "22px";
}


function signUpBtn() {

    /**Full name */
    let fullName = document.getElementById('fullName').value;
    let errorName = document.getElementById('name-err');

    errorName.innerHTML = "";

    try {
        if (fullName == "") throw "Input is empty";
        if (fullName.type != "text") throw "Enter a valid name";
    } catch(err) {
        errorName.innerHTML = err;
    }


    /** Email Validation */

    let emailValidation = document.getElementById('email').value;
    let emailError = document.getElementById('email-err');
    
    emailError.innerHTML = "";

    try {
        if (emailValidation != '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/') throw "Enter a valid email address"
    } catch(err) {
        emailError.innerHTML = err;
    }

}