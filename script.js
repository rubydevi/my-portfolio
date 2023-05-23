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

// Modal Popup for Projects
let projects = [
  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: "images/work1.svg",
    technologies: ["HTML", "Bootstrap", "Ruby"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/project1"
  },
  {
    name: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: "images/work2.svg",
    technologies: ["HTML", "Bootstrap", "Ruby"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/project1"
  },
  {
    name: "Website Portfolio 1",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: "images/work2.svg",
    technologies: ["HTML", "Bootstrap", "Ruby"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/project1"
  },
  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: "images/work2.svg",
    technologies: ["HTML", "Bootstrap", "Ruby"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/project1"
  },
  {
    name: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: "images/work2.svg",
    technologies: ["HTML", "Bootstrap", "Ruby"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/project1"
  },
  {
    name: "Website Portfolio 2",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: "images/work2.svg",
    technologies: ["HTML", "Bootstrap", "Ruby"],
    liveLink: "https://example.com/project1",
    sourceLink: "https://github.com/project1"
  }
];

let projectsContainer = document.getElementById("projectsContainer"); // .card grid in my case