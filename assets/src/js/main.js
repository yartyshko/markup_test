//= ../../../node_modules/jquery/dist/jquery.js
//= ../../../node_modules/slick-carousel/slick/slick.min.js

$('.slider').each(function(){
    $(this).find('.slider__images').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: $(this).find('.slider__list'),
      dots: false,
      arrows: false
    });

    $(this).find('.slider__list').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: $(this).find('.slider__images'),
      dots: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      appendDots: $('.slider__dots')
    });
});

const btnNav = document.querySelector('.navbar-toggle');
const openMenu = document.querySelector('.header__nav')

btnNav.addEventListener('click', function () {
    btnNav.classList.toggle('active');
    openMenu.classList.toggle('active');
});