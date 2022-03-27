$(function () {
  count = 0;
  nameArray = ["Raman Sharma", "रमन शर्मा"];
  setInterval(function () {
    count++;
    $("#name").fadeOut(4000, function () {
      $(this)
        .text(nameArray[count % nameArray.length])
        .fadeIn(4000);
    });
  }, 8000);
});
