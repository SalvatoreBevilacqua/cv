// Smooth scrolling using scrollIntoView (native behavior) with offset for mobile
// Smooth scrolling to the top of the section without centering it
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const header = document.querySelector('.navbar');
            const offset = header ? header.offsetHeight : 0; // Calcola l'altezza della navbar
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

            // Scroll to the top of the section (no centering)
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Get the height of the navbar safely
const header = document.querySelector('.navbar');
if (header) {
    const headerHeight = header.offsetHeight;
    // Now you can use headerHeight wherever necessary
} else {
    console.warn("L'elemento navbar non è stato trovato.");
}

// Close burger menu after clicking on a link
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).toggle(); // Close the burger menu
        }
    });
});

// ===== Scroll to Top with immediate scroll ==== 
$(document).ready(function() {
    $(window).scroll(function() {
        // Mostra il pulsante solo quando l'utente ha scrollato oltre l'altezza della navbar
        if ($(this).scrollTop() > $('.navbar').outerHeight()) {
            $('#return-to-top').addClass('show'); // Aggiunge la classe 'show' per attivare l'animazione
        } else {
            $('#return-to-top').removeClass('show');
        }
    });
    
    // Scroll immediato al top
    $('#return-to-top').click(function() {
        window.scrollTo(0, 0);  // Torna immediatamente in cima
    });
  });
  