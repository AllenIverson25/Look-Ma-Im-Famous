window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.et-hero-tabs-container');
    if (window.scrollY > 80) { // Adjusted scroll threshold
        navbar.classList.add('et-hero-tabs-container--top');
    } else {
        navbar.classList.remove('et-hero-tabs-container--top');
    }
});
document.querySelectorAll('.et-hero-tab').forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll smoothly to center the target element
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
