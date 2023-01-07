document.write('
<nav class="w3-top w3-bar w3-white w3-text-grey w3-border-bottom w3-border-lime">
  <!-- Icons not wider than max-width site content on wide screen -->
  <div style="max-width:950px;margin:0 auto;">
    <!-- Always show home icon -->
    <a href="balanz.html" class="w3-bar-item w3-button w3-hover-white">
      <img src="logo.png" class="w3-image w3-hover-opacity" style="height:100%;max-height:22px;" alt="Balanz"></a>

    <!-- Menu bar icon to show/hide navbar -->
      <a href="javascript:void(0);" onclick="myNavToggle()"
        class="w3-bar-item w3-button w3-large w3-white w3-text-grey w3-right">
      <i id="bar" class="fa fa-bars"></i></a>

    <!-- Social media icons (sorted right to left) -->
    <a class="w3-bar-item w3-button w3-large w3-right"
      href="https://www.linkedin.com/in/anneliesvandewalle/" target="_blank"><i class="fa fa-linkedin-square"></i></a>
    <a class="w3-bar-item w3-button w3-large w3-right"
      href="https://instagram.com/balanz.be" target="_blank"><i class="fa fa-instagram"></i></a>
    <a class="w3-bar-item w3-button w3-large w3-right"
      href="https://www.facebook.com/balanz.be/" target="_blank"><i class="fa fa-facebook-square"></i></a>
  </div>

  <!-- Nav items default hidden (show/hide on click) -->
  <div id="hiddenNav" class="w3-hide w3-center w3-bar-block w3-border-bottom w3-border-lime w3-text-grey">
      <a class="w3-bar-item w3-button w3-border-bottom w3-border-light-grey" href="about.html"
        onclick="myNavToggle()">Over ons</a>
      <a class="w3-bar-item w3-button w3-border-bottom w3-border-light-grey" href="patient.html"
        onclick="myNavToggle()">Kinesitherapie &amp; Revalidatie</a>
      <a class="w3-bar-item w3-button w3-border-bottom w3-border-light-grey" href="sporter.html"
        onclick="myNavToggle()">Sport &amp; Beweging</a>
      <a class="w3-bar-item w3-button w3-border-bottom w3-border-light-grey" href="lifestyle.html"
        onclick="myNavToggle()">Lifestyle</a>
      <a class="w3-bar-item w3-button w3-border-bottom w3-border-light-grey" href="tarieven.html"
        onclick="myNavToggle()">Tarieven</a>
      <a class="w3-bar-item w3-button w3-border-bottom w3-border-light-grey" href="balanz.html#references"
        onclick="myNavToggle()">Referenties</a>
      <a class="w3-bar-item w3-button w3-border-bottom w3-border-light-grey" href="balanz.html#contact"
        onclick="myNavToggle()">Contact</a>
      <a class="w3-bar-item w3-button w3-border-bottom w3-border-light-grey" 
        href="https://agenda.crossuite.com/Balanz/l/n5r4v5z5j454t2748494/o/54y2a494x253p2649494b44354q284c49413r24474y2z253v2u203x244" target="_blank"
        onclick="myNavToggle()"><i class="fa fa-calendar"></i> Online afspraak maken</a>
	    <div class="w3-bar-item w3-right">
        <a class="w3-button" href="https://www.facebook.com/balanz.be/" target="_blank"
          onclick="myNavToggle()"><i class="fa fa-facebook-square"></i></a>
        <a class="w3-button" href="https://instagram.com/balanz.be" target="_blank"
          onclick="myNavToggle()"><i class="fa fa-instagram"></i></a>
		    <a class="w3-button" href="https://www.linkedin.com/in/anneliesvandewalle/" target="_blank"
          onclick="myNavToggle()"><i class="fa fa-linkedin-square"></i></a>
      </div>
  </div>
</nav>
<!-- Add some vertical spacing to avoid hiding start page content under navbar at page load -->
<br>
');
