var $j = jQuery.noConflict();
$j(function() {
	var map = $j(".map");
	var par = map.closest("li").removeClass("col-md-8").addClass("col-md-12").height($j(window).height()*.9);
	map.height(par.innerHeight());

	 $j('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $j(this.hash);
      target = target.length ? target : $j('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $j('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});