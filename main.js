const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');

    // Remove current class
    current.classList.remove('current');

    // Check for the next slide
    if(current.nextElementSibling){

        // Add current to next sibling
        current.nextElementSibling.classList.add('current');

    } else {

        // Add current to start
        slides[0].classList.add('current')
    }

    setTimeout(()=> current.classList.remove('current'))

}

const prevSlide = () => {
    const current = document.querySelector('.current');

    // Remove current class
    current.classList.remove('current');

    // Check for the prev slide
    if(current.previousElementSibling){

        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');

    } else {

        // Add current to last
        slides[slides.length -1].classList.add('current')
    }

    setTimeout(()=> current.classList.remove('current'))

}

// Button events

next.addEventListener('click', e => {
    nextSlide(e);
})

prev.addEventListener('click', e => {
    prevSlide(e);
})