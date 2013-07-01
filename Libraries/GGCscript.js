$(document).ready(function(){

			/*
			
			//UPDATED & STABLE ON 7/1/13 @ 3:35 PM
			
			var sidepics = ['Church1', 'Church2', 'Church3', 'Church4', 'Church5', 'Church6', 'Church7', 'cross', 'dove', 'GGCHolyBible', 'ThePassion'];
			var count1 = 0;
			var count2 = 1;
			var count3 = 2;
			var count4 = 3;
			
			var picposition1 = '#piclefttop';
			var picposition2 = '#picleftbottom';
			var picposition3 = '#picrighttop';
			var picposition4 = '#picrightbottom';
			var timing1 = 5000;
			var timing2 = 7000;
			var timing3 = 7000;
			var timing4 = 5000;
			
			$(function(){
				
				var animatePicture = function(count, picposition, timing){
					if(count === 11) count = 0;
					
					var $image1 = $(picposition);
					$image1.attr('src', '../Pictures/' + sidepics[count] + '.jpg');
					$image1.show().css({
						width: 10
						, height: 10
					});
					$image1.animate({
						width: 150
						, height: 150}
						, timing
						, "linear"
						, function(){
							$image1.fadeOut('slow',function(){	
								count++;
								animatePicture(count, picposition, timing);
							});
						});
				};
				animatePicture(count1, picposition1, timing1);
				animatePicture(count2, picposition2, timing2);
				animatePicture(count3, picposition3, timing3);
				animatePicture(count4, picposition4, timing4);
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