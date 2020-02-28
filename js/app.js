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
 * Define Global Variables
 *
 * 
*/
var fragment = document.createDocumentFragment();


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
function navBuild(){
    var fragment = document.createDocumentFragment();

    const navBar = document.querySelector('#navbar__list');
    for(let i = 3; i >= 1; i--){
        let m_dom = document.createElement('li')
        let m_string = `<a class ="section_${i}" href="#section${i}">Section ${i}</a>`;
        m_dom.innerHTML=m_string;
        fragment.appendChild(m_dom);
    }
    navBar.appendChild(fragment);
   
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navBuild();
window.onscroll = function(){add_active()};

// Scroll to section on link click

// Set sections as active

function initiate_variable(){
   

}
function add_active(){
    let section1 = document.getElementsByClassName("section_1")[0];
    let section2 = document.getElementsByClassName("section_2")[0];
    let section3 = document.getElementsByClassName("section_3")[0];
    if (window.scrollY >=471 && window.scrollY <800){
        section1.style.backgroundColor ="green";
        section2.style.backgroundColor ="transparent";
        section3.style.backgroundColor ="transparent";
    }
    else if (window.scrollY >=1042 && window.scrollY <1500){
        section1.style.backgroundColor ="transparent";
        section2.style.backgroundColor ="green";
        section3.style.backgroundColor ="transparent";
    }
    else if (window.scrollY >=1700){
        section1.style.backgroundColor ="transparent";
        section2.style.backgroundColor ="transparent";
        section3.style.backgroundColor ="green";
    }
}