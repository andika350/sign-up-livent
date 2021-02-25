const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const phone = document.getElementById('phone')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const   emailValue = email.value.trim();
    const   passwordValue = password.value.trim();
    const   password2Value = password2.value.trim();
    const   phoneValue = phone.value.trim();
    const   number = /^[0-9]+$/;

    if (emailValue === ''){

        setErrorFor(email);
    } else if(!checkEmail(emailValue)){
        setErrorFor(email);
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === ''){
        setErrorFor(password);
    } else {
        setSuccessFor(password);
    }
    
    if (password2Value === ''){
        setErrorFor(password2);
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2);
    } else {
        setSuccessFor(password2);
    }
    
    if (phoneValue === '') {
        setErrorFor(phone);
    } else if(!phoneValue.match(number))
    {
        setErrorFor(phone);
    } else if(phoneValue.length!=12 && phoneValue.length!=11)
    {
        setErrorFor(phone);
    } else {
        setSuccessFor(phone);
    }


function setErrorFor (input) {
    const formControl = input.parentElement;
    const i = formControl.querySelector('i');

    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function checkEmail (email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
}
