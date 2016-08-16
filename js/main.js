// This is the main js file for Eric_Hebel resume site.

`use strick`


//Smooth Scrolling jQuery
$(document).ready(function(){
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
});


// date counter
function dateCounter(){
    var startDate = new Date('2016-3');
    var todaysDate = new Date();
    var diffInTime = Math.abs(todaysDate.getTime() - startDate.getTime());
    var numOfDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    var results = numOfDays * 0.0325 ;
    document.getElementById("howLong").innerHTML = Math.ceil(results) + ' Months';
 };
dateCounter();
