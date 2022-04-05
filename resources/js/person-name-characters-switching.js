const FADING_TIME_INTERVAL_VALUE = 4000;
const TIMEOUT_VALUE = 8000;

$(function () {
  count = 0;
  nameArray = ["Raman Sharma", "रमन शर्मा"];
  setInterval(function () {
    count++;
    $("#name").fadeOut(FADING_TIME_INTERVAL_VALUE, function () {
      $(this)
        .text(nameArray[count % nameArray.length])
        .fadeIn(FADING_TIME_INTERVAL_VALUE);
    });
  }, TIMEOUT_VALUE);
});
