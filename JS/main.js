
//Hamburger Menu
const menuBtn = document.querySelector('.menu-btn');
const menuContent = document.querySelector('.menu-content');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    // Toggle the "open" class to change the appearance of the menu button (optional)
    menuBtn.classList.add('open');

    // Set the display property of the menu content element to "block" to show it
    menuContent.style.display = 'block';

    menuOpen = true;
  } else {
    // Toggle the "open" class to change the appearance of the menu button (optional)
    menuBtn.classList.remove('open');

    // Set the display property of the menu content element to "none" to hide it
    menuContent.style.display = 'none';

    menuOpen = false;
  }
});


// Fun facts section (Transform and Box-shadow)
const sections = document.querySelectorAll('.facts-intro-section');

sections.forEach(section => {
    section.addEventListener('click', () => {
        sections.forEach(otherSection => {
            if (otherSection !== section) {
                otherSection.classList.remove('clicked'); // Remove "clicked" class from other sections
            }
        });
        section.classList.toggle('clicked'); // Toggle "clicked" class on the clicked section
    });
});

document.addEventListener('click', (event) => {
    sections.forEach(section => {
        if (!section.contains(event.target)) {
            section.classList.remove('clicked'); // Remove "clicked" class from all sections
        }
    });
});



// Back To Top Button
const backToTopButton = document.getElementById('backToTopBtn');

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 270) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
