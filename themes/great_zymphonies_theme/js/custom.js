var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* --------------------------------------------- 
* Filename:     custom.js
* Version:      1.0.0 (2019-07-17)
* Website:      https://www.zymphonies.com
* Description:  Global Script
* Author:       Zymphonies Team
                info@zymphonies.com
-----------------------------------------------*/

function theme_menu(){

	//Main menu
	jQuery('#main-menu').smartmenus();
	
	//Mobile menu toggle
	jQuery('.navbar-toggle').click(function(){
		jQuery('.region-primary-menu').addClass('expand');
	});
	
	jQuery('.navbar-toggle-close').click(function(){
		jQuery('.region-primary-menu').removeClass('expand');
	});

	//Mobile dropdown menu
	if ( jQuery(window).width() < 767) {
		jQuery(".region-primary-menu li a:not(.has-submenu)").click(function () {
			jQuery('.region-primary-menu').hide();
	    });
	}

}

function theme_home(){
	
	//flexslider
	jQuery('.flexslider').flexslider({
    	animation: "slide"	
    });

}

jQuery(document).ready(function($){
	theme_menu();
	theme_home();
});

}
/*
     FILE ARCHIVED ON 12:40:06 Dec 02, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:31:25 Nov 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.002
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.051
  esindex: 0.014
  cdx.remote: 47.513
  LoadShardBlock: 110.406 (3)
  PetaboxLoader3.datanode: 140.611 (4)
  PetaboxLoader3.resolve: 208.719 (2)
  load_resource: 268.069
*/
