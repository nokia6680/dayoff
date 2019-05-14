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
/*Открытие попапа правил*/
var rulesShow = document.querySelector(".popup-rules");
var rulesButton = document.querySelectorAll(".nav-list__btn--howto");
var closeRulesButton = document.querySelector(".popup-rules__close")

if (rulesShow) {
  for (var i = 0; i < rulesButton.length; i++) rulesButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    rulesShow.classList.add("popup-rules--active");
  });

  rulesShow.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeRulesButton.addEventListener("click", function() {
    rulesShow.classList.remove("popup-rules--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      rulesShow.classList.remove("popup-rules--active");
    }
  });
}

/*Открытие попапа правил*/
var prizeShow = document.querySelector(".popup-prize");
var prizeButton = document.querySelectorAll(".nav-list__btn--prize");
var closePrizeButton = document.querySelector(".popup-prize__close")

if (prizeShow) {
  for (var i = 0; i < prizeButton.length; i++) prizeButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    prizeShow.classList.add("popup-prize--active");
  });

  prizeShow.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closePrizeButton.addEventListener("click", function() {
    prizeShow.classList.remove("popup-prize--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      prizeShow.classList.remove("popup-prize--active");
    }
  });
}

/*Открытие попапа правил*/
var regShow = document.querySelector(".popup-register");
var regButton = document.querySelectorAll(".main-rules__submit");
var closeRegButton = document.querySelector(".popup-register__close")

if (regShow) {
  for (var i = 0; i < regButton.length; i++) regButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    regShow.classList.add("popup-register--active");
  });

  regShow.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeRegButton.addEventListener("click", function() {
    regShow.classList.remove("popup-register--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      regShow.classList.remove("popup-register--active");
    }
  });
}



$(document).ready(function() {
  $('.choose-slider').on('setPosition', function(slick){
  $('.choose-slider__show').droppable({
      activeClass: "choose-slider__show--active",
      hoverClass: "choose-slider__show--hover",
      drop: function( event, ui ) {
          var $self = $(this);
          var $draggableEl = $(ui.draggable);
          $self.addClass('choose-slider__show--selected').find('input').val($draggableEl.data('show'));
          $self.find('.choose-slider__details').css('backgroundImage', 'url("'+$draggableEl.data('img-src')+'")');

          //$self.attr('data-check-preschool',$draggableEl.data('preschool'));
          //$self.attr('data-check-liveaction',$draggableEl.data('liveaction'));
          //$self.attr('data-check-animation',$draggableEl.data('animation'));
      }
  });
});

  $(".choose-slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: document.querySelector('#my-arrow-next'),
    prevArrow: document.querySelector('#my-arrow-prev'),

    responsive: [{
        breakpoint: 9999,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: false,
          dots: false,
          arrows: true,
          nextArrow: document.querySelector('#my-arrow-next'),
          prevArrow: document.querySelector('#my-arrow-prev')
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
          nextArrow: document.querySelector('#my-arrow-next'),
          prevArrow: document.querySelector('#my-arrow-prev')
        }
      },
      {
        breakpoint: 500,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          nextArrow: document.querySelector('#my-arrow-next'),
          prevArrow: document.querySelector('#my-arrow-prev')
        }
      }
    ]
  });
});

$('.controls-switch__btn--sun').on('click', function() {
  $('.choose-slider').slick('slickPrev');
});

$('.controls-switch__btn--moon').on('click', function() {
  $('.choose-slider').slick('slickNext');
});

$('.controls-switch__checkbox').on('change', function() {
  if ($(this).prop('checked'))
    $('.choose-slider').slick('slickNext');
  else
    $('.choose-slider').slick('slickPrev');
});

/*
$('.controls-switch__toggle').on('click', function() {
  $('.choose-slider').slick('slickNext');
});

$('.controls-switch__toggle').on('click', function() {
  $('.choose-slider').slick('slickPrev');
});*/

$('#my-arrow-next').click(function() {
  $('#my-checkbox').prop('checked', true);
});
$('#my-arrow-prev').click(function() {
  $('#my-checkbox').prop('checked', false);
});

$('.show-slider').on('init', function(event, slick) {
  $(function() {
	   $('#draggable').draggable();
  });
})

$(document).ready(function() {
    $('.show-slider--desktop').on('setPosition', function(slick){
    $('*[draggable!=true]','.slick-track').unbind('dragstart');
    $('.show-list__details').draggable({
      appendTo: $('body'),
      helper: "clone",
      revertDuration: 200,
      start: function (event, ui) {

      },
      stop: function (event, ui) {

      },
      drag: function( event, ui ) {

      },
      revert: function (target) {

      },
      zIndex: 9999
    });
  });
  $(".show-slider").slick({
    infinite: false,
    slidesToShow: 1,
    draggable: false,
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

/*Слайдер в попапе c часами*/
$(document).ready(function() {
  $('.vote-slider--mobile').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    arrows: false
  });
});

/*Слайдер в попапе c топ шоу*/
$(document).ready(function() {
  $('.top-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    arrows: false
  });
});
