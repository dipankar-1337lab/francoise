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
  if ($(this).scrollTop() > 950) {

    $('.navbar').addClass('fixbar');
    $('.logo').addClass('logoSmall');
  } else {
    $('.logo').removeClass('logoSmall');
    $('.navbar').removeClass('fixbar');
  }
});

// var carousel = $('.testimonials .carousel-item');
// for (var i = 0; i < carousel.length; i++) {
//   var dataBg = $(carousel[i]).attr('data-image')
//   $(carousel[i]).css('background-image', 'url(' + dataBg + ')')
// }

var testModalLink = $('.mobi-testi').find('ul li a')
console.log(testModalLink)

$('.mobi-testi').find('ul li a').click(function(e){
  var testContent = $(this).find('p').html();
  var testHead = $(this).find('h4').html();
  var testSubtHead = $(this).find('h5').html();
  $('#testiMobileModal .modal-content p').html(testContent)
  $('#testiMobileModal .modal-content h4').empty().append(testHead)
  $('#testiMobileModal .modal-content h5').empty().append(testSubtHead)
})

var windowWidth = $(window).width();
if(windowWidth < 767){
  $('.desk-testi').remove();
}