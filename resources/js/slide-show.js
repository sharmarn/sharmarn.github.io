var slideIndex = 1;
var timer;
var slideshowContainer;
const TIME_INTERVAL = 20000;

window.addEventListener("load", function () {
  showSlides(slideIndex);
  timer = setInterval(function () {
    plusSlides(1);
  }, TIME_INTERVAL);
});

function plusSlides(n) {
  clearInterval(timer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }

  if (n === -1) {
    timer = setInterval(function () {
      plusSlides(n + 2);
    }, TIME_INTERVAL);
  } else {
    timer = setInterval(function () {
      plusSlides(n + 1);
    }, TIME_INTERVAL);
  }
}

function currentSlide(n) {
  clearInterval(timer);
  timer = setInterval(function () {
    plusSlides(n + 1);
  }, TIME_INTERVAL);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  var texts = document.getElementsByClassName("text-to-slide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    texts[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  texts[slideIndex - 1].style.display = "block";
}
