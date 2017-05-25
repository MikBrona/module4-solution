
/////////////////////// FRONT PAGE ///////////////////////

setInterval(function(){
    var $his = $("#historie");
    var $spr = $("#sprog");
    var $pol = $("#politik");
    var $kul = $("#kultur");

    var $en = $("#en");
    var $to = $("#to");
    var $tre = $("#tre");
    var $fire = $("#fire");

    if($his.not(":hover")) {
       $en.css("display", "none");
    }  
    if($his.is(":hover")) {
       $en.css("display", "block");
    }

    if($spr.not(":hover")) {
       $to.css("display", "none");
    }
    if($spr.is(":hover")) {
       $to.css("display", "block");
    }
    if($pol.not(":hover")) {
       $tre.css("display", "none");
    }
    if($pol.is(":hover")) {
       $tre.css("display", "block");
    }
    if($kul.not(":hover")) {
       $fire.css("display", "none");
    }
    if($kul.is(":hover")) {
       $fire.css("display", "block");
    }
})

/////////////////////// SPROG ///////////////////////

setInterval(function(){
    var $alf = $("#alfabet");
    var $tal = $("#talord");
    var $sna = $("#snart");

    var $one = $("#one");
    var $two = $("#two");
    var $thr = $("#three");

    if($alf.not(":hover")) {
       $one.css("display", "none");
    }  
    if($alf.is(":hover")) {
       $one.css("display", "inline");
    }
    if($tal.not(":hover")) {
       $two.css("display", "none");
    }  
    if($tal.is(":hover")) {
       $two.css("display", "inline");
    }

    if($sna.not(":hover")) {
       $thr.css("display", "none");
    }  
    if($sna.is(":hover")) {
       $thr.css("display", "inline");
    }
})



// GO BACK

function goBack() {
    window.history.back();
}



/////////////////////// Historie ///////////////////////

(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();

/////////////////////// CAROOUSEL ///////////////////////


$('#myCarousel').on('slid.bs.carousel', '', checkitem);  // on caroussel move

$(document).ready(function(){               // on document ready
    checkitem();
});

function checkitem()                        // check function
{
  var $this = $('#myCarousel');
  if($('.carousel-inner .item:first').hasClass('active')) {
    $this.children('.left.carousel-control').hide();
    $this.children('.right.carousel-control').show();
  } else if($('.carousel-inner .item:last').hasClass('active')) {
    $this.children('.left.carousel-control').show();
    $this.children('.right.carousel-control').hide();
  } else {
    $this.children('.carousel-control').show();

  } 
}


