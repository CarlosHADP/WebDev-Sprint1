let slideIndex = 1;
Slides(slideIndex);

function plusSlides(n) {
    Slides(slideIndex += n);
}

function currentSlide(n) {
    Slides(slideIndex = n);
}

function Slides(n) {
    let i;
    let slides = document.getElementsByClassName("Slides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}