'use strict';

document.body.classList.remove('no-js');

const pageHeader = document.querySelector('.page-header');
const toggleButton = pageHeader.querySelector('.page-header__toggle');
const login = pageHeader.querySelector('.page-header__login');

const modal = document.querySelector('.modal');
const loginModalClose = modal.querySelector('.modal__close');
const loginFormModal = modal.querySelector('.login-form');
const emailInputModal = loginFormModal.querySelector('[name="email"]');
const passwordInputModal = loginFormModal.querySelector('[name="password"]');

const filters = document.querySelector('.filters');
const filtersToggle = document.querySelector('.filters__toggle');
const filtersInner = document.querySelector('.filters__inner');
const filterFormClose = document.querySelector('.filter-form__close');

document.body.classList.remove('no-js');
pageHeader.classList.remove('page-header--opened');

// Local storage
let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    pageHeader.classList.toggle('page-header--opened');

    if (pageHeader.classList.contains('page-header--opened')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });
}

window.addEventListener('click', (evt) => {
  if (evt.target === modal) {
    closeLoginModal();
  }
  if (evt.target === filtersInner) {
    closeFilterFormModal();
  }
});

const modalEscKeydownHandler = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closeLoginModal();
    closeFilterFormModal();
  }
};

if (login) {
  login.addEventListener('click', (evt) => {
    evt.preventDefault();
    openLoginModal();
  });
}

if (loginFormModal) {
  loginFormModal.addEventListener('submit', (evt) => {
    if (!emailInputModal.value || !passwordInputModal.value) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('email', emailInputModal.value);
      }
    }
  });
}

if (loginModalClose) {
  loginModalClose.addEventListener('click', closeLoginModal);
}

function openLoginModal() {
  modal.classList.add('modal--show');
  document.body.style.overflow = 'hidden';

  if (storage) {
    emailInputModal.value = storage;
    passwordInputModal.focus();
  } else {
    emailInputModal.focus();
  }

  loginModalClose.addEventListener('click', closeLoginModal);
  document.addEventListener('keydown', modalEscKeydownHandler);
}

function closeLoginModal() {
  modal.classList.remove('modal--show');
  document.body.style.overflow = 'auto';
  document.removeEventListener('keydown', modalEscKeydownHandler);
}

// Filters

if (filtersToggle) {
  filtersToggle.addEventListener('click', openFilterFormModal);
}

if (filterFormClose) {
  filterFormClose.addEventListener('click', closeFilterFormModal);
}

function openFilterFormModal() {
  filters.classList.add('filters--show');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', modalEscKeydownHandler);
}

function closeFilterFormModal() {
  filters.classList.remove('filters--show');
  document.body.style.overflow = 'auto';
  document.removeEventListener('keydown', modalEscKeydownHandler);
}

    item.addEventListener('click', function() {
      if (this.classList.contains('accordion__item--opened')) {
        this.classList.remove('accordion__item--opened');
      } else {

// Accordion Filters
const accordionFilterFormItems = document.querySelectorAll('.filter-form .accordion__item');

if (accordionFilterFormItems) {
  accordionFilterFormItems.forEach((item) => {
    item.addEventListener('click', function() {
        this.classList.toggle('accordion__item--opened');
    });
  });
}
