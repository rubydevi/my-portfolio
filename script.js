const openNav = document.getElementById('btnSetting');
const modalNav = document.getElementById('modalSetting');
const closeNav = document.getElementById('btnCloseNav');

openNav.addEventListener('click', () => {
  modalNav.style.display = 'flex';
});

closeNav.addEventListener('click', () => {
  modalNav.style.display = 'none';
});

const menuLists = document.querySelectorAll('#menuList li');

menuLists.forEach((lists) => {
  lists.addEventListener('click', (event) => {
    const link = lists.querySelector('a');
    const sectionId = link.getAttribute('href');

    // Navigate to the target section
    document.querySelector(sectionId).scrollIntoView();

    // Hide the modal <ul>
    const modalSection = document.getElementById('modalSetting');
    modalSection.style.display = 'none';

    // Prevent the default link behavior
    event.preventDefault();
  });
});