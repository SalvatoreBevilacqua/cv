// Smooth scrolling to the top of the section 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== "#") {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const header = document.querySelector('.navbar');
                const offset = header ? header.offsetHeight : 0; // Calculate the height of the navbar
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                // Scroll to the top of the section (without centering)
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Element not found for selector: ${targetId}`);
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
    console.warn("Navbar element not found.");
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
        // Show the button only when the user scrolls past the navbar height
        if ($(this).scrollTop() > $('.navbar').outerHeight()) {
            $('#return-to-top').addClass('show'); // Add the 'show' class to trigger the animation
        } else {
            $('#return-to-top').removeClass('show');
        }
    });
    
    // Immediate scroll to the top
    $('#return-to-top').click(function() {
        window.scrollTo(0, 0);  // Scroll immediately to the top
    });
  });

// Animation for burger menu (Second animation)
document.querySelector('.second-button').addEventListener('click', function () {
    document.querySelector('.animated-icon2').classList.toggle('open');
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change icon
    if (document.body.classList.contains("dark-mode")) {
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");
    } else {
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.classList.add("fa-sun");
    }
});
