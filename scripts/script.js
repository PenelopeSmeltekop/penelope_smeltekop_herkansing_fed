// JavaScript Document
console.log("too good too go FED2425");

document.addEventListener('DOMContentLoaded', function() {
  var radios = document.getElementsByName("light/dark mode");
  var val = 
localStorage.getItem('light/dark mode'); // local storage value

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === val) {
            radios[i].checked = true; // marking the required radio as checked
            document.body.className = val; // apply the mode
        }

        radios[i].addEventListener('change', function() {
            localStorage.setItem('light/dark mode', this.value); // save the selected mode
            document.body.className = this.value; // apply the mode
        });
    }
});

function toggleMenu() {
  const menuLinks = document.getElementById("myLinks");
  menuLinks.classList.toggle("show");
}

const btn = document.getElementById('btn-trigger')
const picBtn = document.getElementById('parent-trigger')
const front = document.querySelector(".flip-image")
const back = document.querySelector(".text-container")

btn.addEventListener('click', ()=> {
  front.classList.toggle("rotate")
  back.classList.toggle("rotate")
})

picBtn.addEventListener('click', ()=> {
  front.classList.toggle("rotate")
  back.classList.toggle("rotate")
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
  }

  