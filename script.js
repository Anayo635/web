// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = '☰';
    menuBtn.classList.add('mobile-menu-btn');
    document.querySelector('header').prepend(menuBtn);
    
    menuBtn.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('show');
    });

    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});