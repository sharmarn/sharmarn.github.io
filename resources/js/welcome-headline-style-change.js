var $welcomeText = $("#welcome-text span");
var $welcomeContext = $(".welcome-section p:first");

const TIMEOUT_VALUE = 4000;

$(function () {
  setTimeout(function () {
    $welcomeText.animate({
      width: "250px",
    });
    $welcomeContext.animate({
      marginTop: "30px",
    });
  }, TIMEOUT_VALUE);
});

$(function () {
  setTimeout(function () {
    $welcomeText.css({ "background-color": "black", color: "white" });
  }, TIMEOUT_VALUE);
});
