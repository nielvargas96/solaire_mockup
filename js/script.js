// Check if the index is in current page will run the gsap splash if not will not load
if (document.querySelector('.index')) {

  // Homepage Screen Splash
  const animationPlayedTimestamp = localStorage.getItem('animationPlayedTimestamp');
  const expirationTime = 3 * 60 * 60 * 1000;
  if (!animationPlayedTimestamp || (Date.now() - animationPlayedTimestamp > expirationTime)) {
    $('.index .splash-logo').css('display', 'block');
    const logoAnimation = gsap.timeline();
    logoAnimation
      .from(".index .splash-logo", {
        delay: 0.1,
        scale: 1,
        duration: 1,
        scale: 0,
        y: -100,
        stagger: {
        }
      })
      .to(".index .splash-logo", {
        scale: 3,
        opacity: 0,
        duration: .5,
        delay: 1
      })
      .from(".index body", { className: "active" });

    const screenAnimation = gsap.timeline();
    screenAnimation
      .to(".index .splash-screen", { opacity: 0, duration: .5, delay: 2.5 })
      .to(".index .splash-screen", { display: "none" })
      .to(".index body", { className: "", delay: 1 });

    gsap.from('.index .menu-wrapper,.index .btn-header,.index .logo-inner,.index .content-text,.index .logo-container,.index .toggle-container,.index .main-pagination', {
      delay: 3,
      duration: .5,
      opacity: 0,
      y: 50,
      stagger: {
        each: 0.2
      }
    });

    gsap.from('.index .booking', {
      delay: 3,
      duration: .5,
      opacity: 0,
      y: 100,
    });

    gsap.to('.index .booking', {
      delay: 4,
      duration: .5,
      y: -50,
    });

    gsap.from('.index .main-swiper-button-prev', {
      delay: 4.5,
      duration: 0.5,
      x: -100,
    });

    gsap.to('.index .main-swiper-button-prev', {
      delay: 5,
      duration: 0.5,
      x: 0,
    });

    gsap.from('.index .main-swiper-button-next', {
      delay: 4.5,
      duration: 0.5,
      x: 100,
    });

    gsap.to('.index .main-swiper-button-next', {
      delay: 5,
      duration: 0.5,
      x: 0,
    });

    localStorage.setItem('animationPlayedTimestamp', Date.now());
    $('body').animate({ scrollTop: 0 }, 'fast');
  } else {
    $('.index .splash-screen').addClass('active');
  }
}

// Sliders

// 
setTimeout(function () {
  let mainSlider = new Swiper(".main-slider", {
    lazy: {
      loadPrevNext: true, // Load images in the adjacent slides
    },
    navigation: {
      nextEl: ".main-swiper-button-next",
      prevEl: ".main-swiper-button-prev",
    },
    pagination: {
      el: ".main-pagination",
      clickable: true,
    }, autoplay: {
      delay: 5000,
    },
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    speed: 900
  });
}, 8000);

let slider1 = new Swiper(".slider-1", {
  navigation: {
    nextEl: ".button-next-slider-1",
    prevEl: ".button-prev-slider-1",
  },
  pagination: {
    el: ".pagination-slider-1",
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
      slidesPerGroup: 3,
      spaceBetween: 30,
    }
  }
});

let slider2 = new Swiper(".slider-2", {
  navigation: {
    nextEl: ".button-next-slider-2",
    prevEl: ".button-prev-slider-2",
  },
  lazyLoading: true,
  pagination: {
    el: ".pagination-slider-2",
    clickable: true,
  },
  centeredSlides: true,
  slidesPerView: 1,
  loop: false,
  spaceBetween: 50,
  speed: 600,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    1024: {
      spaceBetween: 350,
      coverflowEffect: {
        rotate: 5,
        stretch: 100,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }
    }
  }
});



