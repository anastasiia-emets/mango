//  const el = document.querySelector(".paralax");

//  el.addEventListener("mousemove", (e) => {
//    el.style.backgroundPositionX = -e.offsetX + "px";
//    el.style.backgroundPositionY = -e.offsetY + "px";
//  });

$(".main-block__humb").click(function(){
 
  $(this).toggleClass("active");
  $(".main-block__humb").toggleClass("unbutton");
  $("#menu").slideToggle("slow");
  $("#menu").css("display","flex")
  $(".main-block-item1").toggleClass("unhover");
  $(".main-block__links").toggleClass("unhover");
  $(".main-block-item2").toggleClass("main-block-item2_hover");
  });

$(document).ready(function(){
  $.fn.animate_Text = function() {
   var string = this.text();
   return this.each(function(){
    var $this = $(this);
    $this.html(string.replace(/./g, '<span class="new">$&</span>'));
    $this.find('span.new').each(function(i, el){
     setTimeout(function(){ $(el).addClass('div_opacity'); }, 40 * i);
    });
   });
  };
  $('.main-block-text__description').show();
  $('.main-block-text__description').animate_Text();
 });

 $(document).ready(function(){
  $('img').fadeIn(5000);
  $('a').fadeIn(5000);
});

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();