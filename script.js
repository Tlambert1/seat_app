
$(document).ready(function()
{
  
  $('#wrapper').hover(function()
  {
    $(this).fadeTo(100, 0.25); 
  }, function(){
    $(this).fadeTo(100, 1);    
  });
  
 
});

$(document).ready(function() {
    

$("#form").hide();




$(".available").click('click', function(){
	$(this).toggleClass('selected');
	$("form").slideDown( "slow");
	
	
})

$(".available").hover(function(){
    $(this).fadeTo("slow", 0.25);
    }, function(){
    
});


  
  




});