const form = document.getElementById("form");
const username = document.getElementById("userName");
const email = document.getElementById("emailId");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    checkInput();
})
function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password1.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username cannot be empty')
    }
    else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email cannot be empty');
    }
    else if(!isEmail(emailValue)){
        setError(email, 'not a valid email');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password1, 'Password cannot be empty')
    }
    else{
        setSuccess(password1);
    }

    if(password2Value === ''){
        setError(password2, 'Password cannot be empty')
    }
    else if(passwordValue!== password2Value){
        setError(password2, 'Password does not match')
    }
    else{
        setSuccess(password2);
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'formData error';
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;    
    formControl.className = 'formData success';    
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    
}