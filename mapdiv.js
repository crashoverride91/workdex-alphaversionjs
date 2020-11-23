/* function myWeatherFunction() {
    var x = document.getElementById("myWeather");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } */

  $( ".tog-3" ).click(function() {
    $( "#myWeather" ).toggle( "highlight", 800 );
    });