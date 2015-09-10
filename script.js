$(document).ready(function() {
    
var reservationArray= [];

var reserver= function(name, email) {
	this.name=name;
	this.email=email;
}


$("#form").hide();



$(".available").on('click', function(){
	$(this).toggleClass('selected').toggleClass('available');
	// $(this).off("mouseenter");
	$("form").slideDown( "slow");
});

// $(".selected").on('click', function(){
// 	$(this).on("hover");
// })


// $(".available").hover(function(){
//     $(this).fadeTo("slow", 0.25);
//     }, function() {
//     $(this).fadeTo("slow", 1);
// });


$('#submit').on('click', function(e) {
	e.preventDefault();
	$('.selected').addClass('unavailable').removeClass('selected');
	var person= new reserver(document.getElementById('name').value, document.getElementById('email').value);
	reservationArray.push(person);
	console.log(reservationArray);
});


});