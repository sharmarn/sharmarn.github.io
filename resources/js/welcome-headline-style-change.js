var $welcomeText = $("#welcome-text span");
var $welcomeContext = $(".welcome-section p:first");

const WELCOME_TEXT_TIMEOUT_VALUE = 2000;

var executeWelcomeHeadlineStyleChange = () => {
  var hasRun = localStorage.getItem("hasRun");
  if (hasRun != "1") {
    setTimeout(function () {
      $welcomeText.animate({
        width: "250px",
      });
      $welcomeContext.animate({
        marginTop: "20px",
      });
      $welcomeText.css({
        background:
          "-webkit-linear-gradient(45deg, yellow, lightblue, lightgreen)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
      });
    }, WELCOME_TEXT_TIMEOUT_VALUE);
    localStorage.setItem("hasRun", "1");
  } else {
    $welcomeText.css({
      background:
        "-webkit-linear-gradient(45deg, yellow, lightblue, lightgreen)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      width: "250px",
    });
    $welcomeContext.css({
      marginTop: "20px",
    });
  }
};

executeWelcomeHeadlineStyleChange();
