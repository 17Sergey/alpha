$(document).ready(function () {
    $(".header__burger").click(
        function () {
            $(".header__menu").slideToggle();
            $(".header__menu").css("display", "flex");
        }
    )
});