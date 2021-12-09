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

