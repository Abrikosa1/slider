'use strict';
const buttonNext = document.querySelector('.gallery__button-next'),
      buttonPrev = document.querySelector('.gallery__button-prev'),
      images = document.querySelectorAll('.gallery__images img'),
      bullets = document.querySelectorAll('.gallery__bullet'),
      bulletsBlock = document.querySelector('.gallery__bullets');


let index = 0,
    timer,
    animation = 1;


function moveSlide(n, dir) {
    let activeSlide = document.querySelector('.enabled'),
        activeBullet = document.querySelector('.active'),
        offset = 0,
        opacityOffset = 0;
    
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


buttonNext.addEventListener('click', () => {
    if (animation === 1) {
        showSlide(index += 1, 'left');
    }
});

buttonPrev.addEventListener('click', () => {
    if (animation === 1) {
        showSlide(index -= 1, 'right');
    }
});

bulletsBlock.addEventListener('click', (e) => {
    for (let i = 0; i < bullets.length + 1; i++){
        if (e.target.classList.contains('gallery__bullet') && e.target === bullets[i] && !e.target.classList.contains('active') && animation === 1) {
            showSlide(index = i);
            
        }
    }
}); 


let autoSlideTimer = setTimeout(function autoSlide() {
    if(animation === 1){
        index++;
        showSlide(index, 'left');
    }
    autoSlideTimer = setTimeout(autoSlide, 5000); 
  }, 5000);