let slider3 = new Swiper(".slider-3", {
  navigation: {
    nextEl: ".button-next-slider-3",
    prevEl: ".button-prev-slider-3",
  },
  pagination: {
    el: ".pagination-slider-3",
    clickable: true,
  },
  lazyLoading: true,
  // autoplay: {
  //   delay: 4000,
  // },
  centeredSlides: false,
  slidesPerView: 1,
  loop: false,
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
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  }
});

let slider4 = new Swiper(".slider-4", {
  navigation: {
    nextEl: ".button-next-slider-4",
    prevEl: ".button-prev-slider-4",
  },
  pagination: {
    el: ".pagination-slider-4",
    clickable: true,
  },
  lazyLoading: true,
  // autoplay: {
  //   delay: 4000,
  // },

  centeredSlides: false,
  slidesPerView: 1,
  loop: false,
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
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  }
});

let slider5 = new Swiper(".slider-5", {
  navigation: {
    nextEl: ".button-next-slider-5",
    prevEl: ".button-prev-slider-5",
  },
  pagination: {
    el: ".pagination-slider-5",
    clickable: true,
  },
  lazyLoading: true,
  centeredSlides: false,
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
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  }
});


let slider6 = new Swiper(".slider-offers", {
  navigation: {
    nextEl: ".button-next-slider-6",
    prevEl: ".button-prev-slider-6",
  },
  pagination: {
    el: ".pagination-slider-6",
    clickable: true,
  },
  lazyLoading: true,
  // autoplay: {
  //   delay: 4000,
  // },
  loop: false,
  centeredSlides: false,
  slidesPerView: 1,
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
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  }
});

let slider7 = new Swiper(".see-all-restaurants", {
  navigation: {
    nextEl: ".button-next-slider-7",
    prevEl: ".button-prev-slider-7",
  },
  pagination: {
    el: ".pagination-slider-7",
    clickable: true,
  },
  lazyLoading: true,
  // autoplay: {
  //   delay: 4000,
  // },
  centeredSlides: false,
  slidesPerView: 1,
  loop: false,
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
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  }
});

let slider8 = new Swiper(".signature-resturants", {
  navigation: {
    nextEl: ".button-next-slider-8",
    prevEl: ".button-prev-slider-8",
  },
  pagination: {
    el: ".pagination-slider-8",
    clickable: true,
  },
  lazyLoading: true,
  // autoplay: {
  //   delay: 4000,
  // },
  centeredSlides: false,
  slidesPerView: 1,
  loop: false,
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
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  }
});

let slider9 = new Swiper(".casual-restaurants", {
  navigation: {
    nextEl: ".button-next-slider-9",
    prevEl: ".button-prev-slider-9",
  },
  pagination: {
    el: ".pagination-slider-9",
    clickable: true,
  },
  lazyLoading: true,
  // autoplay: {
  //   delay: 4000,
  // },
  centeredSlides: false,
  slidesPerView: 1,
  loop: false,
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
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  }
});

let slider10 = new Swiper(".bar-restaurants", {
  navigation: {
    nextEl: ".button-next-slider-10",
    prevEl: ".button-prev-slider-10",
  },
  pagination: {
    el: ".pagination-slider-10",
    clickable: true,
  },
  lazyLoading: true,
  // autoplay: {
  //   delay: 4000,
  // },
  centeredSlides: false,
  slidesPerView: 1,
  loop: false,
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
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  }
});

let slider11 = new Swiper(".vip-restaurants", {
  navigation: {
    nextEl: ".button-next-slider-11",
    prevEl: ".button-prev-slider-11",
  },
  pagination: {
    el: ".pagination-slider-11",
    clickable: true,
  },
  lazyLoading: true,
  // autoplay: {
  //   delay: 4000,
  // },
  centeredSlides: false,
  slidesPerView: 1,
  loop: false,
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
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  }
});

let slider12 = new Swiper(".slider-inner-restaurant", {
  // navigation: {
  //   nextEl: ".button-next-slider-12",
  //   prevEl: ".button-prev-slider-12",
  // },
  pagination: {
    el: ".pagination-slider-12",
    clickable: true,
  },
  lazyLoading: true,
  // autoplay: {
  //   delay: 4000,
  // },
  centeredSlides: false,
  slidesPerView: 1,
  loop: false,
  spaceBetween: 20,
  speed: 800
});


