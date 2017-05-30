$(document).ready(function() {
	$(".main").onepage_scroll({
	   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	   easing: "ease-in",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
	                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	   animationTime: 750,             // AnimationTime let you define how long each section takes to animate
	   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
	   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
	   afterMove: function(index) {
	   		$(".page-name").css({"opacity": "0"});
	   		$(".page-name").animate({
	   			opacity: 1,
	   			bottom: "0px"
	   		}, 1000);

	   },   // This option accepts a callback function. The function will be called after the page moves.
	   loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	   keyboard: true,                  // You can activate the keyboard controls
	   responsiveFallback: 768,        // You can fallback to normal page scroll by defining the width of the browser in which
	                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
	                                    // the browser's width is less than 600, the fallback will kick in.
	   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});

	$(".project").hover(
		//hover on
		function() {
			$("h4", this).css("display", "block");
			$("p", this).css("display", "block");
		},
		//hover out
		function() {
			$("h4").css("display", "none");
			$("p", this).css("display", "none");
	});

	//random language 'hello' text generator
	var randomHello = function() {
		var arr = ["hello", "namaste", "hola", "salut", "ciao", "Hallo", "nǐ hǎo", "Ahlan wa Sahlan", "shalom", "marhaba", "olá", "kon'nichiwa", "annyeonghaseyo"];
		var randNum = Math.floor(Math.random()*arr.length);
				$("#hello").fadeOut('slow', function() {
					$("#hello").text(arr[randNum]);
				});
	}

	setInterval(function() {
		randomHello()
		$("#hello").fadeIn('slow');
	}, 6000);


});