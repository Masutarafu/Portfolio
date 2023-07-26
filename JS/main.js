// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     if(!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });




const menuBtn = document.querySelector('.menu-btn');
const menuContent = document.querySelector('.menu-content');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    // Toggle the "open" class to change the appearance of the menu button (optional)
    menuBtn.classList.add('open');

    // Set the display property of the menu content element to "block" to show it
    // You can use any other value like "flex", "grid", or "inline-block" based on your layout requirements
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






// const menuBtn = document.querySelector('.menu-btn');
// const menuContent = document.querySelector('.menu-content');
// let menuOpen = false;

// menuBtn.addEventListener('click', () => {
//   if (!menuOpen) {
//     menuBtn.classList.add('open');
//     menuContent.classList.add('visible'); // Add the 'visible' class to show the menu content

//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove('open');
//     menuContent.classList.remove('visible'); // Remove the 'visible' class to hide the menu content

//     menuOpen = false;
//   }
// });
