$("#weather").click(function(){
    $("#myWeather").slideToggle("slow");
  
    if ($("#myWeather").is(':visible')) {
       $("html, body").animate({scrollTop: $("#myWeather").offset().top});
    }
  });