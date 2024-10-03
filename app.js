
///////////////////////////////////////////////////
//the nav links
//////////////////////////////////////////////////

const navLinks = document.querySelector('.nav-links')
const toggleBtn = document.querySelector('.nav-toggle-btn')
const links = document.querySelector('.links')
const pagesBtn = document.querySelector('.pages')
const pagesLinks = document.querySelector('.pages-div')

toggleBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show-nav-links')

    // const navLinksHeight = navLinks.getBoundingClientRect().height
    // const linksHeight = links.getBoundingClientRect().height
    // if(navLinksHeight === 0) {
    //     navLinks.style.height = `${linksHeight}px` 
    // } else {
    //     navLinks.style.height = 0;
    // }

})

pagesBtn.addEventListener('click', function() {
    pagesLinks.classList.toggle('show-pages-div')
})



///////////////////////////////////////////////////////////////////////
// the slideshow
//////////////////////////////////////////////////////////////////////

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}



///////////////////////////////////////////////////////
////////////////// The destination section
///////////////////////////////////////////////////////

const imageMenu = [
  {
    id: 1,
    destination: 'usa',
    img: './img/destination-1.jpg',
  },
  {
    id: 2,
    destination: 'canada',
    img: './img/destination-2.jpg',
  },{
    id: 3,
    destination: 'europe',
    img: './img/destination-3.jpg',
  },{
    id: 4,
    destination: 'china',
    img: './img/destination-4.jpg',
  },{
    id: 5,
    destination: 'singapore',
    img: './img/destination-5.jpg',
  },{
    id: 6,
    destination: 'usa',
    img: './img/destination-6.jpg',
  },{
    id: 7,
    destination: 'canada',
    img: './img/destination-7.jpg',
  },{
    id: 8,
    destination: 'europe',
    img: './img/destination-8.jpg',
  },{
    id: 9,
    destination: 'china',
    img: './img/destination-9.jpg',
  },{
    id: 10,
    destination: 'singapore',
    img: './img/destination-1.jpg',
  },

]

const btnContainer = document.querySelector('.btn-container')
const sectionCenter = document.querySelector('.imgs-container')

window.addEventListener('DOMContentLoaded', function() {

  displayAllImages(imageMenu)
  

  const filterBtns = document.querySelectorAll('.filter-btn')
  filterBtns.forEach( function(btn) {
    btn.addEventListener('click', function(e) {
      const destination = e.target.dataset.id

      const filteredDestination = imageMenu.filter(function(filteredD) {
        if (filteredD.destination === destination) {
          return filteredD
        }
      })
      if(destination === 'all') {
        return displayAllImages(imageMenu)
      } else {
        return displayAllImages(filteredDestination)
      }
    })
  })
})

function displayAllImages(imagesMenu) {
  let displayImages = imagesMenu.map(function(image) {

    return `<img src="${image.img}" alt="" class="photo">`
  })
  displayImages = displayImages.join('\n')
  sectionCenter.innerHTML = displayImages
}

btnContainer.addEventListener('click', function(e) {
  const filterBtns = document.querySelectorAll('.filter-btn')
  // console.log(e.target.dataset.id)
  const button = e.target.dataset.id

  if(button) {
      filterBtns.forEach(function(btns) {
      btns.classList.remove('active-button')
      e.target.classList.add('active-button')
    })
  }
})


///////////////////////////////////////////////////////
////////////////// The explore tour section
////////////////////////////////////////////////////////////////

const eContents = document.querySelectorAll('.e-content')
const eBtns = document.querySelectorAll('.explore-btn')
const eContainer = document.querySelector('.e-container')

eContainer.addEventListener('click', function(e) {
  const id = e.target.dataset.id
  if(id) {
    eBtns.forEach(function(btn) {
      btn.classList.remove('active-one')
      e.target.classList.add('active-one')
    })

    eContents.forEach(function(content) {
      content.classList.remove('active-tab')
    })

    const item = document.getElementById(id)
    item.classList.add('active-tab')
  }
})



////////////////////////////////////////////////////////////////////////////
const theNextBtn = document.querySelector('.the-nextBtn')
const thePrevBtn = document.querySelector('.the-prevBtn')
const slideImages = document.querySelectorAll('.slide-img')

slideImages.forEach(function(slide, index) {
  slide.style.left = `${index * 100}%`
})

let counter = 0

theNextBtn.addEventListener('click', function() {
  counter++
  carousel()
})

thePrevBtn.addEventListener('click', function() {
  counter--
  carousel()
})

function carousel() {

  if(counter === slideImages.length) {
    counter = 0
  } 
  if(counter < 0) {
    counter = slideImages.length - 1
  }

  slideImages.forEach(function(slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}



////////////////////////////////////////////////////////////////////
//////the packages section
////////////////////////////////////////////////////////////////////

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


