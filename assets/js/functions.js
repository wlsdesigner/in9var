(function(a){function e(){if(a(".gallery-list").length){if(a('html[dir="rtl"]').length){var g=a(".gallery-list");g.isotope({layoutMode:"masonry",percentPosition:true,itemSelector:".gallery-box",originLeft:false})}else{var g=a(".gallery-list");g.isotope({layoutMode:"masonry",percentPosition:true,itemSelector:".gallery-box"})}a("#filters li a").on("click",function(){a("#filters li a").removeClass("active");a(this).addClass("active");var h=a(this).attr("data-filter");g.isotope({filter:h});return false})}}function c(){var g=a(window).width();if(a(".ownavigation .navbar-nav li.ddl-active").length){if(g>991){a(".ownavigation .navbar-nav > li").removeClass("ddl-active");a(".ownavigation .navbar-nav li .dropdown-menu").removeAttr("style")}}else{a(".ownavigation .navbar-nav li .dropdown-menu").removeAttr("style")}}function d(){var g=a(window).width();if(g>991){if(a(".header_s .slidepanel").length){a(".header_s .slidepanel").removeAttr("style")}}}function f(){var k=a("body").offset().top;var l=a(window).scrollTop();var j=a(window).height();var h=a("body").height();var i=a(".header-fix").height();var g=j+i+i;if(h>g){if(l>k){a(".header-fix").addClass("fixed-top animated fadeInDown");a("body").css("padding-top",i)}else{a(".header-fix").removeClass("fixed-top animated fadeInDown");a("body").css("padding-top","0")}}else{a(".header-fix").removeClass("fixed-top animated fadeInDown");a("body").css("padding-top","0")}}function b(p){var j=a("#"+p).attr("data-lat");var k=a("#"+p).attr("data-lng");var g=a("#"+p).attr("data-string");var o=new google.maps.LatLng(j,k);var l,n,i;var h="assets/images/pointer.png";var s=parseInt(a("#"+p).attr("data-zoom"),10);var r=[{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",elementType:"all",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",elementType:"all",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"all",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",elementType:"all",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",elementType:"all",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]}];var q=new google.maps.StyledMapType(r,{name:"Styled Map"});var m={zoom:s,disableDefaultUI:true,center:o,scrollwheel:false,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}};l=new google.maps.Map(document.getElementById(p),m);l.mapTypes.set("map_style",q);l.setMapTypeId("map_style");if(g!=""){i=new google.maps.InfoWindow({content:g})}n=new google.maps.Marker({position:o,map:l,icon:h});google.maps.event.addListener(n,"click",function(){i.open(l,n)})}a(document).on("ready",function(){var k=a(window).width();var g=a(window).height();if(a(".header-fix").length){f()}a('.navbar-nav li a[href*="#"]:not([href="#"]), .site-logo a[href*="#"]:not([href="#"])').on("click",function(m){var l=a(this);a("html, body").stop().animate({scrollTop:a(l.attr("href")).offset().top-49},1500,"easeInOutExpo");m.preventDefault()});a(".ddl-switch").on("click",function(){var l=a(this).parent();if(l.hasClass("ddl-active")||l.find(".ddl-active").length!==0||l.find(".dropdown-menu").is(":visible")){l.removeClass("ddl-active");l.children().find(".ddl-active").removeClass("ddl-active");l.children(".dropdown-menu").slideUp()}else{l.addClass("ddl-active");l.children(".dropdown-menu").slideDown()}});a("[id*='slideit-']").each(function(l){l++;a("[id*='slideit-"+l+"']").on("click",function(){a("[id*='slidepanel-"+l+"']").slideDown(1000);a("header").animate({scrollTop:0},1000)})});a("[id*='closeit-']").each(function(l){l++;a("[id*='closeit-"+l+"']").on("click",function(){a("[id*='slidepanel-"+l+"']").slideUp("slow");a("header").animate({scrollTop:0},1000)})});a("[id*='toggle-']").each(function(l){l++;a("[id*='toggle-"+l+"'] a").on("click",function(){a("[id*='toggle-"+l+"'] a").toggle()})});if(a("#airco-1").length){var h,i=jQuery;if(i("#airco-1").revolution==undefined){revslider_showDoubleJqueryError("#airco-1")}else{h=i("#airco-1").show().revolution({sliderType:"standard",sliderLayout:"auto",dottedOverlay:"none",delay:9000,navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",mouseScrollReverse:"default",onHoverStop:"off",arrows:{style:"custom",enable:true,hide_onmobile:true,hide_under:778,hide_over:1920,hide_onleave:false,tmp:"",left:{h_align:"right",v_align:"top",h_offset:95,v_offset:30},right:{h_align:"right",v_align:"top",h_offset:30,v_offset:30}}},responsiveLevels:[1240,1024,778,480],visibilityLevels:[1240,1024,778,480],gridwidth:[1040,1024,778,480],gridheight:[571,571,450,400],lazyType:"none",shadow:0,spinner:"spinner0",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",disableProgressBar:"on",hideThumbsOnMobile:"off",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,debugMode:false,fallbacks:{simplifyAll:"off",nextSlideOnWindowFocus:"off",disableFocusListener:false,}})}}if(a(".gallery-section").length){e()}if(a(".gallery-box").length){var j;a(".gallery-box .gallery-detail ul li").magnificPopup({delegate:" > a.zoom",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:true,navigateByImgClick:false,preload:[0,1]},image:{tError:"<a href="%j%">The image #%curr%</a> could not be loaded.",}})}if(a(".gallery-thumb").length){var j;a(".gallery-thumb > div").magnificPopup({delegate:" > a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:true,navigateByImgClick:false,preload:[0,1]},image:{tError:"<a href="%j%">The image #%curr%</a> could not be loaded.",}})}if(a(".single-gallery").length){var j;a(".single-gallery > div").magnificPopup({delegate:" > a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:true,navigateByImgClick:false,preload:[0,1]},image:{tError:"<a href="%j%">The image #%curr%</a> could not be loaded.",}})}if(a(".blog-carousel.owl-carousel").length){a(".blog-carousel.owl-carousel").owlCarousel({loop:true,margin:30,nav:false,dots:false,autoplay:true,items:2,responsive:{0:{items:1},1200:{items:2}}});a(".blog-next").on("click",function(){a(".blog-carousel").trigger("next.owl.carousel")});a(".blog-prev").on("click",function(){a(".blog-carousel").trigger("prev.owl.carousel")})}if(a("#contact-map-canvas").length===1){b("contact-map-canvas")}a("#btn_submit").on("click",function(l){l.preventDefault();var m=a("form").serialize();a.ajax({type:"POST",dataType:"json",url:"contact.php",data:m,success:function(n){if(n.type=="error"){a("#alert-msg").html(n.msg);a("#alert-msg").removeClass("alert-msg-success");a("#alert-msg").addClass("alert-msg-failure");a("#alert-msg").show()}else{a("#alert-msg").html(n.msg);a("#alert-msg").addClass("alert-msg-success");a("#alert-msg").removeClass("alert-msg-failure");a("#input_fname").val("");a("#input_lname").val("");a("#input_email").val("");a("#input_phone").val("");a("#textarea_message").val("");a("#alert-msg").show()}},error:function(p,o,n){alert(o)}})})});a(window).on("scroll",function(){if(a(".header-fix").length){f()}});a(window).on("resize",function(){var h=a(window).width();var g=a(window).height();f();d();c()});a(window).on("load",function(){if(!a("html").is(".ie6, .ie7, .ie8")){a("#site-loader").delay(1000).fadeOut("slow")}else{a("#site-loader").css("display","none")}e()})})(jQuery);