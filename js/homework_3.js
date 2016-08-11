

/*jQuery(function($){*/
	$(document).ready(function(){
		
        /*submenu*/
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
            
        });
       
        
        $(window).load(function(){ // On load
		    
            $('#trailer').css({'height':(($(window).height()))+'px'});
	       });
	       $(window).resize(function(){ // On resize
		       
               $('#trailer').css({'height':(($(window).height()))+'px'});
	       });
        
        
        /* This is basic - uses default settings */
	
        /*Fancybox*/
        $("a.fancybox").fancybox();
        $("a.fancybox").fancybox({
            'hideOnContentClick': true
        });
        $("a.fancybox").fancybox(
			{						
              "padding" : 20,
              "imageScale" : false, 
			  "zoomOpacity" : false,
			  "zoomSpeedIn" : 1000,	
			  "zoomSpeedOut" : 1000,	
			  "zoomSpeedChange" : 1000, 
			  "frameWidth" : 700,	 
			  "frameHeight" : 600, 
			  "overlayShow" : true, 
			  "overlayOpacity" : 0.8,	
			"centerOnScroll" : false});

        
        
        var wind_height = parseInt($(window).height())
        var navbar_height = parseInt($(".navbar").css("height"))
        $(".content-sm").css(
            {"height":
                (wind_height - navbar_height).toString()
                  +"px"}     );
        $(".content-sm-1").css(
            {"height":
                (wind_height - navbar_height).toString()
                  +"px"}     );
        
        /*new WOW().init();*/
        
        /*Make the nontransparent navigation*/
        $("a.btn").click(function(){
            $(".container-fluid").css("opacity", "1");
        });
        
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                $(".container-fluid").css("opacity", "1");
                } 
            else {
                $(".container-fluid").css("opacity", "0.7");
            }
             });
        
        
        /*Make the top scroller*/
        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        }); 
        
        
	});
    
      
/*jQuery);*/