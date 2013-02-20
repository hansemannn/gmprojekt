$(document).ready(function() {
	$("#logo").fadeIn(750);

	// Responsive Keyboard Shortcuts DEMO
	Mousetrap.bind('h', function() {
		$("#logo").fadeOut(750);
	 });

	Mousetrap.bind('s', function() {
		$("#logo").fadeIn(750);
	 });

	/**
	 * LayerSlider
	 */
	$('#layerslider').layerSlider({
	    skinsPath : 'layerslider/skins/',
	    skin : 'fullwidth',
	    thumbnailNavigation : 'hover',
	    hoverPrevNext : false,
	    responsive : false,
	    responsiveUnder : 940,
	    sublayerContainer : 900
	});
});