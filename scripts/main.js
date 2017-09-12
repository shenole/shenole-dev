
//Navigation - When burger nav is clicked, nav menu widens and burger nav changes to close icon.

document.querySelector('.burger-nav').addEventListener('click', function() {
	document.querySelector('#main-nav').classList.toggle('open');

});