// let slider12 = new Swiper(".dining-experience", {
//   // navigation: {
//   //   nextEl: ".button-next-slider-11",
//   //   prevEl: ".button-prev-slider-11",
//   // },
//   // pagination: {
//   //   el: ".pagination-slider-11",
//   //   clickable: true,
//   // },
//   lazyLoading: true,
//   // autoplay: {
//   //   delay: 4000,
//   // },
//   centeredSlides: false,
//   slidesPerView: 1,
//   loop: false,
//   spaceBetween: 20,
//   speed: 900,
//   breakpoints: {
//     768: {
//       centeredSlides: false,
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     1024: {
//       centeredSlides: false,
//       slidesPerView: 2,
//       slidesPerGroup: 3,
//       spaceBetween: 30,
//     },
//   }
// });

// Toggle header
$('.toggle-container').on('click', function () {
  $(this).toggleClass('active');

  $('body').toggleClass('active');
  $('body').removeClass('search-active');
  // if ($('body').hasClass('search-active')) {

  // }

  $('.toggle').toggleClass('active');

  $('.header-second').toggleClass('active');
  $('.header-second').find('.side-nav, .side-menu-mask').toggleClass('active');
  $('.header-second').find('.search-btn.active, .search-container.active, .search-container-mask.active').removeClass('active');
});

$('.search-btn, .search-btn-top').on('click', function () {
  $(this).toggleClass('active');
  $('body').removeClass('active');
  $('body').toggleClass('search-active');

  $('input.search-input').focus();
  $('.search-container').toggleClass('active');
  $('.search-container-mask').toggleClass('active');
  $('.header-second').removeClass('active')
  $('.header-second').find('.side-nav.active, .toggle-container.active, .toggle.active, .side-menu-mask.active').removeClass('active');
});

// $('.toggle-container').hasClass('active').parents('body').addClass('active');

// Side menu 

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
  $('.header-container').find('.search-btn-top').removeClass('active');
});


$(document).ready(function () {

  $('.slider-tab a.active').each(function () {
    var index = $(this).index();
    $('.slider-tab-content').eq(index).addClass('active');
  });

  $('.slider-tab a').on('click', function (e) {
    e.preventDefault();
    var index = $(this).index();
    $('.slider-tab a').removeClass('active');
    $(this).addClass('active');
    $('.slider-tab-content').removeClass('active');
    $('.slider-tab-content').eq(index).addClass('active');
  });

  $('.slider-tab-2 a.active').each(function () {
    var index = $(this).index();
    $('.slider-tab-content-2').eq(index).addClass('active');
  });

  $('.slider-tab-2 a').on('click', function (e) {
    e.preventDefault();
    var index = $(this).index();
    $('.slider-tab-2 a').removeClass('active');
    $(this).addClass('active');
    $('.slider-tab-content-2').removeClass('active');
    $('.slider-tab-content-2').eq(index).addClass('active');
  });

  // Booking widget with tab

  $('.booking-tab a.active').each(function () {
    var index = $(this).index();
    $('.booking-tab-content').eq(index).addClass('active');
  });

  $('.booking-tab a').on('click', function (e) {
    e.preventDefault();
    var index = $(this).index();
    $('.booking-tab a').removeClass('active');
    $(this).addClass('active');
    $('.booking-tab-content').removeClass('active');
    $('.booking-tab-content').eq(index).addClass('active');
  });

  function checkWindowWidth() {

    if ($(window).width() < 680) {
      $(".booking-date").flatpickr({
        // altInput: true,
        // altFormat: "F j, Y",
        showMonths: 1,
        dateFormat: "m/d/y",
        // allowInput: true,
        mode: "range",
        minDate: "today",
        position: "below left",
        static: true
        // maxDate: new Date().fp_incr(15)
      });
    } else {
      $(".booking-date").flatpickr({
        // altInput: true,
        // altFormat: "F j, Y",
        showMonths: 2,
        dateFormat: "m/d/y",
        // allowInput: true,
        mode: "range",
        minDate: "today",
        position: "below left"

        // maxDate: new Date().fp_incr(15)
      });
    }

    if ($(window).width() < 1100) {
      // Footer
      // $(".footer-title").on('click', function () {
      //   $(this).toggleClass('active');
      //   $(this).next(".footer-menu").toggleClass('active');
      //   $(this).find('span').toggleClass('active');
      // })
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
          $('.header-second').removeClass('on-scroll');
          // $('.booking').addClass('on-scroll');
        } else {
          $('.header-second').removeClass('on-scroll');
        }
      });



      $('.footer-checkbox').prop('disabled', false);
      $('.footer-checkbox').prop('checked', false);
    } else {
      // Header
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
          $('.header-second,  .btn-header').addClass('on-scroll');
          // $('.header-second, .booking, .btn-header').addClass('on-scroll');
        } else {
          // $('.header-second, .booking, .btn-header').removeClass('on-scroll');
          $('.header-second,  .btn-header').removeClass('on-scroll');
        }
      });



      $('.footer-checkbox').prop('checked', true);
      $('.footer-checkbox').prop('disabled', true);
    }
  }

  checkWindowWidth();
  $(window).on('resize', checkWindowWidth);
});

