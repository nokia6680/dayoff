var menuOpener = document.querySelector('.header-nav__toggle');
var menu = document.querySelector('.nav-list');

menuOpener.addEventListener('click', function () {
  menu.classList.toggle('active');
  menuOpener.classList.toggle('open');

  return false;
});

var menuShow = document.querySelector(".intro-controls");
var openButton = document.querySelectorAll(".intro__opener");
var closeButton = document.querySelector(".intro__closer")

if (menuShow) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    menuShow.classList.add("intro-controls--active");
  });

  menuShow.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", function() {
    menuShow.classList.remove("intro-controls--active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      menuShow.classList.remove("intro-controls--active");
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
