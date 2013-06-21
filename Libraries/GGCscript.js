$(document).ready(function(){
	/*$('.usingsite').click(function(){
		$('.usingsite').hide();
	});*/
	$('.themephrase').mouseenter(function(){
		$('.themephrase').css('color', '#99FF00');
	}).mouseleave(function(){
		$('.themephrase').css('color', '#330066');
	});
	$('themephrase').click(function(){
		$('h2').slideDown('slow');
	});
});