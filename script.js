// Smooth scrolling to the top of the section 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== "#") {
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
            } else {
                console.warn(`Elemento non trovato per selettore: ${targetId}`);
            }
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

// Animazione del burger menu (Seconda animazione)
document.querySelector('.second-button').addEventListener('click', function () {
    document.querySelector('.animated-icon2').classList.toggle('open');
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Cambia icona
    if (document.body.classList.contains("dark-mode")) {
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");
    } else {
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.classList.add("fa-sun");
    }
});
