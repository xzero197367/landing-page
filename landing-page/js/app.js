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
*/

const sections= document.querySelectorAll('section');
const menu = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function to get sections from index.html file
function getSections(){
	sections.forEach(function(element){

		const sec_name = element.getAttribute('data-nav');
		const newList = document.createElement('li');
		const newLink  = document.createElement('a');
		const textNode = document.createTextNode(sec_name);



		newLink.addEventListener('click', function(){
			element.scrollIntoView({behavoir: "smooth"});
		});

		newLink.setAttribute("class", "menu__link");


		newLink.appendChild(textNode);
		newList.appendChild(newLink);
		fragment.appendChild(newList);
	});
	return fragment;
}


//Add Fragment to the menu
menu.appendChild(getSections());
const links_all = document.querySelectorAll('a');
//Determine if section is in viewport
window.addEventListener('scroll', function(){
	apperance(sections, links_all);
});
//Gives the section bieng viewed adifferent apperance
function apperance(sectionAdd, LinksAdd){
	sectionAdd.forEach(function(element){

		const sectionSelected = element.getBoundingClientRect();

		if (sectionSelected.top >= -100 && sectionSelected.top <= 300) {
			
			// loop through list
			LinksAdd.forEach(function(current){
				// selected link style
				if (element.getAttribute('data-nav') == current.textContent) {
					current.style.background = "#333333";
					current.style.color = "#ffffff";
				}
				// unselected link style
				else{
					current.style.background = "#fff";
					current.style.color = "#000";
				}
			});
		}
	});
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//createListNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

//https://udacity.zoom.us/rec/play/RrkaelbnaWozjBuBNG-TgzDeHqSbuzJ4cabDdDY6iU6MJrIQA_88JkEkn9VPefoD6uSNGeYHPdm7-P2C.Xcdz_mtCe09qqjb_?startTime=1616005837000&_x_zm_rtaid=WQ1Tgz-FRlSEZgFzF6vaAQ.1616230286089.bb9364dd303c06f54412af7891c2ac46&_x_zm_rhtaid=961



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


