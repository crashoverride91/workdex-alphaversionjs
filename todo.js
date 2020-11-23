/* function myFunction() {
    var x = document.getElementById("myTodo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } */

  $( ".tog-1" ).click(function() {
    $( "#myTodo" ).toggle( "highlight", 800 );
    });