$(document).ready(function(){
	$('#main-menu').find('ul').find('li').mouseover(function() {
    	var opcion=$(this).text();
    	console.log(opcion);

    	var lista=$('#slogans').find('ul').find('li').text();
    	

  })
  .mouseout(function() {
    	$(this).find('ul').find('li').css("width", "0");
    	
  });
});