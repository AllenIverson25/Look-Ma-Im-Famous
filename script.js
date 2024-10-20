window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.et-hero-tabs-container');
    if (window.scrollY > 100) { // Add a scroll threshold
        navbar.classList.add('et-hero-tabs-container--top');
    } else {
        navbar.classList.remove('et-hero-tabs-container--top');
    }
});
