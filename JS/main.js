// Progressive Loading// Progressive Loading// Progressive Loading// Progressive Loading// Progressive Loading
// Progressive Loading// Progressive Loading// Progressive Loading// Progressive Loading// Progressive Loading
// Wait for the page to fully load
window.addEventListener('load', function() {
    // Display the priority section with fade-in effect
    const prioritySection = document.getElementById('preSection');
    prioritySection.style.display = 'block';
    setTimeout(function() {
      prioritySection.style.opacity = 1;
    }, 1000);
  
    // Wait for the initial section to appear and then start fading out
    setTimeout(function() {
      prioritySection.style.opacity = 0;
    }, 1800); // Adjust timing as needed
  
    // Load the remaining section after transitions are complete
    setTimeout(function() {
      prioritySection.style.display = 'none';
      const mainPageSection = document.getElementById('mainSection');
      mainPageSection.style.display = 'block';
      setTimeout(function() {
        mainPageSection.style.opacity = 1;
      }, 200)
    }, 2500); // Adjust timing as needed
  });  
    


//Hamburger Menu//Hamburger Menu//Hamburger Menu//Hamburger Menu//Hamburger Menu//Hamburger Menu
//Hamburger Menu//Hamburger Menu//Hamburger Menu//Hamburger Menu//Hamburger Menu//Hamburger Menu
const menuBtn = document.querySelector('.menu-btn');
const menuContent = document.querySelector('.menu-content');
const menuLinks = menuContent.querySelectorAll('a'); // Select all links inside the menu
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Function to open the menu
function openMenu() {
  menuBtn.classList.add('open');
  menuContent.style.display = 'block';
  menuOpen = true;
}

// Function to close the menu
function closeMenu() {
  menuBtn.classList.remove('open');
  menuContent.style.display = 'none';
  menuOpen = false;
}

// Add event listeners to menu links to close the menu when clicked
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});



// ABOUT PAGE CONTACT BUTTON// ABOUT PAGE CONTACT BUTTON// ABOUT PAGE CONTACT BUTTON// ABOUT PAGE CONTACT BUTTON
// ABOUT PAGE CONTACT BUTTON// ABOUT PAGE CONTACT BUTTON// ABOUT PAGE CONTACT BUTTON// ABOUT PAGE CONTACT BUTTON
document.addEventListener("DOMContentLoaded", function () {
  const showOverlayButton = document.getElementById("showOverlay");
  const overlay = document.getElementById("overlay");
  const closeOverlayButton = document.getElementById("closeOverlay");

  showOverlayButton.addEventListener("click", function () {
      overlay.classList.remove("hidden");
  });

  closeOverlayButton.addEventListener("click", function () {
      overlay.classList.add("hidden");
  });
});



//Single Page Working//Single Page Working//Single Page Working//Single Page Working//Single Page Working
//Single Page Working//Single Page Working//Single Page Working//Single Page Working//Single Page Working
document.addEventListener("DOMContentLoaded", function () {
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");
    const section4 = document.getElementById("section4");
    const aboutMeButton = document.getElementById("aboutMe");
    const resumeButton = document.getElementById("resume");
    const porfolioButton = document.getElementById("portfolio");
    const contactButton = document.getElementById("contact");

    aboutMeButton.addEventListener("click", function (event) {
        event.preventDefault();
        section1.style.display = "block";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
    });

    resumeButton.addEventListener("click", function (event) {
        event.preventDefault();
        section1.style.display = "none";
        section2.style.display = "block";
        section3.style.display = "none";
        section4.style.display = "none";
    });

    porfolioButton.addEventListener("click", function (event) {
        event.preventDefault();
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "block";
        section4.style.display = "none";
    });

    contactButton.addEventListener("click", function (event) {
        event.preventDefault();
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "block";
    });

});



// Present Page Link color// Present Page Link color// Present Page Link color// Present Page Link color
// Present Page Link color// Present Page Link color// Present Page Link color// Present Page Link color
const links = document.querySelectorAll('.menuLinks');

// Set default color for the first link
links[0].style.color = '#800080';

// Function to handle the click event
function changeColor(event) {
  // Reset the color of all links
  links.forEach(link => {
    link.style.color = '#555555';
  });

  // Change the color of the clicked link
  event.target.style.color = '#800080';
}

// Attach the click event listener to each link
links.forEach(link => {
  link.addEventListener('click', changeColor);
});



// Fun facts section (Transform and Box-shadow)// Fun facts section (Transform and Box-shadow)
// Fun facts section (Transform and Box-shadow)// Fun facts section (Transform and Box-shadow)
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



// Back To Top Button// Back To Top Button// Back To Top Button// Back To Top Button// Back To Top Button
// Back To Top Button// Back To Top Button// Back To Top Button// Back To Top Button// Back To Top Button
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
