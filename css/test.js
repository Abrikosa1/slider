'use strict';
const buttonNext = document.querySelector('.gallery__button-next'),
      buttonPrev = document.querySelector('.gallery__button-prev'),
      images = document.querySelectorAll('.gallery__images img'),
      bullets = document.querySelectorAll('.gallery__bullet'),
      bulletsBlock = document.querySelector('.gallery__bullets');

let index = 0,
    activeSlide = document.querySelector('.enabled'),
    activeBullet = document.querySelector('.active');



const showSlide = n => {
    if (n < 0) {
        index = images.length - 1;
    } else if (n >= images.length) {
        index = 0;
    }
    activeSlide = document.querySelector('.enabled');
    activeBullet = document.querySelector('.active');
    activeSlide.classList.remove('enabled');
    activeBullet.classList.remove('active');

    images[index].classList.add('enabled');
    bullets[index].classList.add('active');

};

/* const addSlide = n => {
    showSlide(index += n);
}; */

buttonNext.addEventListener('click', () => {
    showSlide(index += 1);
});
buttonPrev.addEventListener('click', () => {
    showSlide(index -= 1);
});

bulletsBlock.addEventListener('click', (e) => {
    for (let i = 0; i < bullets.length + 1; i++){
        if (e.target.classList.contains('gallery__bullet') && e.target === bullets[i]) {

            showSlide(index = i);
        }
    }
}); 

let offset = 0,
    opacityOffset = 0;
let sliderTimer = setInterval(function() {
    
/*     showSlide(index);
    index++; */
}, 1);

let hideSlide = (index) => {
    activeSlide.style.right = offset + 'px';
    offset++;
    activeSlide.style.opacity = 1 - opacityOffset;
    opacityOffset += 0.002;
    if (opacityOffset === 0) {
        clearInterval(sliderTimer);
    }
};
/* let timerId = setTimeout(function tick() {
    showSlide(index);
    index++;
    timerId = setTimeout(tick, 5000); 
  }, 5000); */

/*   let sliderTimer = setInterval(function() {
    showSlide(index);
    index++;
}, 10); */


/* let hideSlide = (n, dir) => {
    activeSlide = document.querySelector('.enabled');
    activeBullet = document.querySelector('.active');
    let sliderInterval = setInterval(() => {
        if (dir === 'right') {
            activeSlide.style.right = offset + 'px';
        } else if (dir === 'left') {
            activeSlide.style.left = offset + 'px';
        }
        
        offset += 5;
        activeSlide.style.opacity = 1 - opacityOffset;
        opacityOffset += 0.01;
        if (offset > 500) {
            clearInterval(sliderInterval);
            activeSlide.style.opacity = 1;
            activeSlide.style.right = 'unset';
            activeSlide.style.left = 'unset';
            activeSlide.classList.remove('enabled');
            activeBullet.classList.remove('active');
            offset = 0;
            opacityOffset = 0;
            images[index].classList.add('enabled');
            bullets[index].classList.add('active');
        }
    }, 1);
}; */


'use strict';
const buttonNext = document.querySelector('.gallery__button-next'),
      buttonPrev = document.querySelector('.gallery__button-prev'),
      images = document.querySelectorAll('.gallery__images img'),
      bullets = document.querySelectorAll('.gallery__bullet'),
      bulletsBlock = document.querySelector('.gallery__bullets');


let index = 0;
let timer;



function moveSlide(n, dir) {
    console.log(dir);
    let activeSlide = document.querySelector('.enabled'),
    activeBullet = document.querySelector('.active');
    let offset = 0,
    opacityOffset = 0;
    tdt();
    function tdt() {
        if (dir === 'right') {
            activeSlide.style.right = offset + 'px';
        } else if (dir === 'left') {
            activeSlide.style.left = offset + 'px';
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
        }
        else{
            timer = setTimeout(tdt, 4);
        }
    }
}


const showSlide = (n, dir) => {

    if (n < 0) {
        index = images.length - 1;
    } else if (n >= images.length) {
        index = 0;
    }
    moveSlide(index, dir);
};


buttonNext.addEventListener('click', () => {
    showSlide(index += 1, 'left');
});
buttonPrev.addEventListener('click', () => {
    showSlide(index -= 1, 'right');
});

bulletsBlock.addEventListener('click', (e) => {
    for (let i = 0; i < bullets.length + 1; i++){
        if (e.target.classList.contains('gallery__bullet') && e.target === bullets[i] && !e.target.classList.contains('active')) {
            showSlide(index = i);
        }
    }
}); 





/* let timerId = setTimeout(function tick() {
    showSlide(index, 'right');
    index++;
    timerId = setTimeout(tick, 5000); 
  }, 5000); */

//   let sliderTimer = setInterval(function() {
 //   showSlide(index);
   // index++;
//}, 10); 

/* почти */
'use strict';
const buttonNext = document.querySelector('.gallery__button-next'),
      buttonPrev = document.querySelector('.gallery__button-prev'),
      images = document.querySelectorAll('.gallery__images img'),
      bullets = document.querySelectorAll('.gallery__bullet'),
      bulletsBlock = document.querySelector('.gallery__bullets');


let index = 0;
let timer;


function moveSlide(n, dir) {
    let activeSlide = document.querySelector('.enabled'),
    activeBullet = document.querySelector('.active');
    let offset = 0,
    opacityOffset = 0;
    tdt();
    function tdt() {
        if (dir === 'right') {
            activeSlide.style.right = offset + 'px';
        } else if (dir === 'left') {
            activeSlide.style.left = offset + 'px';
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
        }
        else{
            timer = setTimeout(tdt, 4);
        }
    }
}


const showSlide = (n, dir) => {

    if (n < 0) {
        index = images.length - 1;
    } else if (n >= images.length) {
        index = 0;
    }
    console.log(timer);
    moveSlide(index, dir);
};


buttonNext.addEventListener('click', () => {
    showSlide(index += 1, 'left');
});
buttonPrev.addEventListener('click', () => {
    showSlide(index -= 1, 'right');
});

bulletsBlock.addEventListener('click', (e) => {
    for (let i = 0; i < bullets.length + 1; i++){
        if (e.target.classList.contains('gallery__bullet') && e.target === bullets[i] && !e.target.classList.contains('active')) {
            showSlide(index = i);
            
        }
    }
}); 





/* let timerId = setTimeout(function tick() {
    showSlide(index, 'right');
    index++;
    timerId = setTimeout(tick, 5000); 
  }, 5000); */

//   let sliderTimer = setInterval(function() {
 //   showSlide(index);
   // index++;
//}, 10); 