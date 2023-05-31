/*=============================
           Mobile Menu
=============================*/

  const burger = document.querySelector('.header-button__burger');
  const headerMenu = document.querySelector('.header__menu');
    burger.addEventListener(
      'click', function() {
        headerMenu.classList.toggle('header__menu--active');
        burger.classList.toggle('header-button__burger--active');
    }) 

/*=============================
      Section-promo__slider
=============================*/

  const PromoSwiper = new Swiper('.section-promo__slider', {
  
    pagination: {
      el: ".section-promo__bullets",
      clickable: true,
      modifierClass: 'section-promo__',
      bulletClass: 'section-promo__bullet',
      bulletActiveClass: 'section-promo__bullet--active',

      renderBullet: function (index, className) {
        return '<li class="' + className + '">0' + (index + 1) + "</li>";
      },
    },
  });

/*=============================
      Section-slider
=============================*/

  const SectionSwiper = new Swiper('.section-slider', {
  
    pagination: {
      el: '.section-slider__bullets',
      clickable: true,
      modifierClass: 'section-slider__',
      bulletClass: 'section-slider__bullet',
      bulletActiveClass: 'section-slider__bullet--active',
    },

    slidesPerView: 3,

    spaceBetween: 42,

    breakpoints: {
      300: {
        slidesPerView: 1,
      },

      500: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      769: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

/*=============================
      Services-slider
=============================*/

  var ServicesSwiper = new Swiper('.services-slider', {
    
    pagination: {
      el: '.services-slider__bullets',
      clickable: true,
      modifierClass: 'services-slider__',
      bulletClass: 'services-slider__bullet',
      bulletActiveClass: 'services-slider__bullet--active',

      renderBullet: function (index, className) {
        const bulletNumber = (index < 9) ? `0${index + 1}` : index + 1;
        const slideElement = this.slides[index];
        const { title } = slideElement.dataset;

        return (
          `<li class="${className}">
          <span class="services-slider__bullet-number">${bulletNumber}.</span>
          <span class="services-slider__bullet-text">${title}</span>
          </li>`
        );
      },
    },
  
    
  });