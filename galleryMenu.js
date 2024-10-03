////////////////////////////////////////////////////////////////////////
////////Our Gallery section
////////////////////////////////////////////////////////////////////////
const galleryMenu = [
  {
    id: 1,
    category: 'world',
    img: './img/gallery-1.jpg',
    text: 'WORLD TOUR'
  },
  {
    id: 2,
    category: 'sport',
    img: './img/gallery-2.jpg',
    text: 'SPORT TOUR'
  },
  {
    id: 3,
    category: 'summer',
    img: './img/gallery-3.jpg',
    text: 'SUMMER TOUR'
  },
  {
    id: 4,
    category: 'ocean',
    img: './img/gallery-4.jpg',
    text: 'OCEAN TOUR'
  },
  {
    id: 5,
    category: 'world',
    img: './img/gallery-5.jpg',
    text: 'WORLD TOUR'
  },
  {
    id: 6,
    category: 'ocean',
    img: './img/gallery-6.jpg',
    text: 'OCEAN TOUR'
  },
  {
    id: 7,
    category: 'summer',
    img: './img/gallery-7.jpg',
    text: 'SUMMER TOUR'
  },
  {
    id: 8,
    category: 'sport',
    img: './img/gallery-8.jpg',
    text: 'SPORT TOUR'
  },
  {
    id: 9,
    category: 'world',
    img: './img/gallery-9.jpg',
    text: 'WORLD TOUR'
  },
  {
    id: 10,
    category: 'ocean',
    img: './img/gallery-10.jpg',
    text: 'SUMMER TOUR'
  }
];
const gallerySection = document.querySelector('.gallery-section');
const galleryBtnContainer = document.querySelector('.gallery-btns-container');
window.addEventListener('DOMContentLoaded', function () {

  displayGalleryMenu(galleryMenu);

  const galleryBtns = document.querySelectorAll('.gallery-btn');
  galleryBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const galleryId = e.target.dataset.id;

      const galleryCategory = galleryMenu.filter(function (item) {
        if (item.category === galleryId) {
          return item;
        }
      });

      if (galleryId === 'all') {
        return displayGalleryMenu(galleryMenu);
      } else {
        return displayGalleryMenu(galleryCategory);
      }
    });
  });

});
function displayGalleryMenu(displayMenu) {
  let displayGallery = displayMenu.map(function (gallery) {
    return `
    <article class="gallery-imgs">
        <img src="${gallery.img}" alt="" class="gallery-image">
        <div class="gallery-text">
            <i class="fa-solid fa-plus"></i>
            <h3 style="color: white; font-size: 20px; margin-bottom: 10px;">${gallery.text}</h3>
            <a href="#" style="text-decoration: none; color: white;" class="f-link">View All Place <i class="fas fa-arrow-right"></i></a>
        </div>
    </article>
  `;
  });
  displayGallery = displayGallery.join('');
  gallerySection.innerHTML = displayGallery;
}
galleryBtnContainer.addEventListener('click', function (e) {
  const galleryBtn = document.querySelectorAll('.gallery-btn');
  const galleryActive = e.target.dataset.id;

  if (galleryActive) {
    galleryBtn.forEach(function (item) {
      item.classList.remove('gallery-active');
      e.target.classList.add('gallery-active');

    });
  }
});


////////////////////////////////////////////////////////////////////////
/////////////////////////the testimonial section
////////////////////////////////////////////////////////////////////////


const nextTestimonyBtn = document.querySelector('.b-nextBtn')
const prevTestimonyBtn = document.querySelector('.b-prevBtn')
const testimonials = document.querySelectorAll('.testimonial')

testimonials.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`
})

let t = 0

nextTestimonyBtn.addEventListener('click', function() {
  t++
  slider()
})

prevTestimonyBtn.addEventListener('click', function() {
  t--
  slider()
})

function slider() {
  if(t === testimonials.length) {
    t = 0
  } 
  if(t < 0) {
    t = testimonials.length - 1
  }

  testimonials.forEach(function (slide) {
    slide.style.transform = `translateX(-${t * 100}%)`
  })
}

const date = document.querySelector('.mydate')
date.textContent = new Date().getFullYear()
