var slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const isMobile = window.matchMedia("(max-width: 768px)").matches;

const numSlidesToShow = isMobile ? 1 : 5;

showSlides(slideIndex);

function plusSlides(n) {
  slideIndex += n;

  if (slideIndex < 0) { slideIndex = slides.length - numSlidesToShow; } 
  if (slideIndex > slides.length - numSlidesToShow) { slideIndex = 0; }
  
  showSlides(slideIndex);
}

function showSlides(n) {
  for (let i = 0 ; i < slides.length ; i++) {
    slides[i].style.display = "none";
  }

  for (let i = slideIndex ; i < slideIndex + numSlidesToShow ; i ++) {
    slides[i].style.display = "block";
  }
}