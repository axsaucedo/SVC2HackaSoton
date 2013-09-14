(function() {
	var height;

	var resizeDiv = function() {
		var nh = window.innerHeight;
		if (height === nh) return;
		height = nh;
		document.getElementById('hackasoton').style.height = height + 'px';
		document.body.style.paddingTop = height + 'px';
	}

	window.addEventListener("load", function() {
		resizeDiv();
	});

	window.addEventListener("resize", function() {
		resizeDiv();
	})

})();