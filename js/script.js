var typed = new Typed(".text", {
    strings: [""," Larry Daniels","  Developer", "  Designer"],
    typeSpeed: 120,
    backSpeed: 50,
    loop: true,
    smartBackspace: true // Default value
  });
// scroll
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar").css("background" , "#fff");
      $(".nav-link").css("color" , "#111111");
      $(".logo").css("color" , " rgb(28,28,28)");

	  }

	  else{
		  $(".navbar").css("background" , "transparent"); 
      $(".nav-link").css("color" , "#fff");
      $(".logo").css("color" , "#fff" );


	  }
  })
})
