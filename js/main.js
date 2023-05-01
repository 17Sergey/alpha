$(document).ready(function () {

    const YELLOW = "#FBAF39";

    const enableScroll = () => {
        $("body").css("overflow", "auto");
    };
    const disableScroll = () => {
        $("body").css("overflow", "hidden");
    }

    /* Order form */
    $(".order__btn").click(function (event) {

        // Correct length
        let numberLength = 13;

        // Values
        let name = document.getElementById("order-name").value;
        let number = document.getElementById("order-number").value;

        let allowSending = false;

        // Validation
        let hasPlusSign = number.match(/\+/);
        let hasCyrillicLetters = number.match(/[а-яА-Я]+/);
        let hasLatinLetters = number.match(/[a-zA-Z]+/);
        let hasOtherSigns = number.match(/[-()!$%^&*_|~=`{}\[\]:";'<>?,.\/]/);

        // Number validation
        if (!hasPlusSign || hasCyrillicLetters || hasLatinLetters || hasOtherSigns || number.length !== numberLength) {
            $(".order__number-warning").css("display", "inline");

            // Media query for CSS styles
            if ($(window).width() < 700) $(".order__btn").css("margin-top", "40px");

            allowSending = false;
        }
        else {
            $(".order__number-warning").css("display", "none");
            // Media query for CSS styles
            if ($(window).width() < 700) $(".order__btn").css("margin-top", "10px");

            allowSending = true;
        };

        // Name validation
        if (name.length === 0) {
            // Warning outline
            $("#order-name").css("outline", `3px solid ${YELLOW}`);

            allowSending = false;
        }
        else {
            $("#order-name").css("outline", `none`);
        }

        // Final validation
        if (allowSending) {
            $(".order__success-modal").fadeIn();
            $(".order__success-modal").css("display", "flex");

            disableScroll();

            // Hide up-arrow
            $(".up-arrow").css("display", "none");

            // Resetting input values
            document.getElementById("order-name").value = "";
            document.getElementById("order-number").value = "";

            // Check if Enter pressed to close modal
            $(document).on('keypress', function (event) {
                if (event.keyCode == 13) {
                    $(".order__success-modal").fadeOut();
                    enableScroll();

                    // Show up-arrow
                    $(".up-arrow").css("display", "grid");

                    // Prevent validation
                    event.preventDefault();

                }
            })

        }

        event.preventDefault();
    })

    $(".order__success-modal").click(function (event) {
        if (event.target.className === "order__success-modal") {
            $(this).fadeOut();
            enableScroll();

            // Show up-arrow
            $(".up-arrow").css("display", "grid");
        }
    })

    $(".order__success-close").click(function () {
        $(".order__success-modal").fadeOut();
        enableScroll();

        // Show up-arrow
        $(".up-arrow").css("display", "grid");
    })

    /* End of order form */
})