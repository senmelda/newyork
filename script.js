let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const slider = document.querySelector('.slider');
    const newTransformValue = -currentSlide * 100;
    slider.style.transform = `translateX(${newTransformValue}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 10000);

let currentCardSlide = 0;

function moveCardSlide(direction) {
    const cardSlides = document.querySelectorAll('.card-slide');
    const totalCardSlides = cardSlides.length;

    currentCardSlide = (currentCardSlide + direction + totalCardSlides) % totalCardSlides;

    const cardSlider = document.querySelector('.card-slider');
    const newCardTransformValue = -currentCardSlide * 100;
    cardSlider.style.transform = `translateX(${newCardTransformValue}%)`;
}

setInterval(() => {
    moveCardSlide(1);
}, 10000);

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.back-to-top').style.display = 'block';
    } else {
        document.querySelector('.back-to-top').style.display = 'none';
    }
}
