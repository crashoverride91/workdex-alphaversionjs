/* function myTechFunction() {
    var x = document.getElementById("myCalendar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } */

  $( ".tog-4" ).click(function() {
    $( "#myCalendar" ).toggle( "highlight", 800 );
    });