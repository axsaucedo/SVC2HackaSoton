window.onload = function() {    
	
	resizeDiv();
	parallaxScroll();
	
	$(window).bind('scroll',function(e){
		parallaxScroll();
	});
}

window.onresize = function(event) {
	resizeDiv();
	parallaxScroll();
}

function parallaxScroll() {
	var scrolled = $(window).scrollTop();
	var height = window.innerHeight;
	if(scrolled <= height) {
		$('#hackasoton-wrapper').css('height', (height - scrolled)+'px');
	} else {
		$('#hackasoton-wrapper').css('height', 0+'px');
		$('#content').css('top', (height-scrolled));
	}
}

function resizeDiv() {
	var height = window.innerHeight;
	console.log(height);
	$('#all').css('height', height*8 + 'px');
	$('.section').css('height', height +'px');
	$('#hackasoton-wrapper').css('height', height +'px');
	$('#hackasoton').css('height', height +'px');
}