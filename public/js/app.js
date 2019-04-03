console.log('js is wire up!')

// Fading
$(function($){
    //show up when scroll is using//
    $(window).scroll(function() {
      if ($(this).scrollTop() > 350) $('.icon-side-bar').fadeIn("slow");
      	else $('.icon-side-bar').fadeOut("slow");
		});
		$(window).scroll(function() {
			if ($(this).scrollTop() > 450) $('#article, #arrow-down, .profile-img').fadeOut("slow");
				else $('#article, #arrow-down, .profile-img').fadeIn("slow");
	});
	$('#arrow-down, #courses-button').click(function(){
		$('html').animate({ 
			scrollTop: $('.arrow-container').offset().top
		}, 2000);	
	});
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }

// arrow-button
 function currentSlide(n) {
  showSlides(slideIndex = n);
 }

	function showSlides(n) {
	let i;

  let slides = document.getElementsByClassName("courses-item");
  let dots = document.getElementsByClassName("dot");
	
	if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
	
	for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
		}

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " active";
}

  //  (function() {
	// 	'user strict';
	// 	var hello = document.querySelector('.wrapper'),
	// 		blur = document.querySelector('.profile-img'),
	// 		windowHeight = window.innerHeight,
	// 		isScroll = false;

	// 	var latestScroll = 0;
	// 	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  //   window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  // 	window.requestAnimationFrame = requestAnimationFrame;

  // 		var init = function() {
  // 			window.addEventListener('scroll', function(){
	// 			latestScroll = window.scrollY;
	// 			checkScroll();
	// 		}, false);
  // 		}

	// 	var checkScroll = function() {
	// 		if(!isScroll) {
	// 			window.requestAnimationFrame(update);
	// 		}
	// 		isScroll = true;
	// 	}

	// 	var update = function() {
	// 		currentScroll = latestScroll;
	// 		isScroll = false;
	// 		var helloScroll = currentScroll * 2,
	// 			blurScroll = currentScroll / 2;

	// 		hello.transform = 'translate3d(0, ' + helloScroll + 'px, 0)';
 	// 		blur.style.opacity = (blurScroll / windowHeight - 5).toFixed(2);
	// 		if(blur.style.opacity >=1) {
	// 			blur.style.opacity = 1;
	// 		}
	// 	}
	// 	init();
	// })();


