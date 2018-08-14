$(document).ready(function() {
	$(".main").onepage_scroll({
	   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	   easing: "ease-in",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
	                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	   animationTime: 750,             // AnimationTime let you define how long each section takes to animate
	   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
	   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	   beforeMove: function(index) {
	   		$(".page-name").css({"opacity": "0"});
	   },  // This option accepts a callback function. The function will be called before the page moves.
	   afterMove: function(index) {
	   		$(".page-name").animate({
	   			opacity: 1,
	   			bottom: "0px"
	   		}, 1000);

	   },   // This option accepts a callback function. The function will be called after the page moves.
	   loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	   keyboard: true,                  // You can activate the keyboard controls
	   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
	                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
	                                    // the browser's width is less than 600, the fallback will kick in.
	   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
	});

	// page move functions
	var movePage = function(num) {
		$(".main").moveTo(num);
	}

	//move down page on arrow click
	$('.next-page').on('click', function() {
		$('.main').moveDown();
	});

	// 'hello' languages generator
	var helloCount = 0;
	var randomHello = function() {
		var arr = ["hello", "hola", "namaste", "salut", "ciao", "Hallo", "nǐ hǎo", "Ahlan wa Sahlan", "shalom", "marhaba", "olá", "kon'nichiwa", "annyeonghaseyo"];

		$("#hello").fadeOut('slow', function() {
			$("#hello").text(arr[helloCount]);
		});

		if(helloCount === arr.length-1) {
			helloCount = 0;
		} else {
			helloCount++;
		}
	};

	setInterval(function() {
		randomHello()
		$("#hello").fadeIn('slow');
	}, 4000);

	// navigation link movement
	$("#nav-works").click(function(evt) {
		evt.preventDefault();
		movePage(2);
	});

	$("#nav-about").click(function(evt) {
		evt.preventDefault();
		movePage(3);
	});

	$("#nav-contact").click(function(evt) {
		evt.preventDefault();
		movePage(4);
	});

		//project text fade-in on hover
	$(".highlight").hover(
		//hover on
		function() {
			$(this).find("img").css("max-width", "103%");
		},
		//hover out
		function() {
			$(this).find("img").css("max-width", "100%");
	});

	//cycle through fun facts on click
	var factoidCount = 0;
	$('.facts-container').on('click', function(event) {
		var arr = ["I studied abroad in Costa Rica",
		"I (also) studied abroad in Spain",
		"I breakdance",
		"I'm a trance music lover",
		"I danced ballet for 4 years", ];
		var photo = $('.profile-pic');

		if(factoidCount === arr.length) {
			photo.fadeOut('slow', function() {
				photo.attr('src', "../images/profile-pic.jpg");
			});
			$('#fun-fact').text("Fun facts about me");
			factoidCount = -1;
		}

		$("#fun-fact").text(arr[factoidCount]);

		switch(factoidCount) {
			case 0:
				photo.fadeOut(400, function() {
					photo.attr('src', "../images/costa-rica.jpg");
				})
				photo.fadeIn('fast');
				break;
			case 1:
				photo.fadeOut(400, function() {
					photo.attr('src', "../images/spain.jpg");
				});
				photo.fadeIn('fast');
				break;
			case 2:
				photo.fadeOut(400, function() {
					photo.attr('src', "../images/break-dance.jpg");
				});
				photo.fadeIn('fast');
				break;
			case 3:
				photo.fadeOut(400, function() {
					photo.attr('src', "../images/trance.jpg");
				})
				photo.fadeIn('fast');
				break;
			case 4:
				photo.fadeOut(400, function() {
					photo.attr('src', "../images/ballet.jpg");
				})
				photo.fadeIn('fast');
				break;
			default:
				photo.fadeOut(400, function() {
					photo.attr('src', "../images/profile-pic.jpg");
				})
				photo.fadeIn('fast');
		}
		factoidCount++;
	});

	//hack to make factoid link change color on div hover
	$('.facts-container').hover(
		function() {
			$('#factoid-refresh').css('color', "#698aac");
		},
		function() {
			$('#factoid-refresh').css('color', "white");
		}
	);
});
