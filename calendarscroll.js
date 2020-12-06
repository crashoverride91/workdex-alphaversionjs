$("#calendar").click(function(){
    $("#myCalendar").slideToggle("slow");
  
    if ($("#myCalendar").is(':visible')) {
       $("html, body").animate({scrollTop: $("#myCalendar").offset().top});
    }
  });