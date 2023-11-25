'use strict'

const formPage = document.querySelector('form.login-form');

const emailElement = formPage.elements.email; 

const passwordElement = formPage.elements.password;


formPage.addEventListener('submit', submitFormRequirement);

function submitFormRequirement(event) {

    event.preventDefault(); 

    const form = event.target; 

    const emailValue = emailElement.value.trim();
    const passwordValue = passwordElement.value.trim();

    if (!emailValue || !passwordValue) {
        alert(`All form fields must be filled in`);
        return;
    }  
    
    const formData = {
        email: emailValue,
        password: passwordValue,
    }

    console.log(formData);

    form.reset(); 
}




