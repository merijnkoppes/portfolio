$(".divlink").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
});
(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);
  
  var win = $(window);
  
  var allMods = $(".module");
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible"); 
    } 
  });
  
  win.scroll(function(event) {
    
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    
  });
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  document.getElementsByClassName('clock')[0].innerHTML =  h + ":" + m ;
  document.getElementsByClassName('clock')[1].innerHTML =  h + ":" + m ;
  document.getElementsByClassName('clock')[2].innerHTML =  h + ":" + m ;
  document.getElementsByClassName('clock')[3].innerHTML =  h + ":" + m ;
  document.getElementsByClassName('clock')[4].innerHTML =  h + ":" + m ;
  document.getElementsByClassName('clock')[5].innerHTML =  h + ":" + m ;
  document.getElementsByClassName('clock')[6].innerHTML =  h + ":" + m ;
  
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
