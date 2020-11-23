/* function myAddress() {
    var x = document.getElementById("AddressBook");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } */

  $( ".tog-5" ).click(function() {
    $( "#AddressBook" ).toggle( "highlight", 800 );
    });