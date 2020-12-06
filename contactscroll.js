$("#contact").click(function(){
    $("#AddressBook").slideToggle("slow");
  
    if ($("#AddressBook").is(':visible')) {
       $("html, body").animate({scrollTop: $("#AddressBook").offset().top});
    }
  });