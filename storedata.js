// Check for pre-filled data to load on form fields.
const prefilledData = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    document.getElementById('txtFullname').value = formData.name || '';
    document.getElementById('txtEmail').value = formData.email || '';
    document.getElementById('txt_message').value = formData.message || '';
  }
};

window.onload = prefilledData();

// Create a single JavaScript object with all the data from the entire form and save it in local storage
const formInputs = document.querySelectorAll('#form_contact input, #form_contact textarea');
formInputs.forEach((input) => {
  input.addEventListener('input', () => {
    const formData = {
      name: document.getElementById('txtFullname').value,
      email: document.getElementById('txtEmail').value,
      message: document.getElementById('txt_message').value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});