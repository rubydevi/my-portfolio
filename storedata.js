// Check for pre-filled data to load on form fields.
const prefilledData = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    document.getElementById('txtFullname').value = formData.name || '';
    document.getElementById('txtEmail').value = formData.email || '';
    document.getElementById('txt_message').value = formData.message || '';
  }
};