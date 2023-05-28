let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 0,
  speed: 900,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, autoplay: {
    delay: 4000,
  }
});

$('.toggle-container').on('click', function () {
  $(this).toggleClass('active');
  $('.toggle').toggleClass('active');
  $('.header-second').find('.side-nav').toggleClass('active');
  $('.header-second').find('.side-menu-mask').toggleClass('active');
});

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
});

$('.search-btn').on('click', function () {
  $('.search-container').toggleClass('active');
  $('.search-container-mask').toggleClass('active');
});



var header = document.querySelector('.header-second');
var logo = document.querySelector('.logo .small');
var logoXs = document.querySelector('.logo .xs');
var logoContainer = document.querySelector('.logo');

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '.header-second',
  start: 'top top',
  end: 'bottom top',
  onEnter: function () {
    gsap.to(header, {
      top: '-2rem',
      duration: 0.3,
      overwrite: true
    });
    gsap.to(logo, {
      height: '52px',
      duration: 0.3,
      overwrite: true
    });
    gsap.to(logoContainer, {
      padding: '4px',
      top: '0',
      duration: 0.3,
      overwrite: true
    });
  },
  onLeaveBack: function () {
    gsap.to(header, {
      top: '0',
      duration: 0.3,
      overwrite: true
    });
    gsap.to(logo, {
      height: '75px',
      duration: 0.3,
      overwrite: true
    });
    gsap.to(logoContainer, {
      padding: '24px 8px 15px 8px',
      top: '-2rem',
      duration: 0.3,
      overwrite: true
    });
  }
});


// let test = () => {
//   ScrollTrigger.create({
//     trigger: '.footer-wrapper',
//     start: 'top top',
//     end: 'bottom top',
//     onEnter: function () {
//       gsap.to(backTop, {
//         height: '2',
//         duration: 0.3,
//         overwrite: true
//       });
//     },
//     onLeaveBack: function () {
//       gsap.to(backTop, {
//         opacity: 0,
//         duration: 0.3,
//         overwrite: true
//       });
//     }
//   });
// }

// test();



// ScrollTrigger.create({
//   start: "top top",
//   end: 99999,
//   onUpdate: (self) => {
//     self.direction === -1 ? showAnim.play() : showAnim.reverse()
//   }
// });

// gsap.to(".box", {
//   scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
//   x: 500
// });

// gsap.registerPlugin(ScrollTrigger);

// gsap.to('.header-second', {
//   y: '-2rem',
//   start: "top bottom", scrub: true,
//   endTrigger: '.container-2',
//   end: 'top center',
//   markers: true,
//   pin: true,
//   pinSpacing: false
// })


// ScrollTrigger.create({
//   animation: gsap.from(".header-second", {
//     y: "2rem",
//     // scale: 4,
//     // yPercent: -50
//   }),
//   // scrub: true,
//   // trigger: ".overlay-parallax",
//   // start: "top ",
//   // endTrigger: 'footer',
//   // end: 'b',
// markers: true,
// pin: true,
// pinSpacing: false
// });


// new Litepicker({
//   element: document.getElementById('datepicker'),
//   singleMode: false,
//   tooltipText: {
//     one: 'night',
//     other: 'nights'
//   },
//   tooltipNumber: (totalDays) => {
//     return totalDays - 1;
//   }
// })


// Footer scripts
var resizeTimer;
function handleClick() {
  $(this).next('.footer-menu').toggleClass('active');
  $(this).toggleClass('active');
  $(this).find('span').toggleClass('rotate');
}

function checkWindowWidth() {
  var windowWidth = $(window).width();
  if (windowWidth >= 1100) {
    $('.footer-title').off('click', handleClick);
  } else {
    $('.footer-title').on('click', handleClick);
  }
}

setTimeout(function () {
  checkWindowWidth();
}, 100);

$(window).on('resize', function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    checkWindowWidth();
  }, 100);
});


$(".booking-content:first").addClass("active");
$(".booking-tabItem:first").addClass("active");

// Handle tabs click event
$(".booking-tabItem").on('click', function () {
  var tabClass = $(this).data("tab");
  $(".booking-content").removeClass("active");
  $(".booking-tabItem").removeClass("active");
  $("." + tabClass).addClass("active");
  $(this).addClass("active");
  return false;
});

$(".custom-select").on("click", ".select-header", function () {
  $(this).siblings(".select-options").toggle();
  $(this).find(".arrow").toggleClass("open");
});

$(".custom-select").on("click", ".option", function () {
  var selectedOption = $(this).text();
  $(this).closest(".custom-select").find(".selected-option").text(selectedOption);
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  $(this).closest(".select-options").hide();
  $(this).closest(".custom-select").find(".arrow").removeClass("open");
});

