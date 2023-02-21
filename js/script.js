'use strict';

// ====preloader======
const preloader = document.querySelector('[data-preloader]');

window.addEventListener('load', function(){
    preloader.style.display = "none";
});


// ======menu-minimize=====
const toggleBtn = document.querySelector('[data-toggle-btn]'),
      toggleMenu = document.querySelector('[data-main-menu-list]'),
      contentWidth = document.querySelector('[data-main-content-width]'),
      modalOverlay = document.querySelector('[data-modal-overlay]');

        toggleBtn.addEventListener('click', function(){
          toggleMenu.classList.toggle('active');
          contentWidth.classList.toggle('active');
          modalOverlay.classList.add('enable');
      });
      modalOverlay.addEventListener('click', function(){
        toggleMenu.classList.add('active');
        contentWidth.classList.add('active');
          modalOverlay.classList.remove('enable');
      })


// ======side-&-up link====
const mainLink = document.querySelectorAll('[data-link]'),
      arrow = document.querySelectorAll('[data-arrow]'),
      subLink = document.querySelectorAll('[data-sublink]');

      for(let i = 0; i < arrow.length; i++){
        mainLink[i].addEventListener('click', function(){
            subLink[i].classList.toggle('active');
            arrow[i].classList.toggle('active');
            mainLink[i].classList.toggle('active');
        });
      };

// ===dark-&-light-theme====
const darkTheme = document.querySelector('[data-dark-theme]'),
      lightTheme = document.querySelector('[data-light-theme]');

      darkTheme.classList.add('active');
      lightTheme.addEventListener('click', function(){
        lightTheme.classList.add('active');
        darkTheme.classList.remove('active');
        document.body.classList.add('light-theme');
      });
      darkTheme.addEventListener('click', function(){
        lightTheme.classList.remove('active');
        darkTheme.classList.add('active');
        document.body.classList.remove('light-theme');
      });

// =====shop-slider=====
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper(".shop-swiper", {
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

// ====top-rated-game=====
var swiper = new Swiper(".top-game-swiper,.recent-big-win-swiper", {
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
    1474: {
      slidesPerView: 7,
    },
  },
});


// ====latest-bit-box-show====
const loadMoreBtn = document.querySelector('[data-load-more-btn]'),
      latestBox = document.querySelector('[data-latest-box]');

      loadMoreBtn.addEventListener('click', function(){
          loadMoreBtn.classList.toggle('active');
          latestBox.classList.toggle('active');
      });

// ====register-slider====
var swiper = new Swiper(".register-swiper", {
  effect:'flip',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ====back-to-top=====
const backToTop = document.querySelector('[data-back-to-top]');

  const scroll = function(){
    if(this.scrollY >= 200){
      backToTop.classList.add('enable');
    }
    else{
      backToTop.classList.remove('enable');
    }
  };
  window.addEventListener('scroll', scroll);


// =====sign-up-form=====
const form = document.querySelector('[data-form]'),
      signin = document.querySelector('[data-signin]'),
      signup = document.querySelector('[data-signup]');

      signin.addEventListener('click', function(){
        form.classList.add('active');
      });
      signup.addEventListener('click', function(){
        form.classList.remove('active');
      });

// =====form-active=====
const mainForm = document.querySelector('[data-main-form]'),
      formOpenBtn1 = document.querySelector('[data-form-open-btn-1]'),
      formOpenBtn2 = document.querySelector('[data-form-open-btn-2]'),
      formCloseBtn = document.querySelector('[data-form-close-btn]'),
      overlay = document.querySelector('[data-overlay]');

      const closeForm = function(){
        overlay.classList.remove('active');
        mainForm.classList.remove('active');
      }

      formOpenBtn1.addEventListener('click', function(){
        mainForm.classList.add('active');
        overlay.classList.add('active');
        form.classList.add('active');
      });
      formOpenBtn2.addEventListener('click', function(){
        mainForm.classList.add('active');
        overlay.classList.add('active');
        form.classList.remove('active');
      });
      overlay.addEventListener('click', closeForm);
      formCloseBtn.addEventListener('click', closeForm);

// ====email/phone====
const emailPhone = document.querySelector('[data-email-phone]'),
      email = document.querySelector('[data-email]'),
      phone = document.querySelector('[data-phone]'),
      inputEmail = document.querySelector('[data-input-email]'),
      inputTel = document.querySelector('[data-input-tel]');

      email.addEventListener('click', function(){
        emailPhone.classList.remove('active');
        inputEmail.classList.remove('disable');
        inputTel.classList.remove('active');
      });

      phone.addEventListener('click', function(){
        emailPhone.classList.add('active');
        inputEmail.classList.add('disable');
        inputTel.classList.add('active');
      });

// =====small-device-side-menu======
const menuOpenBtn = document.querySelector('[data-menu-open-btn]'),
      menuCloseBtn = document.querySelector('[data-menu-close-btn]');

      menuOpenBtn.addEventListener('click', function(){
        toggleMenu.classList.add('enable');
        overlay.classList.add('active');
      });
      const menuCloseFunc = function(){
        toggleMenu.classList.remove('enable');
        overlay.classList.remove('active');
      };
      menuCloseBtn.addEventListener('click', menuCloseFunc);
      overlay.addEventListener('click', menuCloseFunc);



    // =====medium-device-menu-link====
    function myFunction(x) {
      if (x.matches) {
        toggleMenu.classList.add('active');
      } else {
       toggleMenu.classList.remove('active');
      };
    };
    var x = window.matchMedia("(max-width: 1199.95px)");
    myFunction(x);

    function myFunction1(y) {
      if (y.matches) {
        toggleMenu.classList.remove('active');
      } else {
       toggleMenu.classList.add('active');
      };
    };
    var y = window.matchMedia("(max-width: 659.95px)");
    myFunction1(y);



    function myFunction2(z) {
      if (z.matches) {
        toggleMenu.classList.remove('active');
      } else {
       toggleMenu.classList.remove('active');
      };
    };
    var z = window.matchMedia("(min-width:1200px)");
    myFunction2(z);