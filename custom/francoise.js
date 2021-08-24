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


 
var closeMenuG =  document.getElementsByClassName('naver');

Array.prototype.forEach.call(closeMenuG, function(element) {
  element.addEventListener('click', function() {
       document.querySelector('.b2c-collapse').classList.remove('open')
       document.querySelector('.b2b-collapse').classList.remove('open')  
    document.querySelector('.offcanvas-collapse').classList.remove('open')
  });
});

////// select service type ////

(function () {
  'use strict'
 document.querySelector('#leftMenu').addEventListener('click', function () {
    document.querySelector('.b2c-collapse').classList.toggle('open')
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