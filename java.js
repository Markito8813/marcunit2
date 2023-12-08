
let slideIndex = 1;
let slideInterval;

const slide = document.querySelector(".slide");
const button = document.querySelector(".button1");

slide.style.display = "none";



button.addEventListener("dblclick", () => {
  slide.style.display = "block";
});


function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex - 1].style.display = "flex";  
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex < 1) { slideIndex = 3; }
  if (slideIndex > 3) { slideIndex = 1; } 
  
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function startSlideshowDelayed() {
  slideIndex = 1;
  showSlides(); 
  slideInterval = setInterval(function() {
    plusSlides(1); 
  }, 3000);
}

document.getElementById('startSlideshowOnClick').addEventListener('click', startSlideshowDelayed);
window.onload = showSlides;
