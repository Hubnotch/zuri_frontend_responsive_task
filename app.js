



const menuToggle = () => {
    const menuToggler = document.querySelector(".nav-link-toggler");
    const navLinks = document.querySelector(".nav-links");
    menuToggler.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}
menuToggle();

const navLinks = document.querySelector(".nav-links");    
const menuToggler = document.querySelector(".nav-link-toggler");

window.onclick = function (event) {
  if (event.target == menuToggler) {
    navLinks.style.display = "none";
  }
};