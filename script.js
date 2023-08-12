// The main variables
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const containerMessage = document.querySelector('.container-mssage');
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
    }
    //Check to see if the password match.
    if(password1El.value === password2El.value){
        checkPassword = true;
        password1El.style.borderColor = 'black';
        password2El.style.borderColor = 'black';
    } else {
        checkPassword = false;
        message.textContent = 'Please make sure passwords match.';
        message.style.color = 'red';
        containerMessage.style.color = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red'; 
    }
}

function processForms(e){
    e.preventDefault();// prevent from refreshing form data
    //For test: console.log(e);
    // Validate form
    validateForm();
    // Store data
}

// Event Listener
form.addEventListener('submit', processForms);