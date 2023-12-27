
// Get the carousel DOM element
var carousel = document.getElementById("carousel");

// Enable carousel auto slide
// $('.carousel').carousel({
//   interval: 3000
// })

document.addEventListener("DOMContentLoaded", function () {
    // Start carousel autoplay
    $(".carousel").carousel({
        interval: 3000 // Set the interval (in milliseconds) for automatic sliding
    });
});

// Start auto slide when document ready  
$(document).ready(function(){
  $('.carousel').carousel('cycle'); 
});

function navigateToPlace(placeUrl) {
    // Redirect to the specified place page
    window.location.href = placeUrl;
}

$(function () {
    $('.carousel').carousel()
  })