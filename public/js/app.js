console.log('js is wire up!')

// Fading
$(function($){
    //show up when scroll is using//
    $(window).scroll(function() {
        if ($(this).scrollTop() > 350) $('.icon-side-bar').fadeIn("slow");
            else $('.icon-side-bar').fadeOut("slow");
		});
		$(window).scroll(function() {
			if ($(this).scrollTop() > 150) $('#article, #figure, #arrow-down').fadeOut("slow");
					else $('#article, #figure, #arrow-down').fadeIn("slow");
	});
	$('#arrow-down, #courses-button').click(function(){
		$('html').animate({ 
				scrollTop: $('.courses-container').offset().top 
		}, 1000);	
	});
});



      (function() {
		'user strict';
		var hello = document.querySelector('.wrapper'),
			blur = document.querySelector('.img'),
			windowHeight = window.innerHeight,
			isScroll = false;

		var latestScroll = 0;
		var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  	window.requestAnimationFrame = requestAnimationFrame;

  		var init = function() {
  			window.addEventListener('scroll', function(){
				latestScroll = window.scrollY;
				checkScroll();
			}, false);
  		}

		var checkScroll = function() {
			if(!isScroll) {
				window.requestAnimationFrame(update);
			}
			isScroll = true;
		}

		var update = function() {
			currentScroll = latestScroll;
			isScroll = false;
			var helloScroll = currentScroll * 4,
				blurScroll = currentScroll / 2;

			hello.style.transform = 'translate3d(0, ' + helloScroll + 'px, 0)';
 blur.style.opacity = (blurScroll / windowHeight - 5).toFixed(5);
			if(blur.style.opacity >= 1) {
				blur.style.opacity = 1;
			}
		}

		init();
	})();

	var myVar;

	function myFunction() {
		myVar = setTimeout(showPage, 3000);
	}
	
	function showPage() {
		document.getElementById("loader").style.display = "none";
		document.getElementById("myDiv").style.display = "block";
	}