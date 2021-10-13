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

// (function () {
//   'use strict'
//   document.querySelector('#leftMenu').addEventListener('click', function () {
//     document.querySelector('.b2c-collapse').classList.toggle('open');
//     document.querySelector('.navbar-brand').classList('logoSmall')
//   })
// })();

// (function () {
//   'use strict'
//   document.querySelector('#rightMenu').addEventListener('click', function () {
//     document.querySelector('.b2b-collapse').classList.toggle('open')
//   })
// })();

////// close service type ////
// (function () {
//   'use strict'
//   document.querySelector('#closer').addEventListener('click', function () {
//     document.querySelector('.b2b-collapse').classList.remove('open')
//   })
// })();
// (function () {
//   'use strict'
//   document.querySelector('#closer2').addEventListener('click', function () {
//     document.querySelector('.b2c-collapse').classList.remove('open')
//   })
// })();

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

$('#mobreview').find('ul li a').click(function(e){
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

$(document).ready(function(){
 
  $("#contact_form_contact").submit(function(e){
    var required_err = false;
    e.preventDefault();
    frm = $(this);

    if($('#contact_form_contact input[name=firstName]').val().trim() == ''){
      $('#contact_form_contact input[name=firstName]').attr('placeholder','Please fill out this field');
      $('#contact_form_contact input[name=firstName]').addClass('placeholder-err')
      required_err = true;
    }
    if($('#contact_form_contact input[name=lastName]').val().trim() == ''){
      $('#contact_form_contact input[name=lastName]').attr('placeholder','Please fill out this field');
      $('#contact_form_contact input[name=lastName]').addClass('placeholder-err')
      required_err = true;
    }
    if($('#contact_form_contact input[name=email]').val().trim() == ''){
      $('#contact_form_contact input[name=email]').attr('placeholder','Please fill out this field');
      $('#contact_form_contact input[name=email]').addClass('placeholder-err')
      required_err = true;
    }

    if($('#contact_form_contact input[name=mobile]').val().trim() == ''){
      $('#contact_form_contact input[name=mobile]').attr('placeholder','Please fill out this field');
      $('#contact_form_contact input[name=mobile]').addClass('placeholder-err')
      required_err = true;
    }

    if(required_err)
      return false;
      
  })


  $("#contact_form").submit(function(e){
    var required_err = false;
    e.preventDefault();
    frm = $(this);
    if($('#contact_form input[name=firstName]').val().trim() == ''){
      $('#contact_form input[name=firstName]').attr('placeholder','Please fill out this field');
      $('#contact_form input[name=firstName]').addClass('placeholder-err')
      required_err = true;
    }
    if($('#contact_form input[name=lastName]').val().trim() == ''){
      $('#contact_form input[name=lastName]').attr('placeholder','Please fill out this field');
      $('#contact_form input[name=lastName]').addClass('placeholder-err')
      required_err = true;
    }
    if($('#contact_form input[name=companyName]').val().trim() == ''){
      $('#contact_form input[name=companyName]').attr('placeholder','Please fill out this field');
      $('#contact_form input[name=companyName]').addClass('placeholder-err')
      required_err = true;
    }
    if($('#contact_form input[name=jobtitle]').val().trim() == ''){
      $('#contact_form input[name=jobtitle]').attr('placeholder','Please fill out this field');
      $('#contact_form input[name=jobtitle]').addClass('placeholder-err')
      required_err = true;
    }
    if($('#contact_form input[name=email]').val().trim() == ''){
      $('#contact_form input[name=email]').attr('placeholder','Please fill out this field');
      $('#contact_form input[name=email]').addClass('placeholder-err')
      required_err = true;
    }
    if($('#contact_form input[name=number]').val().trim() == ''){
      $('#contact_form input[name=number]').attr('placeholder','Please fill out this field');
      $('#contact_form input[name=number]').addClass('placeholder-err')
      required_err = true;
    }
    // if($('#contact_form select[name=area_of_interest]').val().trim() == ''){
    //   $('#contact_form select[name=area_of_interest]').attr('placeholder','Please fill out this field');
    //   $('#contact_form select[name=area_of_interest]').addClass('placeholder-err')
    // }
    if(required_err)
      return false;
  
    $.ajax({
      type: 'post',
      url: 'http://35.174.88.27/francoise/email.php',
      data: frm.serialize(),
      success: function (data) {
          console.log('Submission was successful.');
          console.log(data);
          frm.parents('.modal-content').find('form').hide();
          frm.parents('.modal-content').find('.thankyouWrp').show();
      },
      error: function (data) {
          console.log('An error occurred.');
          console.log(data);
      },
  });
  })
})
