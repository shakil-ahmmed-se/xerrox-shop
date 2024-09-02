const toggler = document.getElementById('toggler');
const sidebar = document.getElementById('navbar_res');

toggler.addEventListener('click', ()=>{
    sidebar.classList.toggle('hidden');
})

// navbar
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('[data-collapse-toggle]');
    const navbarMenu = document.getElementById('navbar-default');

    toggleButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('hidden');
    });
});

// FAQ
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion-toggle');
    accordions.forEach((accordion) => {
      accordion.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const parent = this.parentElement;

        // Toggle the active class on the accordion item
        parent.classList.toggle('active');

        // Adjust the max-height based on the active state
        if (parent.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0';
        }
      });
    });
  });