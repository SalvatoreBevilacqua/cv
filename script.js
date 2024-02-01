// Easing function for a more 'elegant' scroll effect
// Using an ease-in-out quad function
function easeInOutQuad(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }
  
  // Animated scroll to function
  function animatedScrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if(currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }
  
  // Apply the animated scroll to anchor clicks
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              animatedScrollTo(document.documentElement, targetElement.offsetTop, 1200); // Duration of 1200ms
          }
      });
  });

// Get the height of the header
const headerHeight = document.querySelector('header').offsetHeight;

// Adjust the scrolling function to account for the header height
function animatedScrollTo(element, to, duration) {
  var start = element.scrollTop,
      change = to - start - headerHeight, // Subtract the header height here
      currentTime = 0,
      increment = 20;
      
  var animateScroll = function() {
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if(currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

// Apply the adjusted animated scroll to anchor clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            animatedScrollTo(document.documentElement, targetElement.offsetTop, 1200); // Duration of 1200ms
        }
    });
});
