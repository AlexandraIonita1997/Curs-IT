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
  let desene = document.getElementsByClassName("desene");
  let puncte = document.getElementsByClassName("punct");
  for (i = 0; i < desene.length; i++) {
    desene[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > desene.length) {
    slideIndex = 1;
  }
  for (i = 0; i < puncte.length; i++) {
    puncte[i].className = puncte[i].className.replace(" active", "");
  }
  desene[slideIndex - 1].style.display = "block";
  puncte[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}
