
// ----- NAVIGATION
// When burger nav is clicked, nav menu widens and burger nav changes to close icon. */

document.querySelector('.burger-nav').addEventListener('click', function() {
	document.querySelector('nav').classList.toggle('open');
	document.querySelector('#main-nav').classList.toggle('visible');
	document.querySelector('.burger-nav').classList.toggle('close-it');
});

// ----- PROJECT PAGE
/*Project panels are visible on click, but 
If another project panel is visible, it is then hidden.*/

var showProject = document.querySelectorAll('.left-project-container .project-');
var siteDescr = document.querySelectorAll('.project-text-left');
var introText = document.querySelector('#intro-text');
var closeProject = document.querySelectorAll('.close-project-icon');
var oldId = null;

(showProject).forEach(function(thumb) {
    thumb.addEventListener('click', function(e) {
        introText.style.display = 'none';
        var project = document.querySelector('#proj-' + e.target.id);
        //const project = document.querySelector('#proj-' + e.target.id);
        if( oldId != null ) {
           document.querySelector('#proj-'+ oldId).style.display = "none";
        }
        project.style.display = 'block';
        //--- save current id
        oldId = e.target.id;
    });
});