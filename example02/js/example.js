$(document).ready(function(){
  
  var original = document.getElementById('original');
  
  $(original).click(function(event) {	
	event.preventDefault();
	$('<li>BAM!</li>').appendTo('ul');
  });
  
  $('a#addToList1').click(function(event) {	
	event.preventDefault();
	$('<li>BAM!</li>').appendTo('ul#list1');
  });
  
  $('a#addToList2').click(function(event) {	
	event.preventDefault();
	$('<li>BAM!</li>').appendTo('ul#list2');
  });
  
});
