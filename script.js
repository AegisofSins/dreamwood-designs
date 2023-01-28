
//Smooth Scrolling. Didn't want to use old ass jQuery but ya know.
$(".link2").on("click", function (e) { 
    e.preventDefault(); 
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
  });
