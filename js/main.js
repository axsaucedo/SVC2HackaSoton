$(function() {
	var height;

	var resizeDiv = function() {
		var nh = window.innerHeight;
		if (height === nh) return;
		height = nh;
		document.getElementById('hackasoton').style.height = height + 'px';
		document.body.style.paddingTop = height + 'px';

		// console.log($('event').height() + $('photos').height() + $('schedule').height() + $('prizes-title').height() + )
	}

	window.addEventListener("load", function() {
		resizeDiv();
	});

	window.addEventListener("resize", function() {
		resizeDiv();
	})

	function parallaxScroll() {
		var scrolled = $(window).scrollTop();

		console.log($('event').offset());

	}

	$(window).bind('scroll',function(e){
		parallaxScroll();
	});

});