/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// Get the navbar elem
const navbar = document.querySelector('#navbar__list');
// loop through all sections 
const sections = document.querySelectorAll('section');
// Create list items and add each of them to the navbar 
sections.forEach(sec  => { 
    const list = document.createElement('li');
    list.textContent = sec.id;
    // listen for when list items clicked
    list.addEventListener('click', (event) => {
        // scroll to that section when clicked
        event.preventDefault();
        document.getElementById(sec.id).scrollIntoView({behavior: "smooth"});
   
 })

 navbar.insertAdjacentElement("beforeend", list);
});
//create a global var to hold all list items
const li = document.querySelectorAll('li');
navbar.setAttribute( 'style', 'background-color: grey; display: flex; justify-content: space-around;');
// listen for the  scroll action in the window
window.addEventListener('scroll', () => {
    // loop through each section again 
    sections.forEach(sec  => {
        // get the position of each section and store them in a variable
        const position = sec.getBoundingClientRect();
        // create a variable to hold the correct argument of when a container is in the windows viewport
        const inViewPort = position.top >= 0 && position.top <= window.innerHeight;
        // if all requirements for a window to be considered to be inViewPort is true add the active class to each section else remove it 
       if (inViewPort) {
        sec.classList.add("your-active-class");
        //look through each list item
        li.forEach(each => {
            // check if the text content of each li is equal to the sec.id in viewport
            // if true give .active class
            // else remove it 
            if( each.textContent === sec.id){
                each.classList.add('active');
            } else {
                each.classList.remove('active');
            }
        })
        } else {
        sec.classList.remove("your-active-class");
        }
    });
      // look through each list item in the navbar 

}); 

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


