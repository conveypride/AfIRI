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

/**
 * @file
 * Binds jQuery accordions to provided FAQ Fields.
 */

(function ($, Drupal, drupalSettings) {

  "use strict";

  Drupal.behaviors.faqfieldAccordion = {
    attach: function (context) {
      if (drupalSettings.faqfield != undefined) {

        // Bind the accordion to any defined faqfield accordion formatter with
        // provided settings.
        for (var selector in drupalSettings.faqfield) {
          $(selector, context).accordion(drupalSettings.faqfield[selector]);
        }

      }
    }
  };

})(jQuery, Drupal, drupalSettings);


}
/*
     FILE ARCHIVED ON 14:53:31 Jan 14, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:19:08 Nov 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.671
  exclusion.robots: 0.038
  exclusion.robots.policy: 0.026
  esindex: 0.016
  cdx.remote: 19.371
  LoadShardBlock: 206.194 (3)
  PetaboxLoader3.datanode: 146.803 (4)
  PetaboxLoader3.resolve: 251.27 (3)
  load_resource: 215.412
*/
