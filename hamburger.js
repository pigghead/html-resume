document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const sideWrapper = document.querySelector('.side-wrapper');

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the click from propagating to the window
        this.classList.toggle('active');
        sideWrapper.classList.toggle('active');
    });

    sideWrapper.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the click from propagating to the window
    });

    window.addEventListener('click', function(event) {  
    if (!event.target.closest('.side-wrapper') && !event.target.closest('#hamburger')) {   
        hamburger.classList.remove('active');
        sideWrapper.classList.remove('active');
    }

    });
});