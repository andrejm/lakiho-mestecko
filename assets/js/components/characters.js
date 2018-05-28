jQuery(document).ready(function($) {
	var character = '.js-character',
		activeClass = 'character-active',
		clickedClass = 'character-clicked';

	$( character ).on( 'click', function() {
		var $this = $(this);

		$this.toggleClass( activeClass );
		$this.addClass( clickedClass );
	});
});