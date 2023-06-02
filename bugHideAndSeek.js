document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btnSetting');
  button.addEventListener('click', () => {
    const modal = document.getElementById('modalContainer');
    modal.style.display = 'block';
  });
});