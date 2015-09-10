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