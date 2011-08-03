$(document).ready(function(){
  
  $('<li>BAM!</li>').appendTo('ul');
  
  $("a").click(function(event) {	
	//event.preventDefault();
	$('<li>BAM!</li>').appendTo('ul');
  });
  
});
