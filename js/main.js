$(document).ready(function () {
    $(".order__btn").click(function (event) {

        // Correct length
        let numberLength = 13;

        // Values
        let name = $("#order-name").val();
        let number = $("#order-number").val();

        // Validation
        let hasPlusSign = number.match(/\+/);
        let hasCyrillicLetters = number.match(/[а-яА-Я]+/);
        let hasLatinLetters = number.match(/[a-zA-Z]+/);
        let hasOtherSigns = number.match(/[-()!$%^&*_|~=`{}\[\]:";'<>?,.\/]/);

        if (!hasPlusSign || hasCyrillicLetters || hasLatinLetters || hasOtherSigns || number.length !== numberLength) {
            $(".order__number-warning").css("display", "inline");

            // Media query for CSS styles
            if ($(window).width() < 700) $(".order__btn").css("margin-top", "40px");
        }
        else {
            $(".order__number-warning").css("display", "none");
            // Media query for CSS styles
            if ($(window).width() < 700) $(".order__btn").css("margin-top", "10px");
        };

        $(".order__success").fadeIn();
        $(".order__success-close").click(function () {
            $(".order__success").fadeOut();
        })

        // event.preventDefault();
    })
})