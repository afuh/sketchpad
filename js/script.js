
var userInput = 32;

$(document).ready(function(){
  canvas();
  paint();
  $("#blackWhite").hide();
});

//populate the Canvas
var canvas = function() {
  $("#sketch").html("<div id=\"canvas\"></div>");

  for (var i = 0; i < userInput*userInput; i++) {
    $("#canvas").prepend("<div class=\"square\"></div>");
  }
   $(".square").css({width: + 960/userInput + "px", height: + 960/userInput + "px"});
};

// Painting & opacity
var paint = function() {
  $(".square").mouseenter(function(){
              $(this).addClass("square-hover");
              $(this).css("opacity") <= 0.9 ? $(this).css("opacity", "+=0.1") : $(this).css("opacity", "1");
              }); 
};

//change the amount of squares
var userCanvas = function(){
  if (+$("#rowsColumns").val() <= 100 && +$("#rowsColumns").val() > 0) {
    userInput = $("#rowsColumns").val();
    $("#canvas").remove();
    canvas();
    paint();
  }
  else {
    console.log("nop");
    //texto que diga que no se puede
  }
};

//Color
var rainbow = function() {
  $("#rainbow").hide();
  $("#blackWhite").show();

  $(".square").mouseenter(function(){
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    $(this).css("background", hue);
  });
};

//Black and White
var blackWhite = function() {
  $("#blackWhite").hide();
  $("#rainbow").show();

  $(".square").mouseenter(function(){
    $(this).css("background", "black");
  });
};






/*
var pete = function() {
    $("#sketch").fadeTo(2000, 0.6, function(){
      $("#sketch").fadeTo(4000, 1);
      return pete();
    });
};
pete();
*/
