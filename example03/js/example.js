$(document).ready(function(){
  
  // Register a click handler on all anchors with class listUpdater
  $('a.listUpdater').click(function(event) {	
	
	event.preventDefault();
	
	var listId = $(this).data('listId');
	
	if( listId ) {
		$('<li>BAM!</li>').appendTo( $('#' + listId) );
	} else {
		$('<li>BAM!</li>').appendTo('ul');
	}
	
  });
  
});
