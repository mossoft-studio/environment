import './libs/locomotive-scroll.min.js'
import './_components.js';

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
// const scrollButton = document.querySelector('.hero__bottom');

// if (scrollButton) {
//   const scrollingBlock = document.querySelector('.hero');

//   scrollButton.addEventListener('click', function () {
//     scroll.scrollTo(scrollingBlock.scrollHeight);
//   });
// }
