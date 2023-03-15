const bars = document.querySelector(".fa-bars");
const closebtn = document.querySelector(".fa-square-xmark");
const sidebar = document.querySelector(".sidebar");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closebtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
