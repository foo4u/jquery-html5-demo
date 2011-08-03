$(document).ready(function(){

	var handleResponse = function(data) {

		$('#container').fadeOut(function() {
			$(this).html(data).fadeIn();
		});
	};

	$('a#loadContent').click(function(event) {
	
		$.get('fragment.html', handleResponse);
	});
	
	$('a#applyStyles').live('click', function(event) {
	
		event.preventDefault();
		$('#container p').addClass('strong');
	});
	
});
