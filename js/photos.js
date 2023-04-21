$(document).ready(function () {

  $(".fields__slider").slick({
    arrows: true,
  });
  $(".instructors__slider").slick({
    arrows: true,
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