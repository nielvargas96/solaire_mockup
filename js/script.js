let mainSlider = new Swiper(".main-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".main-pagination",
    clickable: true,
  }, autoplay: {
    delay: 4000,
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  speed: 900
});

let featuredSlider = new Swiper(".featured-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  lazyLoading: true,
  // autoplay: {
  //   delay: 4000,
  // },
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  speed: 900,
  breakpoints: {
    768: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

let featuredSlider2 = new Swiper(".featured-slider-layout-2", {
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  autoplay: {
    delay: 4000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  // scale: 1,
  coverflowEffect: {
    rotate: 3,
    stretch: 80,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 200,
  speed: 1000
});



$('.toggle-container').on('click', function () {
  $(this).toggleClass('active');

  $('body').toggleClass('active');

  $('.toggle').toggleClass('active');
  $('.header-second').find('.side-nav, .side-menu-mask').toggleClass('active');
  $('.header-second').find('.search-btn.active, .search-container.active, .search-container-mask.active').removeClass('active');
  // $('html').find('body.active').removeClass('active');
});

// $('.toggle-container').hasClass('active').parents('body').addClass('active');

$('.side-menu-mask').on('click', function () {
  $('.header-second').find('.toggle-container.active').trigger("click");
  $('.header-second').find('.toggle.active').trigger("click");
});

$('.side-menu-item .menu-link').on('click', function () {
  $('.side-menu-item .menu-link').not(this).removeClass('active');
  $('.side-sub-menu').not($(this).next('.side-sub-menu')).removeClass('active');
  $(this).toggleClass('active');
  $(this).next('.side-sub-menu').toggleClass('active');
});

$('.search-container-mask').on('click', function () {
  $('.header-second').find('.search-btn').trigger("click");
  $('.header-second').find('.search-btn-top').trigger("click");
});

$('.search-btn, .search-btn-top').on('click', function () {
  $('.search-container').toggleClass('active');
  $('.search-container-mask').toggleClass('active');
  $('body').toggleClass('active');
  $('.header-second').find('.side-nav.active, .toggle-container.active, .toggle.active, .side-menu-mask.active').removeClass('active');
});


// var header = document.querySelector('.header-second');
// var logo = document.querySelector('.logo .small');
// var logoXs = document.querySelector('.logo .xs');
// var logoContainer = document.querySelector('.logo');
// var logoInner = document.querySelector('.logo-img');

// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//   trigger: '.header-second',
//   start: 'top top',
//   end: 'bottom top',
//   onEnter: function () {
//     gsap.to(header, {
//       top: '-2.5rem',
//       duration: 0.15,
//       overwrite: true
//     });
//     gsap.to(logoInner, {
//       top: '0.5rem',
//       height: '40px',
//       duration: 0.25,
//       overwrite: true
//     });
//     // gsap.to(logoContainer, {
//     //   padding: '4px',
//     //   top: '0',
//     //   duration: 0.25,
//     //   overwrite: true
//     // });
//   },
//   onLeaveBack: function () {
//     gsap.to(header, {
//       top: '0',
//       duration: 0.15,
//       overwrite: true
//     });
//     // gsap.to(logo, {
//     //   height: '45px',
//     //   duration: 0.25,
//     //   overwrite: true
//     // });
//     // gsap.to(logoContainer, {
//     //   padding: '24px 8px 15px 8px',
//     //   top: '-2rem',
//     //   duration: 0.25,
//     //   overwrite: true
//     // });
//   }
// });



$(document).ready(function () {
  function checkWindowWidth() {
    if ($(window).width() < 1100) {
      // Footer
      // $(".footer-title").on('click', function () {
      //   $(this).toggleClass('active');
      //   $(this).next(".footer-menu").toggleClass('active');
      //   $(this).find('span').toggleClass('active');
      // })
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
          $('.header-second').removeClass('on-scroll');
        } else {
          $('.header-second').removeClass('on-scroll');
        }
      });
    } else {
      // Header
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
          $('.header-second').addClass('on-scroll');
        } else {
          $('.header-second').removeClass('on-scroll');
        }
      });
    }
  }
  checkWindowWidth();
  $(window).on('resize', checkWindowWidth);
});


// $(".booking-content:first").addClass("active");
// $(".booking-tabItem:first").addClass("active");

// $(".booking-tabItem").on('click', function () {
//   var tabClass = $(this).data("tab");
//   $(".booking-content").removeClass("active");
//   $(".booking-tabItem").removeClass("active");
//   $("." + tabClass).addClass("active");
//   $(this).addClass("active");
//   return false;
// });

$(".book-select").on("click", function () {
  $(this).parent('.book-item').find('.book-list, .icon-down-open-big').toggleClass('active');
  let bookItem = $(this).closest('.book-item');
  let bookWidget = bookItem.closest('.book-widget');
  bookWidget.find('.book-item').not(bookItem).find('.book-list-item').removeClass('active');
});

$(".book-list-item").on("click", function () {
  let selectedOption = $(this).attr('data-value');
  let bookItem = $(this).closest('.book-item');
  bookItem.find('input').val(selectedOption);
  bookItem.find('.selected-item').text(selectedOption);
  bookItem.find('.book-select, .icon-down-open-big, .book-list').removeClass('active');
});

$(".side-language").on("click", function () {
  $('.side-language').toggleClass('active');
});

$(".booking-date").flatpickr({
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  allowInput: true,
  mode: "range",
  minDate: "today"
  // maxDate: new Date().fp_incr(15)
});