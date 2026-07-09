var trigger = 0
var oldScroll = 0
var scrolled = false;
var $about = $("#about");
var $aboutImg1 = $about.find(".img-1");
var $aboutImg2 = $about.find(".img-2");
var $aboutImg3 = $about.find(".img-3");
var $aboutImg4 = $about.find(".img-4");
var $aboutImg5 = $about.find(".img-5");
var $aboutImg6 = $about.find(".img-6");
var $aboutImg7 = $about.find(".img-7");
var $aboutP = $about.find(".about_images_text p");
var $design = $("#design");
var aboutActive = false;
var aboutActive2 = false;
var goToUp = false;

$(window).scroll(function(){
	
	var scrollTop = $(this).scrollTop();
	var winH = $(window).height();
	var scroll = scrollTop + (winH / 2);
	var scrollBot = scrollTop + winH;
	goToUp = ((scroll < oldScroll) ? true : false);

	if (scroll < 1000) {
		$("#nav li").removeClass("active");
		$("#mn_home").addClass("active");
	}
	if ((scroll >= 1000) && (scroll < 2000) ) {
		$("#nav li").removeClass("active");
		$("#mn_projects").addClass("active");
	}
	if ((scroll >= 2000) && (scroll < 2900) ) {
		$("#nav li").removeClass("active");
		$("#mn_products").addClass("active");
	}

	/* our great team script */

	if ((scrollTop >= 2900) && (scrollBot < 6300)) {
		$("#nav li").removeClass("active");
		$("#mn_about").addClass("active");

		aboutActive = true;
		$about.find(".screen").css({"position":"fixed", "height":winH+"px"});


		if(goToUp){
			if(scrollTop <= 3200){
				if($aboutImg1.hasClass("show")){
					$aboutImg1.removeClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-1").removeClass("show");
				}
			}
			if(scrollTop <= 3500){
				if($aboutImg2.hasClass("show")){
					$aboutImg2.removeClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-1").addClass("show");
				}
			}
			if(scrollTop <= 3800){
				if($aboutImg3.hasClass("show")){
					$aboutImg3.removeClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-2").addClass("show");
				}
			}
			if(scrollTop <= 4100){
				if($aboutImg4.hasClass("show")){
					$aboutImg4.removeClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-3").addClass("show");
				}
			}
			if(scrollTop <= 4400){
				if($aboutImg5.hasClass("show")){
					$aboutImg5.removeClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-4").addClass("show");
				}
			}
			if(scrollTop <= 4700){
				if($aboutImg6.hasClass("show")){
					$aboutImg6.removeClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-5").addClass("show");
				}
			}
			if(scrollTop <= 5000){
				if($aboutImg7.hasClass("show")){
					$aboutImg7.removeClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-6").addClass("show");
				}
			}
		}else{
			if(scrollTop >= 3200){
				if(!$aboutImg1.hasClass("show")){
					$aboutImg1.addClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-1").addClass("show");
				}
			}
			if(scrollTop >= 3500){
				if(!$aboutImg2.hasClass("show")){
					$aboutImg2.addClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-2").addClass("show");
				}
			}
			if(scrollTop >= 3800){
				if(!$aboutImg3.hasClass("show")){
					$aboutImg3.addClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-3").addClass("show");
				}
			}
			if(scrollTop >= 4100){
				if(!$aboutImg4.hasClass("show")){
					$aboutImg4.addClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-4").addClass("show");
				}
			}
			if(scrollTop >= 4400){
				if(!$aboutImg5.hasClass("show")){
					$aboutImg5.addClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-5").addClass("show");
				}
			}
			if(scrollTop >= 4700){
				if(!$aboutImg6.hasClass("show")){
					$aboutImg6.addClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-6").addClass("show");
				}
			}
			if(scrollTop >= 5000){
				if(!$aboutImg7.hasClass("show")){
					$aboutImg7.addClass("show");
					$aboutP.removeClass("show");
					$about.find(".text-7").addClass("show");
				}
			}
		}

	}else{
		if(aboutActive == true){
			aboutActive = false;
			if(goToUp){
				$about.find(".screen").css({"top":"0","bottom":"auto","position":"absolute"});
			}else{
				$about.find(".screen").css({"top":"auto","bottom":"0","position":"absolute"});
			}
		}
	}

	/* end our great team script */

	/* how we do section */

	if ((scrollTop >= 6300) && (scrollBot < 9300)) {
		$("#nav li").removeClass("active");
		$("#mn_design").addClass("active");

		aboutActive2 = true;
		$design.find(".screen").css({"position":"fixed", "height":winH+"px"});


		if(goToUp){
			if(scrollTop <= 6500){
				if($design.find(".hwd-1").hasClass("active")){
					$design.find(".hwd-1").removeClass("active");
				}
			}
			if(scrollTop <= 6900){
				if($design.find(".hwd-3").hasClass("active")){
					$design.find(".hwd-3").removeClass("active");
					$design.find(".arrow-1").css("stroke-dashoffset", "290");
				}
			}
			if(scrollTop <= 7300){
				if($design.find(".hwd-5").hasClass("active")){
					$design.find(".hwd-5").removeClass("active");
					$design.find(".arrow-2").css("stroke-dashoffset", "280");
				}
			}
			if(scrollTop <= 7700){
				if($design.find(".hwd-7").hasClass("active")){
					$design.find(".hwd-7").removeClass("active");
					$design.find(".arrow-3").css("stroke-dashoffset", "260");
				}
			}
			if(scrollTop <= 8100){
				if(!($design.find(".arrow-4").css("stroke-dashoffset") == "1300")){
					$design.find(".arrow-4").css("stroke-dashoffset", "1300");
				}
			}
		}else{
			if(scrollTop >= 6500){
				if(!$design.find(".hwd-1").hasClass("active")){
					$design.find(".hwd-1").addClass("active");
				}
			}
			if(scrollTop >= 6900){
				if(!$design.find(".hwd-3").hasClass("active")){
					$design.find(".hwd-3").addClass("active");
					$design.find(".arrow-1").css("stroke-dashoffset", "0");
				}
			}
			if(scrollTop >= 7300){
				if(!$design.find(".hwd-5").hasClass("active")){
					$design.find(".hwd-5").addClass("active");
					$design.find(".arrow-2").css("stroke-dashoffset", "0");
				}
			}
			if(scrollTop >= 7700){
				if(!$design.find(".hwd-7").hasClass("active")){
					$design.find(".hwd-7").addClass("active");
					$design.find(".arrow-3").css("stroke-dashoffset", "0");
				}
			}
			if(scrollTop >= 8100){
				if(!($design.find(".arrow-4").css("stroke-dashoffset") == 0)){
					$design.find(".arrow-4").css("stroke-dashoffset", "0");
				}
			}
		}

	}else{
		if(aboutActive2 == true){
			aboutActive2 = false;
			if(goToUp){
				$design.find(".screen").css({"top":"0","bottom":"auto","position":"absolute"});
			}else{
				$design.find(".screen").css({"top":"auto","bottom":"0","position":"absolute"});
			}
		}
	}

	/* end how we do section */

	if ((scroll >= 9300)) {
		$("#nav li").removeClass("active");
		$("#mn_jobs").addClass("active");
	}

	oldScroll = scroll;

});

$(document).ready(function() {
	
	$("#nav").localScroll();
	
	var slider = $("#thumbscreen").slides({
		container: "thumbscreen-slides",
		generateNextPrev: true,
		pagination: true
	});

	$(".pagination").show();



	$(".pagination li:nth-child(1) a").text(text_sec2[1]).addClass('active');
	$(".pagination li:nth-child(2) a").text(text_sec2[2]);
	// $(".pagination li:nth-child(3) a").text(" Apps");

});

