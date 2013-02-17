$(document).ready(function() {
	$("#logo").fadeIn(750);
});

// Responsive Keyboard Shortcuts DEMO
Mousetrap.bind('h', function() { 
	$("#logo").fadeOut(750);
 });
 
Mousetrap.bind('s', function() { 
	$("#logo").fadeIn(750);
 });
