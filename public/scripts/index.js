// Fading
$(function($){
    //show up when scroll is using//
    $(window).scroll(function() {
      if ($(this).scrollTop() > 350) $('.icon-side-bar').fadeIn("slow");
      	else $('.icon-side-bar').fadeOut("slow");
		});
		$(window).scroll(function() {
			if ($(this).scrollTop() > 550) $('#article, #arrow-down, .profile-img').fadeOut("slow");
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

