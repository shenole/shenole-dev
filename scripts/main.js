
/* NAVIGATION
- When burger nav is clicked, nav menu widens and burger nav changes to close icon. */

document.querySelector('.burger-nav').addEventListener('click', function() {
	document.querySelector('nav').classList.toggle('open');
	document.querySelector('#main-nav').classList.toggle('visible');
	document.querySelector('.burger-nav').classList.toggle('close-it');
});

