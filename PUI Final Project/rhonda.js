interact('.draggable')  
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,
    // call this function on every dragmove event
    onmove: dragMoveListener,
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

// enable draggables to be dropped into this
interact('.dropzone').dropzone({  
  // Require a 50% element overlap for a drop to be possible
  overlap: 0.50,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var showOrange = document.getElementById('orangefact');
    var showPasta = document.getElementById('pastafact');
    var showStraw = document.getElementById('strawfact');
    var showBread = document.getElementById('breadfact');
    var showFish = document.getElementById('fishfact');
    var showWine= document.getElementById('winefact');
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    if (event.relatedTarget.id == 'orange') {
      showOrange.style.visibility='visible';
      showPasta.style.visibility='hidden';
      showStraw.style.visibility='hidden';
      showBread.style.visibility='hidden ';
      showFish.style.visibility='hidden';
      showWine.style.visibility='hidden';
    }
    if (event.relatedTarget.id == 'pasta') {
      showPasta.style.visibility='visible';
      showOrange.style.visibility='hidden';
      showBread.style.visibility='hidden';
      showStraw.style.visibility='hidden';
      showFish.style.visibility='hidden';
      showWine.style.visibility='hidden';
    }
    if (event.relatedTarget.id == 'strawberry') {
      showStraw.style.visibility='visible';
      showOrange.style.visibility='hidden';
      showPasta.style.visibility='hidden';
      showBread.style.visibility='hidden ';
      showFish.style.visibility='hidden';
      showWine.style.visibility='hidden';

    }
    if (event.relatedTarget.id == 'bread') {
      showBread.style.visibility='visible';
      showOrange.style.visibility='hidden';
      showPasta.style.visibility='hidden';
      showStraw.style.visibility='hidden';
      showFish.style.visibility='hidden';
      showWine.style.visibility='hidden';

    }
    if (event.relatedTarget.id == 'fish') {
      showFish.style.visibility='visible';
      showOrange.style.visibility='hidden';
      showPasta.style.visibility='hidden';
      showStraw.style.visibility='hidden';
      showBread.style.visibility='hidden ';
      showWine.style.visibility='hidden';


    }
    if (event.relatedTarget.id == 'wine') {
      showWine.style.visibility='visible';
      showOrange.style.visibility='hidden';
      showPasta.style.visibility='hidden';
      showStraw.style.visibility='hidden';
      showBread.style.visibility='hidden ';
      showFish.style.visibility='hidden';

    }
  },

  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
  },

  // ondrop: function (event) {
  //   event.target.classList.add('orange-target')
  //   if (event.relatedTarget.id = 'orange') {
  //     event.target.style.color = "blue"
  //   }
  //   event.relatedTarget.textContent = 'Dropped';
  // },
  // ondropdeactivate: function (event) {
  //   // remove active dropzone feedback
  //   event.target.classList.remove('drop-active');
  //   event.target.classList.remove('drop-target');
  // }
}); 

jQuery(document).ready(function( $ ) {

  $(window).scroll(function () {
    var height = $(window).height();
    var scroll = $(window).scrollTop();
    if (scroll) {
      $(".header-hide").addClass("scroll-header");
    } else {
      $(".header-hide").removeClass("scroll-header");
    }

  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

// custom code


});

