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

function validatePhoneNumber(elementValue){
  var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return phoneNumberPattern.test(elementValue);
}

$(document).ready(function(){

  $('#contact_form input[name=number]').mask('(000) 000-0000');
  $('#contact_form_contact input[name=mobile]').mask('(000) 000-0000');
 
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
    } else {
      var phone_number = $('#contact_form_contact input[name=mobile]').val().trim();
      if(!validatePhoneNumber(phone_number)){
        $('#contact_form_contact input[name=mobile]').css('color','#ff0000');
        required_err = true;
      } else {
        $('#contact_form_contact input[name=mobile]').css('color','#000000')
      }

    }

    if(required_err)
      return false;

    $.LoadingOverlay("show", {
      image:"",
      fontawesome : "fa fa-cog fa-spin"
    });

    $.ajax({
      type: 'post',
      url: 'http://35.174.88.27/francoise/email.php',
      data: frm.serialize(),
      success: function (data) {
          $.LoadingOverlay("hide", true);
          console.log('Submission was successful.');
          console.log(data);
          // frm.parents('.modal-content').find('form').hide();
          $('#thankYou').modal('show');
          frm.trigger("reset");
      },
      error: function (data) {
          $.LoadingOverlay("hide", true);
          console.log('An error occurred.');
          console.log(data);
      },
    });

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
    } else {
      var phone_number = $('#contact_form input[name=number]').val().trim();
      if(!validatePhoneNumber(phone_number)){
        $('#contact_form input[name=number]').css('color','#ff0000');
        required_err = true;
      } else {
        $('#contact_form input[name=number]').css('color','#ffffff')
      }

    }
    // console.log($('#contact_form input[name=number]').val().trim())
    // if($('#contact_form select[name=area_of_interest]').val().trim() == ''){
    //   $('#contact_form select[name=area_of_interest]').attr('placeholder','Please fill out this field');
    //   $('#contact_form select[name=area_of_interest]').addClass('placeholder-err')
    // }
    if(required_err)
      return false;

    $.LoadingOverlay("show", {
      image:"",
      fontawesome : "fa fa-cog fa-spin"
    });
  
    $.ajax({
      type: 'post',
      url: 'http://35.174.88.27/francoise/email.php',
      data: frm.serialize(),
      success: function (data) {
        $.LoadingOverlay("hide", true);
          console.log('Submission was successful.');
          console.log(data);
          // frm.parents('.modal-content').find('form').hide();
          // frm.parents('.modal-content').find('.thankyouWrp').show();
          // frm.parents('.contactWrp').find('.thankyouWrp').show(function(){
          //   $('#contactForm').modal('show');
          // });
          $('#b2bForm').modal('hide');
          $('#thankYou').modal('show');
          frm.trigger("reset");
      },
      error: function (data) {
        $.LoadingOverlay("hide", true);
          console.log('An error occurred.');
          console.log(data);
      },
    });
  })
})
