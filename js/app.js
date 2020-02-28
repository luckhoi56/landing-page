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
var p_section_1 = document.getElementById("section1");
var p_section_2 = document.getElementById("section2");
var p_section_3 = document.getElementById("section3");
var section_1 ;
var section_2 ;
var section_3 ;
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
window.onscroll = function(){add_active()};

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navBuild();
section_1 = document.getElementsByClassName("section_1")[0];
section_2 = document.getElementsByClassName("section_2")[0];
section_3 = document.getElementsByClassName("section_3")[0];

// Scroll to section on link click

// Set sections as active

function add_background_effect(m_element){
   m_element.classList.add("your-active-class");

}
function remove_background_effect(m_element){
    m_element.classList.remove("your-active-class");
}
function add_active(){

    if (window.scrollY >=200 && window.scrollY <700){
        add_background_effect(p_section_1);
        section_1.style.backgroundColor ="green";
        section_2.style.backgroundColor ="transparent";
        section_3.style.backgroundColor ="transparent";
    }
    else if (window.scrollY >=900 && window.scrollY <1400){
        add_background_effect(p_section_2);
        section_1.style.backgroundColor ="transparent";
        section_2.style.backgroundColor ="green";
        section_3.style.backgroundColor ="transparent";
    }
    else if (window.scrollY >=1600){
        add_background_effect(p_section_3);
        section_1.style.backgroundColor ="transparent";
        section_2.style.backgroundColor ="transparent";
        section_3.style.backgroundColor ="green";
    }
    else{
        remove_background_effect(p_section_1);
        remove_background_effect(p_section_2);
        remove_background_effect(p_section_3);
        section_1.style.backgroundColor ="transparent";
        section_2.style.backgroundColor ="transparent";
        section_3.style.backgroundColor ="transparent";
    }
}