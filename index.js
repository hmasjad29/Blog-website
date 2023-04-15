//for blog filter

$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".blog-box").show("1000");
        } else {
            $(".blog-box")
            .not("." + value)
            .hide("1000");
            $(".blog-box")
            .filter("." + value)
            .show("1000");
        }
    });
    //activating btn of filter
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

