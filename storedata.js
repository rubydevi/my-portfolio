// Create form data object
const formData = {};

const fullName = document.getElementById('txtFullname');
const emailId = document.getElementById('txtEmail');
const textMessage = document.getElementById('txt_message');

formData.name = fullName;
formData.email = emailId;
formData.message = textMessage;

const jsonFormData = JSON.stringify(formData);
localStorage.setItem("formData", jsonFormData);