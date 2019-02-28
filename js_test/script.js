function cartCalc(){
  $('.cartcalc .ccalc-minus').click(function(){
    var a = $(this).closest('.cartcalc').find('input').val();
    if(a>1){
      var b = +a-1;
      $(this).closest('.cartcalc').find('input').val(b);
    }else{
      $(this).closest('.cartcalc').find('input').val(a);
    }
  });
  $('.cartcalc .ccalc-plus').click(function(){
    var a = $(this).closest('.cartcalc').find('input').val();
    var n = $(this).closest('.cartcalc').attr('data-maxval');
    if(a == n){
      var b = a;
      $(this).closest('.cartcalc').find('.cartcalcmaxinf').fadeIn(500).delay(2000).fadeOut(500);
    }else{
      var b = +a+1;
      $(this).closest('.cartcalc').find('input').val(b);
    }
  });
}
function delCartUn(){
  $('.closecartbtn').click(function(){
    $(this).closest('.newcart-un').remove();
  });
}
function cartNewFormTabs(){
  $('.newcartformtabs span').click(function(){
    var a = $(this).attr('data-nctabl');
    $('.newcartformtabs span').removeClass('active');
    $(this).addClass('active');
    $('.newcartformcont').slideUp(200);
    $('.newcartformcont'+a).slideDown(500);
  });
}
function cartUper(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 350) {
    $('.uper').fadeIn();
    } else {
    $('.uper').fadeOut();
    }
  });

  $('.uper').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
}

// $(function() {
//   $('select').styler({
//     selectSearch: true,
//   });
// });
$(document).ready(function(){
  cartCalc();
  delCartUn();
  cartNewFormTabs();
  cartUper();
});

function footerOpen(){
    $('.footer-text-open').click(function(){
        var a = $(this).attr('data-foot-open');
        $('.footer-content-open'+a).slideToggle();
        $(this).toggleClass('footer-text-close');    
    });
};
function tabActive(){
    $('.tab-wrap1 a').mousedown(function(){
        $('.tab-wrap1 a').removeClass('active');
        $(this).addClass('active');
    });

    $('.tab-wrap2 a').mousedown(function(){
        $('.tab-wrap2 a').removeClass('active');
        $(this).addClass('active');
    });
};
function tvShow(){
    var a = $('.tv-show>img').height();
    $('.tv-show-content').css('height', a);
}

function bars(){
    $('.bars').click(function(){
        $('.main-menu').toggleClass('hei-auto');
    });
}
function menuFilter(){
    $('.catalog-filtel-link span').click(function(){
        $(this).toggleClass('down');
        $('.catalog-menu-open').toggleClass('openner');
    });
    $(document).click(function (e){ // отслеживаем событие клика по веб-документу
        var b = $(".catalog-filtel-link"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!b.is(e.target) // проверка условия если клик был не по нашему блоку
            && b.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            $('.catalog-menu-open').removeClass('openner'); // если условия выполняются - скрываем наш элемент
            $('.catalog-filtel-link span').removeClass('down');
        }
    });
}
function slideImg(){
    var a = $('.products-slider-wrap .carousel').width();
    $('.products-slider-wrap .item').css('max-height', a);
    $('.products-slider-wrap .item img').css('max-height', a);
}

