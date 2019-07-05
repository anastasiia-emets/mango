 const el = document.querySelector("#module");

 el.addEventListener("mousemove", (e) => {
   el.style.backgroundPositionX = -e.offsetX + "px";
   el.style.backgroundPositionY = -e.offsetY + "px";
 });

$("#menu-button").click(function(){
 
  $(this).toggleClass("active");
  $("#menu-button").toggleClass("unbutton");
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
  $('#example').show();
  $('#example').animate_Text();
 });

 $(document).ready(function(){
  $('img').fadeIn(5000);
  $('a').fadeIn(5000);
});

