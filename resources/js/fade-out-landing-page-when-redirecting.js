/* Fades out the whole page when clicking links */

$(".link").click(function (e) {
  e.preventDefault();
  newLocation = $(this).attr("href");
  $("body").fadeOut("slow", redirectToClickedPage);
});

function redirectToClickedPage() {
  window.location = newLocation;
}
