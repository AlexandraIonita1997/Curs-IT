var video = document.getElementById("clipulMeu");
var btn = document.getElementById("butonulMeu");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pauză";
  } else {
    video.pause();
    btn.innerHTML = "Redează";
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("desene");
  let dots = document.getElementsByClassName("punct");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}
