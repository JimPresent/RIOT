"use strict";
$(document).ready(function () {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;

	// the function for running the slide show	
	var runSlideShow = function () {
		$("#caption").fadeOut(50);
		$("#slide").fadeOut(50,
			function () {
				if (nextSlide.next().length == 0) {
					nextSlide = $("#slides img:first-child");
				}
				else {
					nextSlide = nextSlide.next();
				}
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt");
				$("#slide").attr("src", nextSlideSource).fadeIn(50);
				$("#caption").text(nextCaption).fadeIn(50);
			}
		)
	}

	// start slide show
	var timer1 = setInterval(runSlideShow, 3000);

	// start and stop the slide show
	// but the toggle event method has been removed from jQuery 1.9
	/*
	$("#slide").toggle( 
		function() {
			clearInterval(timer1);
		},
		function() {
			timer1 = setInterval(runSlideShow, 3000);
		}
	)
	*/

	// here's one way to code this app without using the toggle event method
	$("#slide").click(function () {
		if (timer1 != null) {
			clearInterval(timer1);
			timer1 = null;
		}
		else {
			timer1 = setInterval(runSlideShow, 1000);
		}
	});

})

// window.onload = clock();
// function clock()
// {
//     var d = new Date();
//     var date = d.getDate();
//     var year = d.getFullYear();
//     var month = d.getMonth();
//     var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
//     month = monthArr[month];
 
//     document.write(date+" "+month+", "+year);
// }