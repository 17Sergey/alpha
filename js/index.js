$(document).ready(function () {

    const YELLOW = "#FBAF39";
    const SMOKE = "#F5F5F5";

    // Animated spots
    setTimeout(() => {
        $(".orange-spot").fadeIn(600);
    }, 200)
    setTimeout(() => {
        $(".blue-spot").fadeIn(600);
    }, 600)
    setTimeout(() => {
        $(".red-spot").fadeIn(600);
    }, 850)
    setTimeout(() => {
        $(".skyblue-spot").fadeIn(600);
    }, 1000)
    setTimeout(() => {
        $(".pink-spot").fadeIn(600);
    }, 1200)


    // Scenarios slider
    $('.scenarios__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });

    // Scenarios description

    const enableScroll = () => {
        $("body").css("overflow", "auto");
    };
    const disableScroll = () => {
        $("body").css("overflow", "hidden");
    }

    $(".scenario").click(function (event) {
        let selector = ".description__modal" + "[data-id='" + this.dataset.id + "']";
        $(selector).fadeIn();
        $(selector).css("display", "flex");

        disableScroll();

        // Hide up-arrow
        $(".up-arrow").css("display", "none");
    })
    $(".description__modal-content img").click(function () {
        $(".description__modal").fadeOut();
        enableScroll();

        // Show up-arrow
        $(".up-arrow").css("display", "grid");
    })
    $(".description__modal").click(function (event) {
        if (event.target.className === "description__modal") {
            // $(".description__modal").fadeOut();
            $(this).fadeOut();
            enableScroll();

            // Show up-arrow
            $(".up-arrow").css("display", "grid");
        }

    })

    // Points block
    const fillCurrentAndPreviousLines = function (id, COLOR) {
        let points = $(".point");
        for (let key in points) {
            if (key === "length") break;
            isNumberKey = Number(key) === 0 || Number(key);
            if (isNumberKey) {
                $("#" + points[key].id).find(".point__line").css("background-color", COLOR);
                if (points[key].id === id) {
                    return;
                }
            }
        }
    }
    // On hover
    $(".point").mouseenter(
        function (e) {
            fillCurrentAndPreviousLines(this.id, YELLOW);


            if (e.target === $(".point").last()[0]) { // $(".point").last()[0] = <div class="point"></div>

                // Cylinder animation
                $(this).find(".congrats-cylinder").fadeIn(300);
                $(this).find(".congrats-cylinder").animate(
                    {
                        right: "-20",
                    },
                    300
                );

                // Star animation
                $(this).find(".congrats-star").fadeIn(300);
                $(this).find(".congrats-star").animate(
                    {
                        top: "55"
                    },
                    300
                );

                // Square animation
                $(this).find(".congrats-square").fadeIn(300);
                $(this).find(".congrats-square").animate(
                    {
                        right: "-20",
                        top: "55"
                    },
                    300
                );

                // Circle animation
                $(this).find(".congrats-circle").fadeIn(300);
                $(this).find(".congrats-circle").animate(
                    {
                        right: "-40",
                        top: "60"
                    },
                    300
                );
            }
        }
    )

    // End of hover
    $(".point").mouseleave(
        function (e) {
            fillCurrentAndPreviousLines(this.id, SMOKE);

            // Cylinder animation
            $(this).find(".congrats-cylinder").fadeOut(300);
            $(this).find(".congrats-cylinder").animate(
                {
                    right: "0",
                },
                500
            );
            // Star animation
            $(this).find(".congrats-star").fadeOut(300);
            $(this).find(".congrats-star").animate(
                {
                    top: "65",
                },
                500
            );
            // Square animation
            $(this).find(".congrats-square").fadeOut(300);
            $(this).find(".congrats-square").animate(
                {
                    right: "-30",
                    top: "65"
                },
                500
            );
            // Circle animation
            $(this).find(".congrats-circle").fadeOut(300);
            $(this).find(".congrats-circle").animate(
                {
                    right: "-30",
                    top: "65"
                },
                500
            );
        }
    )


    // FAQ accordeon
    let downRotated = "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)";

    $(".question").click(function () {

        alert(1)

        if ($(this).children(".question__img").css("transform") === downRotated) {
            alert(2)
            // Set the opposite rotation
            rotation = "rotate(-90deg)";

            // Reset open answers
            $(".question").children(".question__answer").slideUp();
            $(".question").children(".question__img").css("transform", "rotate(90deg)")

            // Open clicked question answer
            $(this).children(".question__answer").slideDown();
        }
        else {
            alert(3);
            // Set the opposite rotation
            rotation = "rotate(90deg)";
            // Close clicked question answer
            $(this).children(".question__answer").slideUp();
        }
        $(this).children(".question__img").css("transform", rotation);

    })
});