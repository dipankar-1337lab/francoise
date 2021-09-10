(function () {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})();


(function () {
  'use strict'

  document.querySelector('#navbarSideClose').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.remove('open')
  })
})();



var closeMenuG = document.getElementsByClassName('naver');

Array.prototype.forEach.call(closeMenuG, function (element) {
  element.addEventListener('click', function () {
    document.querySelector('.b2c-collapse').classList.remove('open')
    document.querySelector('.b2b-collapse').classList.remove('open')
    document.querySelector('.offcanvas-collapse').classList.remove('open')
  });
});

////// select service type ////

(function () {
  'use strict'
  document.querySelector('#leftMenu').addEventListener('click', function () {
    document.querySelector('.b2c-collapse').classList.toggle('open');
    document.querySelector('.navbar-brand').classList('logoSmall')
  })
})();

(function () {
  'use strict'
  document.querySelector('#rightMenu').addEventListener('click', function () {
    document.querySelector('.b2b-collapse').classList.toggle('open')
  })
})();

////// close service type ////
(function () {
  'use strict'
  document.querySelector('#closer').addEventListener('click', function () {
    document.querySelector('.b2b-collapse').classList.remove('open')
  })
})();
(function () {
  'use strict'
  document.querySelector('#closer2').addEventListener('click', function () {
    document.querySelector('.b2c-collapse').classList.remove('open')
  })
})();

////// Logo on Scroll //////
$(window).scroll(function () {
  if ($(this).scrollTop() > 1550) {
	  
    $('.navbar').addClass('fixbar');
    $('.logo').addClass('logoSmall');
  } else {
    $('.logo').removeClass('logoSmall');
    $('.navbar').removeClass('fixbar');
  }
});

var carousel = $('.testimonials .carousel-item');
for (var i = 0; i < carousel.length; i++) {
  var dataBg = $(carousel[i]).attr('data-image')
  $(carousel[i]).css('background-image', 'url(' + dataBg + ')')
}