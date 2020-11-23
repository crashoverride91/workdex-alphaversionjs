/* function myCalculator() {
    var x = document.getElementById("CalculatorJS");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } */


  $( ".tog-2" ).click(function() {
    $( "#CalculatorJS" ).toggle( "highlight", 800 );
    });