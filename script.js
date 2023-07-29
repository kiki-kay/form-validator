// The main variables
const form = document.getElementById('form');
const password1El = document.getElementById('passworld1');
const password2El = document.getElementById('passworld2');
const containerMessage = document.querySelector('.container-mssage');
const message = document.getElementById('message');

let isValid = fales; //Default value for validateForm function

function validateForm(){
    //Use Constraint API
    isValid = form.checkValidity();
    console.log(isValid);//For testing initial form validation
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