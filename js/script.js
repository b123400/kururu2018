var didPerformCdAnimation = false;

$(function(){
  if ($(window).width() <= 500) return;
  initCdAnimations();
  initSection2Animation();

  $(window).scroll(updateCdOverlay);
  $(window).scroll(reshowHero);
  updateCdOverlay();

  $(window).scroll(updateSection2Animation);
  updateSection2Animation();

  $(window).scroll(updateSection3Offset);
  $(window).scroll(updateSection4Effect);
});

function initCdAnimations() {
  $('.cd').css({'opacity': '0'});
  $('.cd-description').css({
    'opacity': '0',
    'transform': 'translateX(100px)'
  });
}

function updateCdOverlay() {
  var scrollTop = $(window).scrollTop();
  if (didPerformCdAnimation) {
    if (scrollTop > 200) {
      $('.hero-img').fadeOut(500);
    }
    return;
  }
  if (scrollTop < 200) return;

  didPerformCdAnimation = true;

  var offset = $('.hero-img img').offset();
  var width = $('.hero-img img').width();
  var height = $('.hero-img img').height();

  var cdOffset = $('.cd').offset();
  var cdWidth = $('.cd').width();
  var cdHeight = $('.cd').height();

  var targetLeft = (offset.left + 344 / 1915 * width);
  var targetTop = offset.top;
  var targetWidth = width * 1465 / 1915;
  var targetHeight = height * 1358 / 1417;

  $('.cd').css({
    'transform': 'translateX('+ (targetLeft - cdOffset.left) +'px) '
               + 'translateY('+ (targetTop - cdOffset.top) +'px) '
               + 'scaleX('+ (targetWidth / cdWidth) +') '
               + 'scaleY('+ (targetHeight / cdHeight) +') ',
    'opacity': 1,
  });
  $('.cd__cover').addClass('peek');
  setTimeout(function() {
    $('.cd').css({
      'transform': 'rotateX(5deg) rotateY(-5deg)',
      'transition': 'all 1s'
    });
    $('.cd-description').css({
      'opacity': '1',
      'transform': 'translateX(0px)',
      'transition': 'all 1s'
    });
    $('.hero-img').fadeOut(500);
  });
};

function reshowHero() {
  if (!didPerformCdAnimation) return;
  if ($(window).scrollTop() >= 200) return;
  $('.hero-img').fadeIn(500);
};

function initSection2Animation() {
  $('.strap').css({
    'transform': 'translateX(100px)'
  });
  $('.mousepad').css({
    'transform': 'translateX(-100px)'
  });
}
function updateSection2Animation() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > $('.strap').offset().top - $(window).height() / 2) {
    $('.strap').css({
      'transform': 'translateX(0)',
      'transition': 'all 1s'
    });
    $('.mousepad').css({
      'transform': 'translateX(0)',
      'transition': 'all 1s'
    });
  }
}

function updateSection3Offset() {
  var scrollTop = $(window).scrollTop();
  $('.tokutens').css({
    'transform': 'translateY(0px)'
  });
  var offset = $('.tokutens').offset();
  if (scrollTop > offset.top && scrollTop < $('.bag').offset().top) {
    var scale = Math.max(0.6, (200 - (scrollTop - offset.top)) / 200);
    $('.tokutens').css({
      'transform': 'translateY('+ (scrollTop - offset.top) * 1.6 +'px)'
                 + 'scaleX('+scale+') scaleY('+scale+')'
    });
  } else {
    $('.tokutens').css({
      'transform': 'translateY(0px)'
    });
  }
}

function updateSection4Effect() {
  var scrollTop = $(window).scrollTop();
  var viewportHeight = $(window).height();
  if (scrollTop + viewportHeight / 5 * 4 > $('.bag').offset().top && scrollTop < $('.bag').offset().top) {
    $('.section4 .effects').css({
      'transform': 'translateY(0px)'
    });
    var offset = $('.section4 .effects').offset();
    $('.section4 .effects').css({
      'transform': 'translateY('+ (scrollTop - offset.top) * 1.2 +'px)',
      'opacity': Math.min(1, Math.max(0, 1 - ($('.bag').offset().top - (viewportHeight / 2) - scrollTop) / (viewportHeight * 0.4)))
    })
  } else {
    $('.section4 .effects').css({
      'transform': 'translateY(0px)',
      'opacity': 0,
    });
  }
}

console.log('誰かこの汚いソースコードをなんとかしてください');
