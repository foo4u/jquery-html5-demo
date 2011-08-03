$(document).ready(function(){

	$('a#applyStyles').toggle(function(event) {	
		event.preventDefault();
		$('h1').toggleClass('fancy');
		$('li:even').addClass('even');
		$('li:odd').css('background-color', '#cccccc');
		
		$(this).text('Remove styles');
		
	}, function(event) {
		$('h1').toggleClass('fancy');
		$('li:even').removeClass('even');
		$('li:odd').css('background-color', '');
		
		$(this).text('Apply styles');
	});
	
	
	  $('div#doc').append('<p>Enjoy the demo!</p>');

});
