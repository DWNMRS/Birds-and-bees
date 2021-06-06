//SLIDER_EVENTS-------------------------
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.events-slider', {

    navigation: {
      nextEl: '.btn-slider--next',
      prevEl: '.btn-slider--prev'
    },

    scrollbar: {
      el: '.events-scroll',
      draggable: true,
      dragSize: 74,
      snapOnRelease: false
    },

    slidesPerView: 3,

    spaceBetween: 31,

  });


  new Swiper('.events-slider--mob', {

    navigation: {
      nextEl: '.btn-slider--next',
      prevEl: '.btn-slider--prev'
    },

    slidesPerView: 1.5,

    spaceBetween: 31,

  });

  // PHOTOREP-----------------------------

  new Swiper('.photo-reports__slider', {

    slidesPerView: 1.1,

    spaceBetween: 31,

  });

  //SLIDER-HOME--------------------------

  let swiperMain = new Swiper('.home-slider', {

    pagination: {
      el: '.services-menu--mob',
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + 'background-bullet background-bullet' + (index + 1) + ' ' + className + '">' + '</div>';
      },
    },

    slidesPerView: 1,
    watchOverflow: true,

    navigation: {
      nextEl: '.home-slider__btn-next',
      prevEl: '.home-slider__btn-prev',
    },

    allowTouchMove: false,
  });

  $('.services-menu__item').click(function () {
    $('.services-menu__item').removeClass('services-menu__item--active')
    $(this).addClass('services-menu__item--active')
    swiperMain.slideTo($(this).index())
  });
});
