$(document).ready(function(){

	$('.loadable').each(function(index) {
		$(this).html('<p>Hello ' + $(this).data('name') + '!</p>');
	});
	
});
