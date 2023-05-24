let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, autoplay: {
    delay: 4000,
  },
  speed: 750,
  spaceBetween: 0,
});

$(function () {
  $('.toggle').on('click', function () {
    $(this).toggleClass('active');
    $('.header-second').find('.side-nav').toggleClass('active')
  });
});

$('.side-menu-mask').on('click', function () {
  $('.header-second').find('.toggle.active').trigger("click");
});

var header = document.querySelector('.header-second');
var logo = document.querySelector('.logo img');
var logoContainer = document.querySelector('.logo');

ScrollTrigger.create({
  trigger: '.hero-parallax',
  start: 'top top',
  end: 'bottom top',
  onEnter: function () {
    gsap.to(header, {
      top: '-2rem',
      duration: 0.3,
      overwrite: true
    });
    gsap.to(logo, {
      height: '60px',
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
      height: '65px',
      duration: 0.3,
      overwrite: true
    });
  },

  // markers: true,
  // pin: true,
  // pinSpacing: false,
});

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
  // console.log("Click event executed");
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
}, 500);

$(window).resize(function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    checkWindowWidth();
  }, 500);
});


$('.booking-tabItem').each(function (index) {
  $(this).click(function () {
    // $('.booking-content').hide();
    $('.booking-tabItem').eq(index).removeClass('active');
    $('.booking-content').eq(index).removeClass('active');
    $('.booking-content').eq(index).addClass('active');
    $('.booking-tabItem').eq(index).addClass('active');
  });
});





// $('.booking-tabItem:first-child').addClass('active')

// $("#booking_tabs").tabs({
//   $(this).click(function (e) {
//     e.preventDefault();
//     $('.tab-content').hide();
//     $('.tab-content').eq(index).show();
//   });
// });

// $('.tabs li:first-child a').trigger('click'); // Show the first tab by default

// let windowWidth = window.innerWidth

// $('.footer-title').on('click', function (e) {

//   // e.stopPropagation();
//   if (windowWidth >= 1100) {
//     e.stopPropagation();
//   } else {
    // $(this).next('.footer-menu').slideToggle('fast');
    // $(this).toggleClass('active');
    // $(this).find('span').toggleClass('rotate');
//   }
// });


// function checkWindowWidth() {
//   // let windowWidth = $(window).width();
//   if (windowWidth >= 1100) {
//     $('.footer-menu').css("display", "block");
//   } else {
//     $('.footer-menu').css("display", "none");
//   }
// }

// checkWindowWidth();

// $(window).resize(function () {
//   checkWindowWidth();
// });


