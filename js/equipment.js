$(document).ready(function () {

    $('.additional-equipment__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
    });

    // Interactive equipment block

    const $equipmentItems = document.querySelectorAll(".equipment__item");
    const $itemsOutlines = document.querySelectorAll(".equipment__item-outline");

    // Item outlines hover

    $itemsOutlines.forEach(el => {
        el.addEventListener("mouseenter", (e) => {
            el.style.cssText = `opacity: 1; fill:rgba(251, 175, 57, .5); stroke: rgb(251, 175, 57); stroke-width: 2px;`;
        });
    });

    $itemsOutlines.forEach(el => {
        el.addEventListener("mouseleave", (e) => {
            el.style.cssText = `opacity: 0;`;
        });
    });

    // Equipment items hover

    $equipmentItems.forEach(el => {
        el.addEventListener("mouseenter", (e) => {

            // console.log(el.children)
            const equipmentItemName = el.dataset.item;
            $itemsOutlines.forEach(el => {
                if (el.dataset.item === equipmentItemName) {
                    el.style.cssText = `opacity: 1; fill:rgba(251, 175, 57, .5); stroke: rgb(251, 175, 57); stroke-width: 2px;`;
                }
            });
        });
    });

    $equipmentItems.forEach(el => {
        el.addEventListener("mouseleave", (e) => {
            const equipmentItemName = el.dataset.item;

            $itemsOutlines.forEach(el => {
                if (el.dataset.item === equipmentItemName) {
                    el.style.cssText = `transition: all 1s ease; opacity: 0;`;
                }
            });
        });
    });


})