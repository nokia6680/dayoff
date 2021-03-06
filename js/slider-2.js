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
        settings: "unslick"
      },
      {
        breakpoint: 1366,
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

$('#my-arrow-next').click(function() {
  $('#my-checkbox').prop('checked', true);
});
$('#my-arrow-prev').click(function() {
  $('#my-checkbox').prop('checked', false);
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

/*Слайдер в попапе winner*/
$(document).ready(function() {
  $('.popup-winner__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    arrows: true,
    prevArrow: $('.w-prev'),
    nextArrow: $('.w-next')
  });
});
