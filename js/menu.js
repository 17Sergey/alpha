$(document).ready(function () {


    // Flying bullet
    $(".logo").mouseover(function () {

        let $bullet = $(".logo-bullet");

        // Animation starts
        $bullet.fadeIn();
        $bullet.animate({ left: "-40px" }, 300);

        // After animation
        $bullet.fadeOut(500);
        $bullet.css("left", "20px");
    })


    $(".header__burger").click(
        function () {
            $(".header__menu").slideToggle();
            $(".header__menu").css("display", "flex");
        }
    )
});