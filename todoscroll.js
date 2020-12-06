$("#todo").click(function(){
    $("#myTodo").slideToggle("slow");
  
    if ($("#myTodo").is(':visible')) {
       $("html, body").animate({scrollTop: $("#myTodo").offset().top});
    }
  });