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
		console.log(height - scrolled);
		$('#hackasoton').css('height', (height - scrolled)+'px');
	} else {
		$('#hackasoton').css('height', 0+'px');
		$('#content').css('top', (height-scrolled));
	}
}

function resizeDiv() {
	var height = window.innerHeight;
	console.log(height);
	$('#global-spacer').css('height', height*8 + 'px');
	$('#hackasoton-wrapper').css('height', height +'px');
}