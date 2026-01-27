# FOB — Personal Portfolio

A responsive single-page portfolio built with plain HTML, CSS and JavaScript.

## Quick links
- Live entry: [index.html](index.html)  
- Styles: [CSS/styles.css](CSS/styles.css)  
- Behavior: [JS/main.js](JS/main.js)  
- Static assets: [Images/](Images/) | [Docs/](Docs/)

## Summary
This project is a small, client-side portfolio site featuring:
- Progressive loader and fade transitions
- Mobile-first responsive layout with media queries
- Hamburger menu for mobile and desktop navigation
- Contact overlay modal and in-page single-page navigation
- Interactive UI elements (skill bars, clickable fact cards, portfolio cards)
- "Back to top" control

## Architecture overview (high-level)

- Entry
  - [index.html](index.html) — single-page structure with distinct sections: About (#section1), Resume (#section2), Portfolio (#section3), Contact (#section4). Navigation targets and UI elements (menu, overlay, skill bars, portfolio cards) live here.

- Styling
  - [CSS/styles.css](CSS/styles.css) — global styling and responsive breakpoints. Key components:
    - Header / hamburger: `.menu-btn`, `.menu-btn__burger`
    - Screen overlay: `#overlay`, `#overlayContent`
    - Skill bars: `.skillBar`, `.htmlFill`, `.cssFill`, `.jsFill`, `.javaFill`, `.dartFill`, `.flutFill`
    - Interactive card states: `.clicked` (facts/portfolio)
    - Back-to-top button: `#backToTopBtn`

- Behavior / Client logic
  - [JS/main.js](JS/main.js) — event-driven DOM script that implements:
    - Progressive loader and main view reveal (on window `load`)
    - Menu toggling via [`openMenu`](JS/main.js) / [`closeMenu`](JS/main.js)
    - Mobile menu link handling (closes menu on link click)
    - Single-page navigation (About/Resume/Portfolio/Contact) wired to links in the header
    - Current-link color logic via [`changeColor`](JS/main.js)
    - Role text rotator (IIFE that updates `roleText`) — see the rotator IIFE in [JS/main.js](JS/main.js)
    - Back-to-top behavior using [`backToTopButton`](JS/main.js)
    - Click-toggle interactions for `.facts-intro-section` and `.portfolio-works-section` (adds/removes `.clicked`)

- Files & assets
  - [Docs/](Docs/) — downloadable CV referenced from the UI
  - [Images/](Images/) — profile and icon assets used by [index.html](index.html)

## Developer notes / How to run
1. Clone or copy project files to your environment.
2. Open [index.html](index.html) in a modern browser. No build tools required.
3. Edit CSS in [CSS/styles.css](CSS/styles.css) and behavior in [JS/main.js](JS/main.js).

## Key code references
- Menu open/close: [`openMenu`](JS/main.js), [`closeMenu`](JS/main.js) — [JS/main.js](JS/main.js)  
- Link color change: [`changeColor`](JS/main.js) — [JS/main.js](JS/main.js)  
- Back-to-top: [`backToTopButton`](JS/main.js) — [JS/main.js](JS/main.js)  
- Role text rotator IIFE: see top section of [JS/main.js](JS/main.js)

## Common tasks
- Make header links persistent: update `changeColor` and ensure the link IDs match those in [index.html](index.html).
- Add new portfolio items: duplicate a `.portfolio-works-section` block in [index.html](index.html) and style in [CSS/styles.css](CSS/styles.css).
- Adjust responsive breakpoints: modify media queries in [CSS/styles.css](CSS/styles.css).

## Contributing
- Fork, branch, and submit pull requests. Keep changes scoped: markup in [index.html](index.html), styles in [CSS/styles.css](CSS/styles.css), scripts in [JS/main.js](JS/main.js).

## License
MIT — adapt as needed.

## Contact
See the contact section in [index.html](index.html).


########################################
########################################
########################################
########################################
This is my portfolio website.
It is still under major construction for now
27-01-2026
dd-mm-yyyy
