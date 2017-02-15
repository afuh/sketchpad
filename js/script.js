$(document).ready(function() {
  var userInput = 64,
      total = userInput*userInput,
      medida = 960/userInput;

  for (var i = 0; i < total; i++) {
   $(".sketch").prepend("<div class=\"square\"></div>");
 }

  $(".square").css({width: + medida + "px", height: + medida + "px"})
              .mouseenter(function(){
                $(this).addClass("square-hover");
                ($(this).css("opacity") <= 0.9) ? $(this).css("opacity", "+=0.1") : $(this).css("opacity", "1");
              });




/*
$(".reset").click(function(){
  $("input").fadeToggle(500);
});


$("form").submit(function() {
    var input = $("input").val();
    console.log(input);
  });

var pete = function() {
    $(".sketch").fadeTo(2000, 0.6, function(){
      $(".sketch").fadeTo(4000, 1);
      return pete();
    });
};
pete();
*/



});
