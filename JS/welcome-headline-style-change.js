var $welcomeText = $("#welcome-text span");
var $welcomeContext = $(".welcome-section p:first")

var timeoutValue = "4000";

$(function () {
    setTimeout((function () {
        $welcomeText.animate({
            width: '250px'
        });
        $welcomeContext.animate({
            marginTop: '30px'
        });
    }), timeoutValue);
}
);

$(function () {
    setTimeout((function () {
        $welcomeText.css({ "background-color": "black", "color": "white" })
    }), timeoutValue);
}
);