var menuShow = document.querySelector(".content-show");
var openButton = document.querySelectorAll(".choose-slider__show");
var closeButton = document.querySelector(".show-filter__close")


if (menuShow) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    menuShow.classList.add("content-show--visible");
  });

  menuShow.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", function() {
    menuShow.classList.remove("content-show--visible");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      menuShow.classList.remove("content-show--visible");
    }
  });
}

$(document).ready(function() {
  $(".choose-slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,

    responsive: [{
        breakpoint: 9999,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 1280,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          prevArrow: '<div class="prev"></div>',
          nextArrow: '<div class="next"></div>',
        }
      },
      {
        breakpoint: 500,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});

$(document).ready(function() {
  $(".show-slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,

    prevArrow: '<div class="prev-2"></div>',
    nextArrow: '<div class="next-2"></div>',

    responsive: [{
        breakpoint: 9999,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          prevArrow: '<div class="prev-2"></div>',
          nextArrow: '<div class="next-2"></div>',
        }
      },
      {
        breakpoint: 1280,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          prevArrow: '<div class="prev-2"></div>',
          nextArrow: '<div class="next-2"></div>',
        }
      },
      {
        breakpoint: 500,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});
