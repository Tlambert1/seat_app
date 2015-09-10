$(document).ready(function() {
    

$("#form").hide();



$(".available").on('click', function(){
	$(this).removeClass('available').addClass('selected');
	$("form").slideDown( "slow");
})

$(".available").hover(function(){
    $(this).fadeTo("slow", 0.25);
    }, function(){
    $(this).fadeTo("slow", 1);
});


});