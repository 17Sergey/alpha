const YELLOW = "#FBAF39";
const SMOKE = "#F5F5F5";

const CURRENCY = "BYN";

let priceCriteries = {
    participantsAmount: "",
    placeType: "",
    day: "",
    ballsAmount: "",
}

let switchSelectedItem = function (items) {
    // Removing chose-style from other items
    for (let key in items) {
        if (key === "length") break;
        isNumberKey = Number(key) === 0 || Number(key);
        if (isNumberKey) {
            if (items[key] === this) continue;
            items[key].style.borderColor = SMOKE;
            items[key].style.color = SMOKE;
        }
    }
    this.style.borderColor = YELLOW;
    this.style.color = YELLOW;
}

const onenSpace = 15;
const closedSpace = 10;
const workday = 10;
const weekend = 15;
const hundredBallsPrice = 5;

let calculatePrice = () => {

    let allCriteriesAreChosen =
        priceCriteries.participantsAmount &&
        priceCriteries.placeType &&
        priceCriteries.day &&
        priceCriteries.ballsAmount;

    if (!allCriteriesAreChosen) return;

    let participants = priceCriteries.participantsAmount;
    let place = (priceCriteries.placeType === "Открытая") ? onenSpace : closedSpace;
    let day = (priceCriteries.day === "Будний") ? workday : weekend;
    let balls = (priceCriteries.ballsAmount / 100) * hundredBallsPrice;
    let price = (place + day + balls) * participants;

    $(".total-cost__value").text(price + " " + CURRENCY)
}

$(document).ready(function () {

    // Participants field
    $(".participants__field").focus(function () {
        $(".participants__field-warning").css("display", "none");
        $(".participants__field").css({
            "border-color": YELLOW,
            "color": YELLOW,
        });
    });
    $(".participants__field").focusout(function () {
        if (this.value === "") {
            $(".participants__field").css({
                "border-color": SMOKE,
                "color": SMOKE,
            });
        }
    });
    $(".participants__field").change(function () {
        $(".participants__field-warning").css("display", "none");
        if (isNaN(this.value) || Number(this.value) < 0) {
            this.value = "";
            $(".participants__field-warning").css("display", "inline");
            return;
        }
        priceCriteries.participantsAmount = this.value;
        calculatePrice();
    });

    // Place fields
    $(".place__item").click(function () {
        let items = $(".place__items").children();

        // Removing chose-style from other items
        for (let key in items) {
            if (key === "length") break;
            isNumberKey = Number(key) === 0 || Number(key);
            if (isNumberKey) {
                if (items[key] === this) continue;
                items[key].style.borderColor = SMOKE;
                items[key].style.color = SMOKE;
            }
        }
        this.style.borderColor = YELLOW;
        this.style.color = YELLOW;

        // Adding value into criteris object to calculate price
        let placeType = this.innerText;
        priceCriteries.placeType = placeType;
        calculatePrice();
    })

    // Day fields
    $(".day__item").click(function () {
        let items = $(".day__items").children();

        // Removing chose-style from other items
        for (let key in items) {
            if (key === "length") break;
            isNumberKey = Number(key) === 0 || Number(key);
            if (isNumberKey) {
                if (items[key] === this) continue;
                items[key].style.borderColor = SMOKE;
                items[key].style.color = SMOKE;
            }
        }
        this.style.borderColor = YELLOW;
        this.style.color = YELLOW;

        // Adding value into criteris object to calculate price
        let day = this.innerText;
        priceCriteries.day = day;
        calculatePrice();
    })

    // Balls fields
    $(".balls-amount__item").click(function () {
        let items = $(".balls-amount__items").children();

        // Removing chose-style from other items
        for (let key in items) {
            if (key === "length") break;
            isNumberKey = Number(key) === 0 || Number(key);
            if (isNumberKey) {
                if (items[key] === this) continue;
                items[key].style.borderColor = SMOKE;
                items[key].style.color = SMOKE;
            }
        }
        this.style.borderColor = YELLOW;
        this.style.color = YELLOW;

        // Adding value into criteris object to calculate price
        let ballsAmount = this.innerText;
        priceCriteries.ballsAmount = ballsAmount;
        calculatePrice();
    })
});