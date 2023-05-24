// Navlinks Popup
const openNav = document.getElementById('btnSetting');
const modalNav = document.getElementById('modalSetting');
const closeNav = document.getElementById('btnCloseNav');

openNav.addEventListener('click', () => {
  modalNav.style.display = 'flex';
});

closeNav.addEventListener('click', () => {
  modalNav.style.display = 'none';
});

const menuList = document.querySelectorAll('#menuList li');

menuList.forEach((list) => {
  list.addEventListener('click', (event) => {
    const url = list.querySelector('a');
    const sectionId = url.getAttribute('href');

    document.querySelector(sectionId).scrollIntoView();

    const modalSection = document.getElementById('modalSetting');

    modalSection.style.display = 'none';
    event.preventDefault();
  });
});

// Projects Populate
// const closeButton = document.getElementById("btnClose");
// const openProject = document.querySelectorAll(".card-button");
// const modalProject = document.getElementById("modalProject");

// openProject.addEventListener("click", function() {
//   debugger;
//   modalProject.style.display = "block";
// });

// closeButton.addEventListener("click", function() {
//   modalProject.style.display = "none";
// });

const projects = [
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/workThumbnails/work1.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://rubydevi.github.io/my-portfolio',
    sourceLink: 'https://github.com/rubydevi/my-portfolio',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/workThumbnails/work1.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://rubydevi.github.io/my-portfolio',
    sourceLink: 'https://github.com/rubydevi/my-portfolio',
  },
  {
    name: 'Website Portfolio ',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/workThumbnails/work1.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://rubydevi.github.io/my-portfolio',
    sourceLink: 'https://github.com/rubydevi/my-portfolio',
  },
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/workThumbnails/work1.svg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://rubydevi.github.io/my-portfolio',
    sourceLink: 'https://github.com/rubydevi/my-portfolio',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/modalPopup/snapshootPortfolioDesktop.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://rubydevi.github.io/my-portfolio',
    sourceLink: 'https://github.com/rubydevi/my-portfolio',
  },
  {
    name: 'Website Portfolio ',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    image: 'images/modalPopup/snapshootPortfolioDesktop.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://rubydevi.github.io/my-portfolio',
    sourceLink: 'https://github.com/rubydevi/my-portfolio',
  },
];

// Dynamically create cards for each project
const projectsContainer = document.getElementById('projectsContainer'); // .card grid in my case

projects.forEach((project) => {
  const projectElement = document.createElement('div'); // div for each project = projectElement
  projectElement.classList.add('card', 'bg-image3', 'child-card');

  // Create HTML structure for each project
  projectElement.innerHTML = `
    <div class="card-body">
      <h2 class="card-title text-white child-title">${project.name} </h2>
      <p class="card-description text-white child-description">${project.description}</p>
      <ul class="card-tags child-tags">
        ${project.technologies.map((tech) => `<li class="card-tag child-tag">${tech}</li>`).join('')}          
      </ul>
      <button type="button" class="card-button child-button">See project</button>
    </div>
  `;

  projectsContainer.appendChild(projectElement); // append all the cards in the main .card-grid
});

// Modal Popup funtion for .card-button
const openProject = document.querySelectorAll('.child-button');
const modalProject = document.getElementById('modalProject');
const modalContent = document.getElementById('modalContentProject');

openProject.forEach((button, index) => {
  button.addEventListener('click', () => {
    const project = projects[index];
    if (project) {
      modalContent.innerHTML = `
      <div class="card-body modalBody">
        <div class="modalHead">
          <h1 class="card-title modal-title">${project.name}</h1>
          <button id="btnClose" type="button" class="btn-icon">
            <img src="images/modalPopup/imgCloseDark.png" alt="close">
          </button>
        </div>        
        <ul class="card-tags modal-tags">        
          ${project.technologies.map((tech) => `
          <li class="card-tag modal-tag">${tech}</li>`).join('')}
        </ul>
        <div id="mainBody">
          <div class="card-img modal-img">
            <img id="imgModalWork" src="${project.image}" alt="${project.name}">
          </div>
          <div class="modal-side">
            <p class="card-description modal-description">${project.description}</p>        
            <div class="modalButtons">
              <a href="${project.liveLink}" class="card-button modal-button">See Live <img src="images/modalPopup/seeLiveDesktop.svg" alt=""></a>
              <a href="${project.sourceLink}" class="card-button modal-button">See Source <img src="images/modalPopup/modalGitIcon.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
      `;

      // Add event listener to the dynamically created "Close" button
      const closeButton = document.getElementById('btnClose');

      closeButton.addEventListener('click', () => {
        modalProject.style.display = 'none';
      });

      modalProject.style.display = 'flex';
      modalProject.style.overflow = 'auto';
    }
  });
});