// flatpickr(".input_date", {
//   showMonths: 2,
//   mode: "range",
//   minDate: "today",
//   position: "below left"
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const datepickerButtons = document.getElementsByClassName("btn_date");
//   const inputDates = document.getElementsByClassName("input_date");
//   const selectedDates = document.getElementsByClassName("selectedDate");

//   // Loop through each datepicker element
//   for (let i = 0; i < datepickerButtons.length; i++) {
//     const datepickerButton = datepickerButtons[i];
//     const datepicker = inputDates[i]._flatpickr;
//     const selectedDate = selectedDates[i];

//     datepickerButton.addEventListener("click", function () {
//       datepicker.open();
//     });

//     datepicker.config.onChange.push(function (selectedDates, dateStr, instance) {
//       if (selectedDates.length > 0) {
//         if (selectedDates.length === 1) {
//           selectedDate.textContent = selectedDates[0].toLocaleDateString();
//         } else {
//           const startDate = selectedDates[0].toLocaleDateString();
//           const endDate = selectedDates[selectedDates.length - 1].toLocaleDateString();
//           selectedDate.textContent = startDate + " - " + endDate;
//         }
//       } else {
//         selectedDate.textContent = "";
//       }
//     });
//   }
// });

// Booking widget on body

$(".book-select").on("click", function () {
  $(".book-item").not($(this).closest(".book-item")).find(".book-list, .icon-down-open-big").removeClass("active");

  $(this).parent(".book-item").find(".book-list, .icon-down-open-big").toggleClass("active");

  let bookItem = $(this).closest(".book-item");
  let bookWidget = bookItem.closest(".book-widget");
  bookWidget.find(".book-item").not(bookItem).find(".book-list-item").removeClass("active");
});

$(".book-list-item").on("click", function () {
  let selectedOption = $(this).attr("data-value");
  let bookItem = $(this).closest(".book-item");
  let selectedText = selectedOption.trim();
  let defaultText = bookItem.find(".selected-item").text().trim();

  if (selectedText !== defaultText) {
    bookItem.find(".selected-item").addClass("text-changed");
  } else {
    bookItem.find(".selected-item").removeClass("text-changed");
  }

  bookItem.find("input").val(selectedOption);
  bookItem.find(".selected-item").text(selectedOption);
  bookItem.find(".book-select, .icon-down-open-big, .book-list").removeClass("active");
});

$(".booking-date").on("change", function () {
  $(this).addClass('text-changed');
});

$(".side-language").on("click", function () {
  $('.side-language').toggleClass('active');
});

