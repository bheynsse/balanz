"use strict";

// Toggle the navigation (expand/collapse)
function myNavToggle() {
	// Show or hide the nav items on small screens
    var x = document.getElementById("hiddenNav");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
	// Toggle the menu icon (bars or close)
    var y = document.getElementById("bar");
    if (y.className.indexOf("fa-bars") == -1) {
    	y.className = y.className.replace ("fa-close","fa-bars");
    } else {
    	y.className = y.className.replace ("fa-bars","fa-close");
    }
}

// Go to top of page button
/*
// Put this code in the html
//Get the button:
var myToTopButton = document.getElementById("btntop");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
*/

// When the user scrolls down 750px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
    myToTopButton.style.display = "block";
  } else {
    myToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function buttonTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Image slider code
var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("mySlideIndex");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
//  for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-lime", "");
//  }
  x[slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " w3-lime";
}


// change image every 3 seconds
function autoAdvanceSlides(){
  showDivs(slideIndex);
  slideIndex++;
  setTimeout(autoAdvanceSlides, 3000);
}

// Google Maps (developers.google.com)
function initMap() {
        var myCenter = {lat: 50.847095, lng: 3.452851};

        var map = new google.maps.Map(document.getElementById('googleMap'), {
          zoom: 14,
          center: myCenter
        });

        var marker = new google.maps.Marker({
          position: myCenter,
          map: map,
          title: 'Balanz'
        });

        // Populate and open info window on marker click
        var contentString = '<div>'+
            '<p><a href="https://www.google.be/maps/dir//'+
            'Balanz,+Vichtsesteenweg+65,+8570+Anzegem/@50.8465354,3.4544965,17z/"'+
            'target="_blank">Navigeer</a></p>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

}
