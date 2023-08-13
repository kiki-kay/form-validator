// The main variables
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const containerMessage = document.querySelector('.container-message');
const message = document.getElementById('message');

let isValid = false;
let checkPassword = false;

function validateForm(){
    //Use Constraint API
    isValid = form.checkValidity();
    // console.log(isValid);//For testing initial form validation
    // Style error  
    if(!isValid){
        message.textContent = 'Error! Please fill out all fields.';
        message.style.color = 'red';
        containerMessage.style.borderColor = 'red';
        return;//Break out of the function and stop what it's been doing.
    }
    //Check to see if passwords match.
    if(password1El.value === password2El.value){
        checkPassword = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        checkPassword = false;
        message.textContent = 'Please make sure passwords match!';
        message.style.color = 'red';
        containerMessage.style.color = 'red';
        containerMessage.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;//Break out of the function and stop what it's been doing.
    }

    //Only for checking to see if form is valid and passwords match
    if(isValid && checkPassword) {
        message.textContent = 'Successfuly registered!';
        message.style.color = 'pink';
        containerMessage.style.borderColor = 'pink';
    }
} //- The end of validateForm()

function storeFormData(){
    const user = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      website: form.website.value,
      password: form.password.value,  
    };
    //Do something with the user data.*Here connect with backend?
    console.log(user);
}

function processForms(e){
    e.preventDefault();// Prevent from refreshing form data
    //For test: console.log(e);
    // Validate forms
    validateForm();
    // Submit data if valid
    if(isValid && checkPassword){
        storeFormData();
    }
}

//Event Listener
form.addEventListener('submit', processForms);