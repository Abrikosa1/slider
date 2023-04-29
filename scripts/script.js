'use strict';
const buttonNext = document.querySelector('.gallery__button-next');
const buttonPrev = document.querySelector('.gallery__button-prev');
const images = document.querySelectorAll('.gallery__images img');
const bullets = document.querySelectorAll('.gallery__bullet');
const bulletsBlock = document.querySelector('.gallery__bullets');

let index = 0;
let timer = 1;
let animation = 1;
let autoSlideTimer;

function moveSlide(n, dir) {
  const activeSlide = document.querySelector('.enabled');
  const activeBullet = document.querySelector('.active');
  let offset = 0;
  let opacityOffset = 0;

  const animDraw = () => {
    if (dir === 'right') {
      activeSlide.style.left = offset + 'px';
    } else if (dir === 'left') {
      activeSlide.style.right = offset + 'px';
    }
    offset += 5;
    activeSlide.style.opacity = 1 - opacityOffset;
    opacityOffset += 0.01;

    if (offset > 500) {
      clearTimeout(timer);
      activeSlide.style.opacity = 1;
      activeSlide.style.right = 'unset';
      activeSlide.style.left = 'unset';
      activeSlide.classList.remove('enabled');
      activeBullet.classList.remove('active');
      images[n].classList.add('enabled');
      bullets[n].classList.add('active');
      animation = 1;
    } else {
      timer = setTimeout(animDraw, 4);
    }
  };
  animDraw();
}

const showSlide = (n, dir) => {
  animation = 0;

  if (n < 0) {
    index = images.length - 1;
  } else if (n >= images.length) {
    index = 0;
  }

  moveSlide(index, dir);
};

const runTimeout = () =>
  setTimeout(function autoSlide() {
    if (animation === 1) {
      index++;
      showSlide(index, 'left');
    }
    autoSlideTimer = setTimeout(autoSlide, 5000);
  }, 5000);

const hanldeRightClick = () => {
  clearTimeout(autoSlideTimer);
  if (animation === 1) {
    showSlide((index += 1), 'left');
  }
  autoSlideTimer = runTimeout();
};

const hanldeLeftClick = () => {
  clearTimeout(autoSlideTimer);
  if (animation === 1) {
    showSlide((index -= 1), 'right');
  }
  autoSlideTimer = runTimeout();
};

buttonNext.addEventListener('click', hanldeRightClick);

buttonPrev.addEventListener('click', hanldeLeftClick);

bulletsBlock.addEventListener('click', (e) => {
  clearTimeout(autoSlideTimer);
  for (let i = 0; i < bullets.length + 1; i++) {
    if (
      e.target.classList.contains('gallery__bullet') &&
      e.target === bullets[i] &&
      !e.target.classList.contains('active') &&
      animation === 1
    ) {
      showSlide((index = i));
    }
  }
  autoSlideTimer = runTimeout();
});

document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'ArrowLeft':
      return hanldeLeftClick();
    case 'ArrowRight':
      return hanldeRightClick();
    default:
      return;
  }
});

autoSlideTimer = runTimeout();
