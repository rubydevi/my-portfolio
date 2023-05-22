const openNav = document.getElementById("btnSetting");
const modalNav = document.getElementById("modalSetting");
const closeNav = document.getElementById("btnCloseNav");

openNav.addEventListener("click", () => {
  modalNav.style.display = "flex";
});

closeNav.addEventListener("click", () => {
  modalNav.style.display = "none";
});
