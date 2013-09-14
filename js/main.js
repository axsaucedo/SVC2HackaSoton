(function() {
	var height;
	var heightPrize = document.getElementById('prizes').offsetHeight;
	var offsetPrizes = document.getElementById('event').offsetHeight 
							+ document.getElementById('photos').offsetHeight
							+ heightPrize;

	var map;
	var mapinit = function() {
		var mountbatten = new google.maps.LatLng(50.937281, -1.398491);
		var mapOptions = {
			zoom: 15,
			center: mountbatten,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
		};

		map = new google.maps.Map(document.getElementById('location_map'), mapOptions);

		new google.maps.Marker({
			position: mountbatten,
			map: map,
			title: "Mountbatten Building"
		});
	}

	var resizeDiv = function() {
		var nh = window.innerHeight;
		if (height === nh) return;
		height = nh;
		document.getElementById('hackasoton').style.height = height + 'px';
		document.body.style.paddingTop = height + 'px';
	}

	window.addEventListener("load", function() {
		resizeDiv();
		mapinit();
	});

	window.addEventListener("resize", function() {
		resizeDiv();
	});

	var parallax = function() {
		var scrolled = $(window).scrollTop();

		var parallaxPrizes = (heightPrize - (100+height + offsetPrizes - scrolled))/10;
		if (parallaxPrizes > 0) {
			console.log("Prizes parallax: " + parallaxPrizes, heightPrize);
			$('#left-main-pic').css('top', -parallaxPrizes+'px');
			$('#right-main-pic').css('top', -parallaxPrizes+'px');
		}
	}

	$(window).scroll(parallax); 

})();