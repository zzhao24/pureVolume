// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");


	// hide #back-top first
  $("#back-top").hide();

  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top .fi-arrow-up').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

	//slideshow
	var slideIndex = 0;
	showSlides();

	function showSlides() {
	    var i;
	    var slides = document.getElementsByClassName("Slides");
	    var dots = document.getElementsByClassName("dot");

				for (i = 0; i < slides.length; i++) {
	       slides[i].style.display = "none";
	    }
	    slideIndex++;
	    		if (slideIndex > slides.length) {slideIndex = 1}

				for (i = 0; i < dots.length; i++) {
	        dots[i].className = dots[i].className.replace(" active", "");
	    }
	    slides[slideIndex-1].style.display = "block";
	    dots[slideIndex-1].className += " active";
	    setTimeout(showSlides, 3500);
	}


	var video = document.querySelector(".video");
	var juice = document.querySelector(".orange-juice");
	var btn = document.querySelector(".play-pause");

	function togglePlayPause() {
		if (video.paused) {
			btn.className = "pause";
			video.play();
		} else {
			btn.className = "play";
			video.pause();
		}
	}

	btn.onclick = function() {
		togglePlayPause();
	};

	video.addEventListener("timeupdate", function() {
	var juicePos = video.currentTime / video.duration;
	juice.style.width = juicePos * 100 + "%";
	if (video.ended) {
		btn.className = "play";
}

});

})();
