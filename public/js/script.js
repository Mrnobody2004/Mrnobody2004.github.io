// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.add('show');
        menuToggle.style.display = 'none';
        closeBtn.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('show');
        menuToggle.style.display = 'block';
        closeBtn.style.display = 'none';
    });
});
