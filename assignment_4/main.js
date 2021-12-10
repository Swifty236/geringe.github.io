var oldSrc = 'button.png';
var newSrc = 'explosion.jpeg';


$(document).ready(function() {
  
  
  $("#button").click(function() {
    $("body").css("background-color", "red");
    $('img[src="' + oldSrc + '"]').attr('src', newSrc);
    $("p").replaceWith("<p>What'd you expect?</p>")
    
  });
  
});