// Booking date plugin
// $(".booking-date").flatpickr({
//   // altInput: true,
//   // altFormat: "F j, Y",
//   showMonths: 2,
//   dateFormat: "m/d/y",
//   // allowInput: true,
//   mode: "range",
//   minDate: "today"
//   // maxDate: new Date().fp_incr(15)
// });





// General select dropdown

$('.select-header').on("click", function () {
  var selectOptions = $(this).siblings('.select-options');
  selectOptions.toggle();
  var selectContainer = $(this).closest('.custom-select');
  closeOtherSelects(selectContainer);
});

$('.option').on("click", function () {
  var selectedOption = $(this).text();
  var selectedValue = $(this).data('value');
  var selectHeader = $(this).closest('.custom-select').find('.select-header');
  var selectedOptionElement = selectHeader.find('.selected-option');

  if (selectedOptionElement.text() !== selectedOption) {
    selectedOptionElement.addClass('text-changed');
  } else {
    selectedOptionElement.removeClass('text-changed');
  }

  selectedOptionElement.text(selectedOption);
  $(this).closest('.select-options').hide();

  console.log('Selected Value:', selectedValue);
});

// Closing the dropdown if click outside of it.
$(document).on('click', function (e) {
  var target = $(e.target);
  if (!target.closest(".book-widget").length) {
    $(".book-item").find(".book-list, .icon-down-open-big").removeClass("active");
  }

  if (!target.closest('.custom-select').length) {
    $('.select-options').hide();
  }
});

function closeOtherSelects(currentSelectContainer) {
  var allSelectContainers = $('.custom-select');
  allSelectContainers.each(function () {
    var selectContainer = $(this);
    if (!selectContainer.is(currentSelectContainer)) {
      var selectOptions = selectContainer.find('.select-options');
      selectOptions.hide();
    }
  });
}


// Book now pop-up on header

$('.book-now').on("click", function () {
  $(".book-now-form-container").addClass('active');
  $("body").addClass('active');
  // $('html, body').animate({ scrollTop: 0 }, 'fast');
})

$('.close-btn').on("click", function () {
  $(".book-now-form-container").removeClass('active')
  $("body").removeClass('active');
})


// // Check if the animation has already been played
// const animationPlayed = localStorage.getItem("animationPlayed");

// if (!animationPlayed) {


//   // Set the flag indicating the animation has been played
//   localStorage.setItem("animationPlayed", true);
// } else {
//   // Hide the splash-screen element immediately if the animation has already been played
//   gsap.set(".splash-screen", { display: "none" });
// }


// gsap.timeline();


// Input time start js
const timeStart = document.querySelectorAll('.input-time-start');
const timeEnd = document.querySelectorAll('.input-time-end');

function addActiveClass() {
  this.classList.add('active');
}

timeStart.forEach(function (input) {
  input.addEventListener('change', addActiveClass);
  input.addEventListener('click', addActiveClass);
});

timeEnd.forEach(function (input) {
  input.addEventListener('change', addActiveClass);
  input.addEventListener('click', addActiveClass);
});

// Validation form book-now

// const bookForm = document.querySelector('.book-now-submit-form');

// bookForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // Validate the form
//   if (validateBookForm()) {
//     // If the form is valid, submit it
//     bookForm.submit();
//   } else {
//     console.log('test')
//   }

// })

// function validateBookForm() {
//   const requiredInputs = bookForm.querySelectorAll('[required]');

//   for (let i = 0; i < requiredInputs.length; i++) {
//     if (requiredInputs[i].value.trim() === '') {
//       alert('Please fill in all required fields.');
//       return false;
//     }
//   }

//   return true;
// }


// Screen Size for to wrap my slider
// window.addEventListener('resize', function () {
//   var screenWidth = window.innerWidth;
//   var blockContent_2 = document.querySelector('.block-content-2');
//   blockContent_2.style.maxWidth = `${screenWidth}px`;


//   console.log(blockContent_2.style.maxWidth = `${screenWidth}px`)
// });

