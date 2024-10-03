const pSlides = document.querySelectorAll('.p-slides')
const nBtn = document.querySelector('.p-nextBtn')
const pBtn = document.querySelector('.p-prevBtn')

pSlides.forEach(function(slides, indexes) {
  slides.style.left = `${indexes * 100}%`
})

let pslide = 0

nBtn.addEventListener('click', function() {
  pslide++
  sliders()
})

pBtn.addEventListener('click', function() {
  pslide--
  sliders()
})

function sliders() {

  if(pslide === pSlides.length) {
    pslide = 0
  } 
  if(pslide < 0) {
    pslide = pSlides.length - 1
  }

  pSlides.forEach(function(slides) {
    slides.style.transform = `translateX(-${pslide * 100}%)`
  })
}