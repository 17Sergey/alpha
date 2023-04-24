$(document).ready(function () {

  // Fields slider

  $(".fields__slider").slick({
    arrows: true,
    slidesToShow: 1,
  });


  // Instructors slider
  
  $(".instructors__slider").slick({
    arrows: true,
    slidesToShow: 1,
  });

  // On hover
  $(".instructor img").mouseenter(
    function () {
      $(".instructor-hover__message").fadeIn(400);
    }
  )

  // End of hover
  $(".instructor img").mouseleave(
    function () {
      $(".instructor-hover__message").fadeOut(400);
    }
  )


});