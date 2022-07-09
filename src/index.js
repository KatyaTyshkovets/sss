

 new Swiper('.image-slider', {
    // стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // булети,пагинація
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' +
                ' из '
                + '<span class="' + totalClass + '"></span>';
        }
    },
    // scroll

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },

    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,

    hashNavigation: {
        watchState: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },

    
    autoHeight: true,


    // slidesPerView: 3,

    // slidesPerGroup: 2,

    watchOverflow: true,

    spaceBetween: 30,

    loop: false,

     autoplay: {
         delay: 2000,
         stopOnLastSlide: true,
         disableOnInteraction: false,
     },
    speed: 800,
    
    


    //  effect: 'flip',
    //  flipEffect: {
    //      slideShadows: true,
    //      limitRotation: true
    //  },

     effect: 'cube',

     cubeEffect: {
         slideShadows: true,
         shadow: true,
         shadowOffset: 20,
         shadowScale: 0.94
     },

    //  breakpoints: {
    //          '@.075': {
    //             slidesPerView: 1,
    
    //         },
    
    //         '@1.00': {
    //              slidesPerView: 1,
    //         },
        
    //          '@01.50': {
    //              slidesPerView: 1,
    //          },
    //     },
//      breakpoints: {
//          320: {
//              slidesPerView: 1,
//          },
//          768: {
//              slidesPerView: 1,
//          },
//          992: {
//      slidesPerView: 1,
//  },

//      },
    

    preloadImages: false,

    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,

    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    // swiper.on: {
    //     init: function() {
    //         console.log("слайдер запущен");
    //     },
    //     slideChange: function () {
    //         console.log("слайд переключен");
    //     }
    // },

});


//  let sliderBlock = document.querySelector('.image-slider');
// //  let qSlides = myImageSlider.slides.length;

//  sliderBlock.addEventListener('mouseenter', function (e) {
//      myImageSlider.params.autoplay.disableOnInteraction = false;
//      myImageSlider.params.autoplay.delay = 500;
//      myImageSlider.autoplay.start();
// });

// sliderBlock.addEventListener('mouseleave', function (e) {
//     myImageSlider.autoplay.stop();
//  });























// const sliderClick = document.querySelector('.footer-modal-btn');


 

//  sliderClick.addEventListener('click', handleClickModalBtn);
//  refs.closeModalBtn.addEventListener('click',handleCloseSlider );
//  refs.backdrop.addEventListener('click', onBackdropClick);

//  export function handleClickModalBtn() {
//    window.addEventListener('keydown', onEscKeyPress);
//    document.body.classList.add('show-slider');
//  }

//  export function handleCloseSlider() {
//    window.removeEventListener('keydown', onEscKeyPress);
//    document.body.classList.remove('show-slider');
//  }

//  export function onBackdropClick(event) {
//    if (event.currentTarget === event.target) {
//      handleCloseSlider();
//    }
//  }

//  export function onEscKeyPress(event) {
//    const ESC_KEY_CODE = 'Escape';
//    const isEscKey = event.code === ESC_KEY_CODE;

//    if (isEscKey) {
//      handleCloseSlider();
//    }
//  }








