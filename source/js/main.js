'use strict';

document.body.classList.remove('no-js');

const pageHeader = document.querySelector('.page-header');
const toggleButton = pageHeader.querySelector('.page-header__toggle');

if(toggleButton){
  toggleButton.addEventListener('click', () => {
    pageHeader.classList.toggle('page-header--opened');

    if (pageHeader.classList.contains('page-header--opened')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });
}

// Slider
// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
  },
  navigation: {
    nextEl: '.products__button--next',
    prevEl: '.products__button--prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});
swiper;

// Accordion
const accordionItems = document.querySelectorAll('.accordion__item');

if (accordionItems) {
  accordionItems.forEach((item) => {
    item.addEventListener('click', function() {
      if (this.classList.contains('accordion__item--opened')) {
        this.classList.remove('accordion__item--opened');
      } else {
        accordionItems.forEach((elem) => elem.classList.remove('accordion__item--opened'));
        this.classList.toggle('accordion__item--opened');
      }
    });
  });
}
