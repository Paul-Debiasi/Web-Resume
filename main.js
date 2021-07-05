const slides = document.querySelectorAll('.slide');
const press = document.querySelectorAll('start-stop')
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;
let stopInterval;


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
    nextSlide();
})

prev.addEventListener('click', e => {
    prevSlide();
})


 if (auto) {
    slideInterval =setInterval(nextSlide,intervalTime);
 } 

