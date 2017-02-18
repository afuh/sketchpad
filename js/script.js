var userInput = 64,
    color;

$(document).ready(function(){
  canvas();
  paint();
  color = false;
});

//populate the canvas
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

//change the amount of pixels
var userCanvas = function(){
  if (+$("#inputBox").val() <= 100 && +$("#inputBox").val() > 1) {
    userInput = $("#inputBox").val();
    $("#canvas").remove();
    canvas();
    paint();
    if (color && +$("#shape").val() === 0) {
      rainbow(true);
      shape(true);
    }
    else if (color) {
      rainbow(true);
    }
    else if (+$("#shape").val() === 0) {
      shape(true);
    }
  }
  else {
    $("#nop").fadeTo(400, 1, function(){
      $(this).fadeTo(4000, 0);
    });
  }
};

// go button
$(function() {
  $("input").mousedown(function(){
      $("#go").fadeIn("fast");
  });
    $("#go").click(function(){
      $(this).fadeOut("fast");
    });
});

//Rainbow and B&W
var rainbow = function(b) {
  if (!color || b) {
    color = true;
    $("#rainbow").text("B&W");

    $(".square").mouseenter(function(){
      var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

      $(this).css("background", hue);
    });
  }
  else {
    color = false;
    $("#rainbow").text("Rainbow");

    $(".square").mouseenter(function(){
      $(this).css("background", "black");
    });
  }
};

//shape
var shape = function(b) {
  if (+$("#shape").val() == 1 || b) {
    $("#shape").val(0);
    $(".square").addClass("roundPixel").removeClass("squarePixel");
  }
  else {
    $("#shape").val(1);
    $(".square").addClass("squarePixel").removeClass("roundPixel");
  }
};

//reset canvas
var resetCanvas = function(){
  $("#canvas").remove();
  canvas();
  paint();
  if (color && +$("#shape").val() === 0) {
    rainbow(true);
    shape(true);
  }
  else if (color) {
    rainbow(true);
  }
  else if (+$("#shape").val() === 0) {
    shape(true);
  }
};
