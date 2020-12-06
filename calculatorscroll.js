$("#calcur").click(function(){
    $("#CalculatorJS").slideToggle("slow");
  
    if ($("#CalculatorJS").is(':visible')) {
       $("html, body").animate({scrollTop: $("#CalculatorJS").offset().top});
    }
  });