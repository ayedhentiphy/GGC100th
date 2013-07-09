$(document).ready(function(){

			
			
			//UPDATED & STABLE ON 7/1/13 @ 3:35 PM

			var sidepics = ['Church1', 'Church2', 'Church3', 'Church4', 'Church5', 'Church6', 'Church7', 'cross', 'dove', 'GGCHolyBible', 'ThePassion'];
			var count1 = 0;
			var count2 = 1;
			var count3 = 2;
			var count4 = 3;
			var count5 = 4;
			
			var hands = 40, toppy = 100, bottomy = 500;
			
			var randlocate = function(){
				var randnum = Math.floor((Math.random() * 100) + 10);
				if(randnum % 10 < 50){
					return 500;
				}
				else{
					return 100;
				}
			};
			
			$(function(){
				
				var timingtest = function(){
					return (Math.floor((Math.random() * 5) + 5)) * 1000;
				};
				
				var animatePicture = function(count, picposition, timing, hands, arctic){ //Hands: right or left; Arctic: top or bottom (North & South)
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
								animatePicture(count, picposition, timingtest(), hands, arctic);
							});
						});
				};
				
				animatePicture(count1, '#piclefttop', timingtest(), hands, toppy);
				animatePicture(count2, '#picleftbottom', timingtest(), hands, bottomy);
				animatePicture(count3, '#picleftmiddle', timingtest(), hands, toppy);
				animatePicture(count4, '#picrighttop', timingtest(), hands, toppy);
				animatePicture(count5, '#picrightbottom', timingtest(), hands, bottomy);
			});
			
			//Variable change where the pictures pop up on the side window
			//Randomly cycling through pictures of the array never repeating the same picture till all pictures have been shown
			
			
	$('.themephrase').mouseenter(function(){
		$('.themephrase').css('color', '#99FF00');
	}).mouseleave(function(){
		$('.themephrase').css('color', '#330066');
	});
	$('themephrase').click(function(){
		$('h2').slideDown('slow');
	});
});