function sliderTab(){
    var n = $('.nav-tabs.nav-tabs-product li').length;
    for(var i = 1; i <= n; i++){
        $('.nav-tabs.nav-tabs-product li:nth-child('+i+')').attr('data-li-visual', i);
    }
    var hei = $('.nav-tabs-product-wrap').height()
    //$('.nav-tabs-product-wrap').css('height', hei);
    var heili = hei/10;
    $('.nav-tabs-product li .nav-tabs-product-img-prev').css('height', heili);

    $('.fa-angle-up').click(function(){
        var a = $('.nav-tabs.nav-tabs-product li.active').attr('data-li-visual');
        var b = +a-1;
        var c = +a-2;
        var d = +a-3;
        var p = +n-a;
        if(a>2 && p!=0){
            $('.nav-tabs.nav-tabs-product li').slideUp(1).removeClass('active').removeClass('op');
            $('.nav-tabs.nav-tabs-product li:nth-child('+a+')').slideDown(100).addClass('op');
            $('.nav-tabs.nav-tabs-product li:nth-child('+b+')').slideDown(100).addClass('active');
            $('.nav-tabs.nav-tabs-product li:nth-child('+c+')').slideDown(100).addClass('op');
            $('.tab-pane.fade').removeClass('in active');
            $('.tab-pane.fade:nth-child('+b+')').addClass('in active');
        }else if(a>2 && p==0){
            $('.nav-tabs.nav-tabs-product li').slideUp(1).removeClass('active').removeClass('op');
            $('.nav-tabs.nav-tabs-product li:nth-child('+b+')').slideDown(100).addClass('op');
            $('.nav-tabs.nav-tabs-product li:nth-child('+c+')').slideDown(100).addClass('active');
            $('.nav-tabs.nav-tabs-product li:nth-child('+d+')').slideDown(100).addClass('op');
            $('.tab-pane.fade').removeClass('in active');
            $('.tab-pane.fade:nth-child('+c+')').addClass('in active');
        }
    });
    $('.fa-angle-down').click(function(){
        var a = $('.nav-tabs.nav-tabs-product li.active').attr('data-li-visual');
        var b = +a+1;
        var c = +a+2;
        var d = +a+3;
        var p = +n-a;
        if(a>0 && p>2){
            $('.nav-tabs.nav-tabs-product li').slideUp(1).removeClass('active').removeClass('op');
            $('.nav-tabs.nav-tabs-product li:nth-child('+b+')').slideDown(100).addClass('op');
            $('.nav-tabs.nav-tabs-product li:nth-child('+c+')').slideDown(100).addClass('active');
            $('.nav-tabs.nav-tabs-product li:nth-child('+d+')').slideDown(100).addClass('op');
            $('.tab-pane.fade').removeClass('in active');
            $('.tab-pane.fade:nth-child('+c+')').addClass('in active');
        }else if(a>0 && p>1){
            $('.nav-tabs.nav-tabs-product li').slideUp(1).removeClass('active').removeClass('op');
            $('.nav-tabs.nav-tabs-product li:nth-child('+a+')').slideDown(100).addClass('op');
            $('.nav-tabs.nav-tabs-product li:nth-child('+b+')').slideDown(100).addClass('active');
            $('.nav-tabs.nav-tabs-product li:nth-child('+c+')').slideDown(100).addClass('op');
            $('.tab-pane.fade').removeClass('in active');
            $('.tab-pane.fade:nth-child('+b+')').addClass('in active');
        }
    });
}

function rubricHeight(){
    var a = $('.rubric-unit-etalon').height();
    var b = a/2;
    $('.rubric-unit').css('height', b);
    $('.rubric-unit-double').css('height', a);
}


$(document).ready(function() {
    var a = $('.rubric-unit-etalon').height();
    var b = a/2;
    $('.rubric-unit-one').css('height', b);
    $('.rubric-unit-double').css('height', a);
    sliderTab();
    menuFilter()
    footerOpen();
    tabActive();
    tvShow();
    bars();
    slideImg();
    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $(".main-menu"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            $('.main-menu').removeClass('hei-auto'); // если условия выполняются - скрываем наш элемент
        }
    });


    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
        $('.uper').fadeIn();
        } else {
        $('.uper').fadeOut();
        }
    });
    $(window).resize(function(){
        tvShow();
    $('.rubric-unit').css('height', 'auto');
    var aa = $('.rubric-unit-etalon').height();
    var bb = aa/2;
    $('.rubric-unit-one').css('height', bb);
    $('.rubric-unit-double').css('height', aa);
    });


});