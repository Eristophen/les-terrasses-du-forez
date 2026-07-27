let slideIndex = 1;
showSlides(slideIndex);

// Fonction pour faire défiler les slides automatiquement
function autoPlay() {
  showSlides(slideIndex += 1);
}
setInterval(autoPlay, 5000); // Change de slide toutes les 5000 millisecondes (5 secondes)

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}