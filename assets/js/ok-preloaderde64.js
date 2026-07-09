(function($) {
	var imgList = [];
	$.extend({
		preload: function(imgArr, option) {
			var setting = $.extend({
				init: function(loaded, total) {},
				loaded: function(img, loaded, total) {},
				loaded_all: function(loaded, total) {}
			}, option);
			var total = imgArr.length;
			var loaded = 0;
			
			setting.init(0, total);
			for(var i in imgArr) {
				imgList.push($("<img />")
					.attr("src", imgArr[i])
					.load(function() {
						loaded++;
						setting.loaded(this, loaded, total);
						if(loaded == total) {
							setting.loaded_all(loaded, total);
						}
					})
				);
			}
			
		}
	});
})(jQuery);


$(function() {
	$.preload([
		"assets/images/about_bg.jpg",
		"assets/images/ajax-loader.gif",
		"assets/images/home_bg.jpg",
		"assets/images/big_pad.png",
		"assets/images/doves.png",
		"assets/images/jobs_bg.jpg",
		"assets/images/projects_bg.jpg",
		
		"assets/images/howwedo/card-en.png",
		"assets/images/howwedo/clipboard-en.png",
		"assets/images/howwedo/ipad-en.png",
		"assets/images/howwedo/picture-en.png",
		"assets/images/howwedo/card-de.png",
		"assets/images/howwedo/clipboard-de.png",
		"assets/images/howwedo/ipad-de.png",
		"assets/images/howwedo/picture-de.png",

		"assets/images/next1.png",
		"assets/images/next2.png",
		"assets/images/next3.png",
		"assets/images/jobs_bg_triangles.png",
		], {
		init: function(loaded, total) {
			$("#top, #home, #projects, #products, #design, #about, #jobs").hide();
			$("#loadingtext").html("Loading...");
		},
		loaded: function(img, loaded, total) {
			var loader = 245-((loaded/total)*245);
			var prozent = Math.round(loaded/total*100);
			$("#loadingtext").html("Loading : "+prozent+"%");
			//$("#loadingtext").html("Lade jede Menge Inhalte: "+loaded+"/"+total);
			$("#loadingbar").css({"background-position" : "0px "+loader+"px"});
		},
		loaded_all: function(loaded, total) {
			$("#loadingtext").html("Loading finished!");
			$("#preloader").delay(500).fadeOut();
			$("#top, #home, #projects, #products, #design, #about, #jobs, footer").delay(1000).fadeIn("slow", function(){
				launchStellar();
			});
		}
	});

	/*
	launching the parallax script after loading images;
	why?
	because if you want to do diagonal parallax with centered images (background-position: center/50%), the stellar script needs to get the image width;
	if we don't wait the images to be loaded, it returns a 0px width;

	so this is not needed if you don't want to center your images
	BUT the diagonal parallax script centers itself the images so it can't work by another way (for the moment)
	*/

	function launchStellar(){
		$(window).stellar({
		    horizontalScrolling: "horizontalParallax",
		    verticalScrolling: "verticalParallax",
		    diagonalScrolling: "diagonalParallax",
		    responsive: true,
		    opacityScrolling: "diagonalParallax",
		});
	}

});
