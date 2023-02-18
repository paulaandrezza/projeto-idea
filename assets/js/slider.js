var slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const isMobile = window.matchMedia("(max-width: 768px)").matches;

showSlides(slideIndex);

function plusSlides(n) {
  slideIndex += n;

  if (!isMobile) {
    if (slideIndex < 0) { slideIndex = slides.length-5; } 
    if (slideIndex > slides.length-5) { slideIndex = 0; }
  } else {
    if (slideIndex < 0) { slideIndex = slides.length-1 } 
    if (slideIndex > slides.length-1) { slideIndex = 0 }
  }
  
  showSlides(slideIndex);
}

function showSlides(n) {
  for (let i = 0 ; i < slides.length ; i++) {
    slides[i].style.display = "none";
  }
  
  let numSlidesToShow = isMobile ? 1 : 5;

  for (let i = slideIndex ; i < slideIndex + numSlidesToShow ; i ++) {
    slides[i].style.display = "block";
  }
}