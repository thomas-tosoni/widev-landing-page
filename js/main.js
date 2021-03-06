// Tooltips for Social Links
$('.tooltip-social').tooltip({
	selector: "a[data-toggle=tooltip]"
});

// Owl Carousel
$(document).ready(function($) {
	$("#my-owl").owlCarousel({
    center: true
  });
});

// Custom Tab styles
$(document).ready(function($) {
	var androidSelector = $(".linux-div");
	var windowsSelector = $(".windows-div");
	var iPhoneSelector = $(".osx-div");

    $(".i-div").click(function() {
        androidSelector.fadeOut(function() {
            windowsSelector.fadeOut(function() {
                iPhoneSelector.fadeIn();
            })
        })
    });

    $(".a-div").click(function() {
		windowsSelector.fadeOut(function() {
            iPhoneSelector.fadeOut(function() {
                androidSelector.fadeIn();
            })
        })
	});

	$(".w-div").click(function() {
        iPhoneSelector.fadeOut(function() {
            androidSelector.fadeOut(function() {
                windowsSelector.fadeIn();
            })
        })
	});
});

// Fancybox
$(document).ready(function() {
  $(".fancybox").fancybox({
    openEffect	: 'none',
    closeEffect	: 'none',
    helpers: {
      overlay: {
        locked: false
      },
      thumbs : {
        width: 50,
        height: 50
      }
    }
  });

});

// Google Maps
$(function () {
	var map = new GMaps({
		el: "#map",
		lat: 48.8155394,
		lng: 2.3629927,
		zoom: 15,
		scrollwheel: false,
		zoomControl : true,
		zoomControlOpt: {
			style : "BIG",
			position: "TOP_LEFT"
		},
		panControl : true,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false
	});

	var styles = [
		{
			stylers: [
				{ hue: "#00ffe6" },
				{ saturation: -100 }
			]
		}
	];

	map.addStyle({
		styledMapName:"Styled Map",
		styles: styles,
		mapTypeId: "map_style"
	});

	map.setStyle("map_style");

	map.addMarker({
		lat: 48.8155394,
		lng: 2.3629927,
		title: 'Epitech',
		infoWindow: {
			content: '<p>24 Rue Pasteur<br />94270 Le Kremlin-Bicêtre, France<br />(+33) 1 44 08 00 50</p>'
		}
	});
});

// Parallax
$(document).ready(function(){
	$('#intro').parallax("50%", 0.1);
	$('#second').parallax("50%", 0.1);
});
