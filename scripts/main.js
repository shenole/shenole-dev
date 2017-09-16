
/* NAVIGATION
- When burger nav is clicked, nav menu widens and burger nav changes to close icon. */

document.querySelector('.burger-nav').addEventListener('click', function() {
	document.querySelector('nav').classList.toggle('open');
	document.querySelector('#main-nav').classList.toggle('visible');
	document.querySelector('.burger-nav').classList.toggle('close-it');
});

// Project panels are visible on click.

var showProject = document.querySelectorAll('#lower-project-container .project-');

Array.from(showProject).forEach(function(thumb) {
	thumb.addEventListener('click', function(e) {
		document.querySelector('#proj-' + e.target.id).style.display = 'block';
	});
});

// If another project panel is visible, it is then hidden.

var projectPanel = document.querySelectorAll('.project-text-left');

/*Array.from(projectPanel).forEach(function(e) {
	console.log(projectPanel);
});*/




	if (projectPanel.id != panel.id) {
		projectPanel.style.display = 'none';
	}
//});