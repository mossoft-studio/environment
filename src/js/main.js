import './libs/locomotive-scroll.min.js'
import './_functions.js';
import './_components.js';
import { disableScroll } from './functions/disable-scroll.js';
import { enableScroll } from './functions/enable-scroll.js';
import { getHeaderHeight } from './functions/header-height.js';

import AOS from 'aos';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// Инициализация слайдера
Swiper.use([Navigation])

const customSlider = new Swiper('.custom-slider', {
  slidesPerView: 1.57,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 8
    },
    720: {
      spaceBetween: 40
    }
  }
});


getHeaderHeight();

(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    console.log(123);


    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      enableScroll();
    });
  });
})();

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    buttons.forEach(btn => btn.classList.remove('active'));

    this.classList.add('active');
  });
});


// Инициализация Locomotive Scroll
const locomotiveScroll = new LocomotiveScroll();

// Прокрутка к блоку по нажатию на кнопку
const scrollContainer = document.querySelector('[data-scroll-container]');

if (scrollContainer) {
  // Прокрутка к блоку по нажатию на кнопку
  const scrollButton = document.querySelector('.hero__bottom');

  if (scrollButton) {
    scrollButton.addEventListener('click', function () {
      // Скролл до следующей секции без указания easing
      locomotiveScroll.scrollTo('.desc', {
        offset: -500, // Смещение (при необходимости)
        duration: 3 // Длительность скролла в миллисекундах
      });
    });
  }
}

AOS.init();

document.querySelectorAll('.animate-on-load').forEach(function (element) {
  element.classList.add('aos-animate');
});

document.addEventListener("scroll", function() {
  const sectionHeaders = document.querySelectorAll('.section__header');

  sectionHeaders.forEach((sectionHeader) => {
    if (sectionHeader.getBoundingClientRect().top <= 0) {
      sectionHeader.classList.add('fixed');
    } else {
      sectionHeader.classList.remove('fixed');
    }
  });
});

// const scrollButton = document.querySelector('.hero__bottom');

// if (scrollButton) {
//   const scrollingBlock = document.querySelector('.hero');

//   scrollButton.addEventListener('click', function () {
//     scroll.scrollTo(scrollingBlock.scrollHeight);
//   });
// }

// import './libs/bvi.min.js'

// new isvek.Bvi({
//   fontSize: 24, // Размер шрифта
//   theme: 'black' // Цветовая тема сайта
// });


