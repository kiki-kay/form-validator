// The main variables
const form = document.getElementById('form');
const password1El = document.getElementById('passworld1');
const password2El = document.getElementById('passworld2');
const containerMessage = document.querySelector('.container-mssage');
const message = document.getElementById('message');

function processForms(e){
    e.preventDefault();// prevent from refreshing form data
    //Testing: console.log(e);
    // Validate form
    validateForm();
    // Store data
}

// Event Listener
form.addEventListener('submit', processForms);